import { searchProducts } from "@/actions/search";
import ProductSection from "../products/_components/product-section";
import { AdvancedProduct, ProductVariant } from "@prisma/client";

interface AdvancedProductExtended extends AdvancedProduct {
    variants: ProductVariant[];
}

export default async function SearchPage({ searchParams }: { searchParams: { q: string } }) {

    let data: any = [];

    try {
        data = await searchProducts(searchParams.q);
    } catch (error) {
        console.error("Error fetching products:", error);
    }

    if (data.length === 0) {
        return <h2 className="flex justify-center mt-4 mb-4">No search results</h2>;
    }

    const filteredAdvancedProducts = data.advancedProducts.filter((product: AdvancedProductExtended) => product.variants.length > 0);

    return (
        <div>
            <ProductSection
                products={data.products}
                advancedProducts={filteredAdvancedProducts}
            />
        </div>
    );
}
