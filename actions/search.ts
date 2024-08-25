"use server";
import prismadb from "@/lib/prismadb";
import { z } from "zod";

const querySchema = z.object({
  query: z.string().min(1, "Search query cannot be empty"),
});

export const searchProducts = async (query: string) => {
  const validationResult = querySchema.safeParse({ query });

  if (!validationResult.success) {
    throw new Error(validationResult.error.errors[0].message);
  }

  const { query: validQuery } = validationResult.data;

  const products = await prismadb.product.findMany({
    where: {
      OR: [
        { name: { contains: validQuery, mode: "insensitive" } },
        { description: { contains: validQuery, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      images: true,
    },
  });

  return products;
};
