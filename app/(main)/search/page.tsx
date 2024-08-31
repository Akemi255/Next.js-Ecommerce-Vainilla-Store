import { searchProducts } from "@/actions/search";
import ProductSection from "../products/_components/product-section";

export default async function SearchPage({ searchParams }: { searchParams: { q: string } }) {

    let products: any = [];

    try {
        products = await searchProducts(searchParams.q);
    } catch (error) {
        console.error("Error fetching products:", error);
    }

    if (products.length === 0) {
        return <h2 className="flex justify-center mt-4 mb-4">No search results</h2>;
    }

    return (
        <div>
            <ProductSection
                products={products}
            />
        </div>
    );
}
