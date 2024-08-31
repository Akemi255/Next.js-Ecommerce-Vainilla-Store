import prismadb from "@/lib/prismadb";
import ProductSection from "../_components/product-section";

export default async function CategoriesPage({ params }: { params: { category: string } }) {

    const category = await prismadb.category.findFirst({
        where: {
            name: params.category
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

    if (!category) {
        return <h2 className="flex justify-center mt-4 mb-4">No products available</h2>;
    }

    return (
        <>
            <ProductSection products={category.products} />
        </>
    );
}
