import prismadb from "@/lib/prismadb";
import ProductSection from "./_components/product-section";

export default async function ProductsPage() {

    const products = await prismadb.product.findMany({
        orderBy: {
            createdAt: "desc",
        },
        include: {
            category: true,
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
