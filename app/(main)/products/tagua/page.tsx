import prismadb from "@/lib/prismadb";
import ProductSection from "../_components/product-section";

export default async function TaguaPage() {
    const products = await prismadb.product.findMany({
        where: {
            Category: "tagua",
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
