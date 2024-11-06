import prismadb from "@/lib/prismadb";
import ProductSection from "./_components/product-section";
import CategoriesSection from "@/components/categories-card";

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
            <CategoriesSection />
            <ProductSection
                products={products}
            />
        </>
    );
}
