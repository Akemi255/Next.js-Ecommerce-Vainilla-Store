"use client";

import { useState, useEffect } from "react";
import { Product } from "@prisma/client";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import useCartStore from "@/hooks/store";

interface ProductSectionProps {
    product: Product & { images: { id: string; url: string }[] };
}

export default function ProductSection({ product }: ProductSectionProps) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [currentStock, setCurrentStock] = useState(product.stock);

    const addItemToCart = useCartStore((state) => state.addItem);
    const cartItems = useCartStore((state) => state.items);

    useEffect(() => {
        const itemInCart = cartItems.find((item) => item.id === product.id);
        setCurrentStock(product.stock - (itemInCart?.quantity || 0));
    }, [cartItems, product.id, product.stock]);

    const handleQuantityChange = (value: number) => {
        if (value >= 1 && value <= currentStock) {
            setQuantity(value);
        }
    };

    const handleAddToCart = () => {
        if (quantity > 0 && quantity <= currentStock) {
            addItemToCart(product.id, quantity);
            setCurrentStock(currentStock - quantity);
            setQuantity(1);
        }
    };

    return (
        <div className="mx-auto max-w-6xl px-2 py-4">
            <div className="grid gap-4 sm:grid-cols-2">
                <Card className="overflow-hidden rounded-lg border bg-white">
                    <div className="grid gap-3">
                        <div className="relative aspect-square overflow-hidden rounded-lg">
                            <Image
                                src={product.images[selectedImage]?.url}
                                alt={`${product.name} Image ${selectedImage + 1}`}
                                className="object-cover"
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                priority
                            />
                        </div>
                        <div className="flex gap-2 overflow-auto pb-2">
                            {product.images.map((image, index) => (
                                <button
                                    key={image.id}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative aspect-square w-16 overflow-hidden rounded-lg border-2 ${selectedImage === index ? "border-primary" : "border-transparent"
                                        }`}
                                >
                                    <Image
                                        src={image.url}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="object-cover"
                                        fill
                                        sizes="80px"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </Card>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-bold tracking-tight">{product.name}</h1>
                        <div className="text-xl font-bold">${product.price} USD</div>
                    </div>
                    <div className="flex flex-col gap-1 mt-5">
                        <label className="text-sm font-medium leading-none" htmlFor="quantity">
                            Quantity
                        </label>
                        <div className="flex items-center gap-1">
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => handleQuantityChange(quantity - 1)}
                                disabled={quantity <= 1}
                            >
                                <Minus className="h-4 w-4" />
                                <span className="sr-only">Decrease quantity</span>
                            </Button>
                            <input
                                className="h-8 w-16 rounded-md border border-input bg-background px-3 text-center text-sm"
                                id="quantity"
                                type="number"
                                min="1"
                                value={quantity}
                                readOnly
                            />
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => handleQuantityChange(quantity + 1)}
                                disabled={quantity >= currentStock}
                            >
                                <Plus className="h-4 w-4" />
                                <span className="sr-only">Increase quantity</span>
                            </Button>
                        </div>
                        <p className="text-sm mt-2">Stock restante: {currentStock} unidades</p>
                    </div>
                    <Button className="w-full mt-5" size="lg" onClick={handleAddToCart} disabled={currentStock === 0}>
                        Añadir a la cesta
                    </Button>
                    <p className="text-sm leading-loose mt-5">{product.description}</p>
                </div>
            </div>
        </div>
    );
}
