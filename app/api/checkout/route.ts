import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  const { products } = await req.json();

  if (!products || products.length === 0) {
    return new NextResponse("Product data is required", { status: 400 });
  }

  const productIds = products.map(
    (product: { id: string; quantity: number }) => product.id
  );

  const foundProducts = await prismadb.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
  });

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  foundProducts.forEach((product) => {
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

  const order = await prismadb.order.create({
    data: {
      isPaid: false,
      orderItems: {
        create: products.map((product: { id: string; quantity: number }) => ({
          product: {
            connect: {
              id: product.id,
            },
          },
          quantity: product.quantity,
        })),
      },
    },
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    billing_address_collection: "required",
    phone_number_collection: {
      enabled: true,
    },
    success_url: `${process.env.FRONTEND_STORE_URL}/payment?success=true`,
    cancel_url: `${process.env.FRONTEND_STORE_URL}/payment?success=false`,
    metadata: {
      orderId: order.id,
    },
  });

  return NextResponse.json({ url: session.url });
}
