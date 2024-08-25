"use client"
import React, { useState } from 'react';
import ProductCard from './product-card';
import { Image, Product } from '@prisma/client';

interface ProductSectionProps {
    products: ProductWithImages[];
}

interface ProductWithImages extends Product {
    images: Image[];
}

const filterOptions = [
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Newest First', value: 'newest' },
    { label: 'In Stock Only', value: 'in-stock' }
];

export default function ProductSection({ products }: ProductSectionProps) {
    const [selectedFilter, setSelectedFilter] = useState<string | undefined>();

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFilter(event.target.value);
    };

    const getFilteredProducts = () => {
        let filteredProducts = [...products];

        if (selectedFilter === 'in-stock') {
            filteredProducts = filteredProducts.filter(product => product.stock > 0);
        }

        if (selectedFilter === 'price-asc') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (selectedFilter === 'price-desc') {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else if (selectedFilter === 'newest') {
            filteredProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        }

        return filteredProducts;
    };

    const filteredProducts = getFilteredProducts();

    return (
        <div className="p-4">
            <div className="mb-4 flex justify-between items-center">

                <select
                    value={selectedFilter}
                    onChange={handleFilterChange}
                    className="border p-2 rounded"
                >
                    <option value="">Select a filter</option>
                    {filterOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            {filteredProducts.length === 0 ? (
                <p className="text-center text-black">No products available</p>
            ) : (
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            images={product.images}
                            price={product.price}
                            stock={product.stock}
                            category={product.Category}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
