import prismadb from "@/lib/prismadb";
import ProductSection from "../_components/product-section";
import { notFound } from "next/navigation";
import { convertSlugToName } from '@/lib/convert-to-slug';

export default async function CategoriesPage({ params }: { params: { category: string } }) {

    const { category } = params;
    const decodedString = decodeURIComponent(category.replace(/-/g, ' '));
    const originalName = convertSlugToName(decodedString);

    const data = await prismadb.category.findFirst({
        where: {
            name: {
                equals: originalName.toLowerCase(),
                mode: 'insensitive'
            }
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

    if (!data) {
        return notFound()
    }

    return (
        <>
            <ProductSection products={data.products} />
        </>
    );
}
