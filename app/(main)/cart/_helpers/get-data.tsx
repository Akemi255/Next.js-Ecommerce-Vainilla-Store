import { getAdvancedProducts, getProducts } from "@/actions/products";

export const fetchProducts = async (ids: string[]) => {
    if (ids.length === 0) {
        return [];
    }
    try {
        return await getProducts(ids);
    } catch (error) {
        throw new Error('Failed to fetch products');
    }
};

export const fetchAdvancedProducts = async (ids: string[]) => {
    if (ids.length === 0) {
        return [];
    }
    try {
        return await getAdvancedProducts(ids);
    } catch (error) {
        throw new Error('Failed to fetch advanced products');
    }
};

export const fetchAllProducts = async (ids: string[]) => {
    if (ids.length === 0) return { products: [], advancedProducts: [] };

    try {
        const [products, advancedProducts] = await Promise.all([
            getProducts(ids),
            getAdvancedProducts(ids),
        ]);
        return { products, advancedProducts };
    } catch (error) {
        throw new Error('Failed to fetch products');
    }
};