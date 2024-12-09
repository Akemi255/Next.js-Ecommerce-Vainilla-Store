"use client"
import { AdvancedProduct, AdvancedProductImage, Category, Image, Product, ProductVariant } from '@prisma/client';
import ProductCard from '@/app/(main)/products/_components/product-card';
import AdvancedProductCard from './advanced-product-card';

interface ProductSectionProps {
    products: ProductWithImages[];
    advancedProducts: AdvancedProductWithImages[];
}

interface ProductWithImages extends Product {
    images: Image[];
    category: Category;
}

interface AdvancedProductWithImages extends AdvancedProduct {
    variants: (ProductVariant & { images: AdvancedProductImage[] })[];
    category: Category;
}

export default function FeatureSection({ products, advancedProducts }: ProductSectionProps) {
    return (
        <div className="p-4">
            {products.length === 0 ? (
                <p className="text-center text-black">No products available</p>
            ) : (
                <> <h1 className="text-center text-4xl font-bold text-gray-800 my-8">
                    Productos Destacados
                </h1>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {advancedProducts.map((product) => {
                            return (
                                <AdvancedProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    description={product.description}
                                    variants={product.variants}
                                    category={product.category.name}

                                />
                            );
                        })}
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
