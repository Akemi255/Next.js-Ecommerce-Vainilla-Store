import { notFound } from "next/navigation";

import { convertSlugToName } from "@/lib/convert-to-slug";
import prismadb from "@/lib/prismadb"
import ProductSection from "./components/product.-section";


export default async function ProductPage({ params }: { params: { name: string } }) {

    const { name } = params
    const decodedString = decodeURIComponent(name.replace(/-/g, ' '));
    const productName = convertSlugToName(decodedString);

    const product = await prismadb.product.findFirst({
        where: {
            name: {
                equals: productName.toLowerCase(),
                mode: 'insensitive'
            }
        },
        include: { images: true }
    });

    if (!product) {
        return notFound()
    }

    return (
        <ProductSection product={product} />
    )
}
