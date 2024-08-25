"use server";

import prismadb from "@/lib/prismadb";

export const getProducts = async (ids: string[]) => {
  try {
    const products = await prismadb.product.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      include: {
        images: true,
      },
    });

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};
