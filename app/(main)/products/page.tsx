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

    const advancedProducts = await prismadb.advancedProduct.findMany({
        orderBy: {
            createdAt: "desc",
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

    return (
        <>
            <ProductSection
                products={products}
                advancedProducts={advancedProducts}
            />
        </>
    );
}
