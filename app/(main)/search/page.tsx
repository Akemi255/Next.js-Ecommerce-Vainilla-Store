import { searchProducts } from "@/actions/search";
import ProductSection from "../products/_components/product-section";

export default async function SearchPage({ searchParams }: { searchParams: { q: string } }) {

    let products = []

    try {
        products = await searchProducts(searchParams.q)
    } catch (error) {
        throw new Error()
    }

    return (
        <div>
            <ProductSection
                products={products}
            />
        </div>
    );
}