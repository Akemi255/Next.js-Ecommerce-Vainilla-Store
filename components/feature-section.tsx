"use client"
import { Category, Image, Product } from '@prisma/client';
import ProductCard from '@/app/(main)/products/_components/product-card';

interface ProductSectionProps {
    products: ProductWithImages[];
}

interface ProductWithImages extends Product {
    images: Image[];
    category: Category
}

export default function FeatureSection({ products }: ProductSectionProps) {
    return (
        <div className="p-4">
            {products.length === 0 ? (
                <p className="text-center text-black">No products available</p>
            ) : (
                <> <h1 className="text-center text-4xl font-bold text-gray-800 my-8">
                    Featured Products
                </h1>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                description={product.description}
                                images={product.images}
                                price={product.price}
                                stock={product.stock}
                                category={product.category.name}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
