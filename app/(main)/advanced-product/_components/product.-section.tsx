"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import useCartStore from "@/hooks/store";
import { AdvancedProductImage, ProductVariant } from "@prisma/client";

interface AdvancedProductSectionProps {
    product: any;
}

export default function AdvancedProductSection({ product }: AdvancedProductSectionProps) {
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [currentStock, setCurrentStock] = useState(product.variants[selectedVariantIndex]?.stock || 0);

    const addItemToCart = useCartStore((state) => state.addItem);
    const cartItems = useCartStore((state) => state.items);

    const selectedVariant = product.variants[selectedVariantIndex];

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

    const handleAddToCart = () => {
        if (quantity > 0 && quantity <= currentStock) {
            addItemToCart(selectedVariant.id, quantity);
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
                                src={selectedVariant.images[selectedImage]?.url || "/placeholder-image.png"}
                                alt={`${product.name} Image ${selectedImage + 1}`}
                                className="object-cover"
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                priority
                            />
                        </div>
                        <div className="flex gap-2 overflow-auto pb-2">
                            {selectedVariant.images.map((image: AdvancedProductImage, index: number) => (
                                <button
                                    key={image.id}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative aspect-square w-16 overflow-hidden rounded-lg border-2 ${selectedImage === index ? "border-primary" : "border-transparent"}`}
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
                        <div className="text-xl font-bold">${selectedVariant.price} USD</div>
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
                    <div className="flex gap-2 mt-4">
                        {product.variants.map((variant: ProductVariant, index: number) => (
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
                    <Button className="w-full mt-5" size="lg" onClick={handleAddToCart} disabled={currentStock === 0}>
                        Añadir a la cesta
                    </Button>
                    <p className="text-sm leading-loose mt-5">{product.description}</p>
                </div>
            </div>
        </div>
    );
}
