import prismadb from "@/lib/prismadb";
import ProductSection from "../_components/product-section";
import { notFound } from "next/navigation";

export default async function CategoriesPage({ params }: { params: { category: string } }) {

    const category = await prismadb.category.findFirst({
        where: {
            name: params.category
        },
        include: {
            products: {
                include: {
                    category: true,
                    images: true
                }
            }
        }
    });

    if (!category) {
        return notFound()
    }

    return (
        <>
            <ProductSection products={category.products} />
        </>
    );
}
