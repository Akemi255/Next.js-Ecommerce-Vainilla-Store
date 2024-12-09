"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import useCartStore from "@/hooks/store";

interface AdvancedProductImage {
    url: string;
}

interface ProductVariant {
    id: string;
    name: string;
    price: number;
    stock: number;
    images: AdvancedProductImage[];
}

interface AdvancedProductCardProps {
    id: string;
    name: string;
    description: string;
    category: string;
    variants: ProductVariant[];
}

export default function AdvancedProductCard({
    id,
    name,
    description,
    category,
    variants,
}: AdvancedProductCardProps) {
    const router = useRouter();
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [currentStock, setCurrentStock] = useState(variants[0]?.stock || 0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const addItemToCart = useCartStore((state) => state.addItem);
    const cartItems = useCartStore((state) => state.items);

    const selectedVariant = variants[selectedVariantIndex];

    useEffect(() => {
        const itemInCart = cartItems.find((item) => item.id === selectedVariant.id);

        // Actualizar el stock visible basado en el stock inicial menos lo que hay en el carrito
        if (itemInCart) {
            setCurrentStock(selectedVariant.stock - itemInCart.quantity);
        } else {
            setCurrentStock(selectedVariant.stock);
        }
    }, [cartItems, selectedVariant]);

    const handleQuantityChange = (value: number) => {
        if (value >= 1 && value <= currentStock) {
            setQuantity(value);
        }
    };

    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    const handleAddToCart = () => {
        if (quantity > 0 && quantity <= currentStock) {
            addItemToCart(selectedVariant.id, quantity);

            setCurrentStock((prevStock) => prevStock - quantity);

            setQuantity(1);
        }
    };





    return (
        <div className="border rounded-lg shadow-lg p-4 bg-white">
            <div className="relative overflow-hidden h-48 rounded-md">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                    {selectedVariant.images.map((image, index) => (
                        <Image
                            key={index}
                            src={image.url || "/placeholder-image.png"}
                            alt={`${name} - ${selectedVariant.name}`}
                            width={300}
                            height={200}
                            className="object-cover w-full h-48 rounded-md flex-shrink-0"
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-2">
                {selectedVariant.images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 mx-1 rounded-full ${currentImageIndex === index ? "bg-gray-800" : "bg-gray-400"
                            }`}
                        onClick={() => goToImage(index)}
                    ></button>
                ))}
            </div>
            <h2 className="text-lg font-semibold mt-4">{name}</h2>
            <p className="text-gray-600 mt-2">${selectedVariant.price.toFixed(2)} USD</p>
            <p className="text-gray-600">{description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
                {variants.map((variant, index) => (
                    <Button
                        key={variant.id}
                        variant={selectedVariantIndex === index ? "default" : "outline"}
                        onClick={() => {
                            setSelectedVariantIndex(index);
                            setCurrentStock(variant.stock);
                            setQuantity(1);
                        }}
                    >
                        {variant.name}
                    </Button>
                ))}
            </div>
            <div className="flex items-center mt-4">
                <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="border px-3 py-1"
                    disabled={quantity <= 1}
                >
                    -
                </button>
                <Input
                    type="text"
                    value={currentStock === 0 ? "0" : quantity.toString()}
                    className={`w-12 text-center mx-2 ${currentStock === 0 ? "text-red-500" : ""}`}
                    readOnly
                />
                <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="border px-3 py-1"
                    disabled={quantity >= currentStock || currentStock === 0}
                >
                    +
                </button>
            </div>
            <p className="text-gray-600 mt-2">Stock restante: {currentStock} unidades</p>
            <Button
                className="w-full mt-4"
                onClick={() => router.push(`/product/${name.toLowerCase().replace(/\s+/g, "-")}`)}
            >
                Conocer más
            </Button>
            <Button className="w-full mt-4" onClick={handleAddToCart} disabled={currentStock === 0}>
                Añadir a la cesta
            </Button>
        </div>
    );
}
