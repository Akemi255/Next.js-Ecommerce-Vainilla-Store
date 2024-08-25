import prismadb from "@/lib/prismadb";
import ProductSection from "../_components/product-section";

export default async function CoffePage() {
    const products = await prismadb.product.findMany({
        where: {
            Category: "Cafe",
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
