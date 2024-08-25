import prismadb from "@/lib/prismadb";
import ProductSection from "../_components/product-section";

export default async function PanamaHutsPage() {
    const products = await prismadb.product.findMany({
        where: {
            Category: "Panama_huts",
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
