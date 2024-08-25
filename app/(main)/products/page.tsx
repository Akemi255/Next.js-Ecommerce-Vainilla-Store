import prismadb from "@/lib/prismadb";
import ProductSection from "./_components/product-section";

export default async function ProductsPage({ searchParams }: { searchParams: { category?: string } }) {

    const products = await prismadb.product.findMany({
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
