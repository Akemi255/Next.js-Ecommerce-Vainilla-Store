import { notFound } from "next/navigation";

import { convertSlugToName } from "@/lib/convert-to-slug";
import prismadb from "@/lib/prismadb"
import AdvancedProductSection from "../_components/product.-section";



export default async function ProductPage({ params }: { params: { name: string } }) {

    const { name } = params
    const decodedString = decodeURIComponent(name.replace(/-/g, ' '));
    const productName = convertSlugToName(decodedString);

    const product = await prismadb.advancedProduct.findFirst({
        where: {
            name: {
                equals: productName.toLowerCase(),
                mode: 'insensitive'
            }
        },
        include: {
            category: true,
            variants: {
                include: {
                    images: true
                }
            }
        }
    });

    if (!product) {
        return notFound()
    }

    return (
        <AdvancedProductSection product={product} />
    )
}
