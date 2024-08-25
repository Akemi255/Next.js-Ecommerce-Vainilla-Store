import prismadb from "@/lib/prismadb";
import ProductSection from "../_components/product-section";

export default async function CocoaPage() {
    const products = await prismadb.product.findMany({
        where: {
            Category: "Cacao",
        },
        orderBy: {
            createdAt: "desc",
        },
        include: {
            images: true,
        },
    });

    return (
        <>
            <ProductSection
                products={products}
            />
        </>
    );
}
