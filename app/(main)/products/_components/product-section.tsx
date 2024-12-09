"use client";

import React, { useState } from "react";
import ProductCard from "./product-card";

import {
    AdvancedProduct,
    AdvancedProductImage,
    Category,
    Image,
    Product,
    ProductVariant,
} from "@prisma/client";
import AdvancedProductCard from "@/components/advanced-product-card";

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

interface UnifiedProduct {
    id: string;
    name: string;
    description: string;
    images: Image[] | AdvancedProductImage[];
    price: number;
    stock: number;
    category: string;
    isAdvanced: boolean;
    variants?: (ProductVariant & { images: AdvancedProductImage[] })[];
    createdAt: Date;
}

const filterOptions = [
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Newest First", value: "newest" },
    { label: "In Stock Only", value: "in-stock" },
];

export default function ProductSection({ products, advancedProducts }: ProductSectionProps) {
    const [selectedFilter, setSelectedFilter] = useState<string | undefined>();

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFilter(event.target.value);
    };

    const allProducts: UnifiedProduct[] = [
        ...products.map((product) => ({
            id: product.id,
            name: product.name,
            description: product.description,
            images: product.images,
            price: product.price,
            stock: product.stock,
            category: product.category.name,
            isAdvanced: false,
            createdAt: product.createdAt,
        })),
        ...advancedProducts.map((advancedProduct) => ({
            id: advancedProduct.id,
            name: advancedProduct.name,
            description: advancedProduct.description,
            images: advancedProduct.variants[0]?.images || [],
            price: advancedProduct.variants[0]?.price || 0,
            stock: advancedProduct.variants[0]?.stock || 0,
            category: advancedProduct.category.name,
            isAdvanced: true,
            variants: advancedProduct.variants,
            createdAt: advancedProduct.createdAt,
        })),
    ];

    const getFilteredProducts = () => {
        let filteredProducts = [...allProducts];

        if (selectedFilter === "in-stock") {
            filteredProducts = filteredProducts.filter((product) => product.stock > 0);
        }
        if (selectedFilter === "price-asc") {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (selectedFilter === "price-desc") {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else if (selectedFilter === "newest") {
            filteredProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        }

        return filteredProducts;
    };

    const filteredProducts = getFilteredProducts();

    function isAdvancedProduct(
        product: UnifiedProduct
    ): product is UnifiedProduct & { variants: AdvancedProductWithImages["variants"] } {
        return product.isAdvanced && "variants" in product;
    }

    return (
        <div className="p-4">
            <div className="mb-4 flex justify-between items-center">
                <select
                    value={selectedFilter}
                    onChange={handleFilterChange}
                    className="border p-2 rounded"
                >
                    <option value="">Select a filter</option>
                    {filterOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            {filteredProducts.length === 0 ? (
                <h2 className="flex justify-center mt-4 mb-4">No products available</h2>
            ) : (
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredProducts.map((product) => {
                        if (isAdvancedProduct(product)) {
                            return (
                                <AdvancedProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    description={product.description}
                                    category={product.category}
                                    variants={product.variants}
                                />
                            );
                        }
                        return (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                description={product.description}
                                images={product.images}
                                price={product.price}
                                stock={product.stock}
                                category={product.category}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}
