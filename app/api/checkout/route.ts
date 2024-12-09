import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import prismadb from "@/lib/prismadb";
import { auth } from "@/auth";

export async function POST(req: Request) {
  const { products } = await req.json();

  const session = await auth();

  if (!products || products.length === 0) {
    return new NextResponse("Product data is required", { status: 400 });
  }

  const productIds = products.map(
    (product: { id: string; quantity: number }) => product.id
  );

  // Buscar variantes de productos avanzados
  const variants = await prismadb.productVariant.findMany({
    where: { id: { in: productIds } },
    include: { advancedProduct: true },
  });

  // Buscar productos normales
  const simpleProducts = await prismadb.product.findMany({
    where: { id: { in: productIds } },
  });

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  // Procesar variantes de productos avanzados
  variants.forEach((variant) => {
    const productInCart = products.find(
      (p: { id: string; quantity: number }) => p.id === variant.id
    );

    if (productInCart && productInCart.quantity > 0) {
      line_items.push({
        quantity: productInCart.quantity,
        price_data: {
          currency: "USD",
          product_data: {
            name: `${variant.advancedProduct?.name} - ${variant.name}`,
          },
          unit_amount: Math.round(variant.price * 100),
        },
      });
    }
  });

  // Procesar productos normales
  simpleProducts.forEach((product) => {
    const productInCart = products.find(
      (p: { id: string; quantity: number }) => p.id === product.id
    );

    if (productInCart && productInCart.quantity > 0) {
      line_items.push({
        quantity: productInCart.quantity,
        price_data: {
          currency: "USD",
          product_data: {
            name: product.name,
          },
          unit_amount: Math.round(product.price * 100),
        },
      });
    }
  });

  if (line_items.length === 0) {
    return new NextResponse("No valid line items found", { status: 400 });
  }

  // Registrar la orden en la base de datos
  const user = await prismadb.user.findUnique({
    where: { id: session?.user.id },
  });

  const order = await prismadb.order.create({
    data: {
      userId: user?.id,
      isPaid: false,
      orderItems: {
        create: products.map((product: { id: string; quantity: number }) => {
          const isVariant = variants.some(
            (variant) => variant.id === product.id
          );

          if (isVariant) {
            return {
              quantity: product.quantity,
              productVariant: {
                connect: {
                  id: product.id,
                },
              },
            };
          } else {
            return {
              quantity: product.quantity,
              product: {
                connect: {
                  id: product.id,
                },
              },
            };
          }
        }),
      },
    },
  });

  // Crear sesión de Stripe Checkout
  const sessionStripe = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    billing_address_collection: "required",
    phone_number_collection: { enabled: true },
    success_url: `${process.env.FRONTEND_STORE_URL}/payment?success=true`,
    cancel_url: `${process.env.FRONTEND_STORE_URL}/payment?success=false`,
    metadata: { orderId: order.id },
  });

  return NextResponse.json({ url: sessionStripe.url });
}
