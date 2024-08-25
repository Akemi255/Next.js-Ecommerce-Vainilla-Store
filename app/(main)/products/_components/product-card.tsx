import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCartStore from "@/hooks/store";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Image {
    url: string;
}

interface ProductCardProps {
    id: string;
    name: string;
    description: string;
    images: Image[];
    price: number;
    stock: number;
    category: string;
}

export default function ProductCard({
    id,
    name,
    description,
    images,
    price,
    stock,
    category,
}: ProductCardProps) {
    const [quantity, setQuantity] = useState(1);
    const [currentStock, setCurrentStock] = useState(stock);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState<"left" | "right">("right");

    const addItemToCart = useCartStore((state) => state.addItem);
    const cartItems = useCartStore((state) => state.items);

    useEffect(() => {
        const itemInCart = cartItems.find(item => item.id === id);
        if (itemInCart) {
            setCurrentStock(stock - itemInCart.quantity);
        } else {
            setCurrentStock(stock);
        }
    }, [cartItems, id, stock]);

    const handleQuantityChange = (value: number) => {
        if (value >= 1 && value <= currentStock) {
            setQuantity(value);
        }
    };

    const goToImage = (index: number) => {
        setTransitionDirection(index > currentImageIndex ? "right" : "left");
        setCurrentImageIndex(index);
    };

    const handleAddToCart = () => {
        if (quantity > 0 && quantity <= currentStock) {
            addItemToCart(id, quantity);

            // Update the stock locally
            const newStock = currentStock - quantity;
            setCurrentStock(newStock);
            setQuantity(1);
        }
    };

    return (
        <div className="border rounded-lg shadow-lg p-4 bg-white">
            <div className="relative overflow-hidden h-48 rounded-md">
                <div
                    className={`flex transition-transform duration-500 ease-in-out transform ${transitionDirection === "right" ? "translate-x-0" : "-translate-x-full"
                        }`}
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image.url || "/placeholder-image.png"}
                            alt={name}
                            width={300}
                            height={200}
                            className="object-cover w-full h-48 rounded-md flex-shrink-0"
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 mx-1 rounded-full ${currentImageIndex === index ? "bg-gray-800" : "bg-gray-400"
                            }`}
                        onClick={() => goToImage(index)}
                    ></button>
                ))}
            </div>
            <Badge className="w-1/4 flex justify-center relative top-2">{category}</Badge>
            <h2 className="text-lg font-semibold mt-4">{name}</h2>
            <p className="font-semibold mt-4">{description}</p>
            <p className="text-gray-600 mt-2">${price.toFixed(2)} USD</p>

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
                    value={currentStock === 0 ? "No disponible" : quantity.toString()}
                    className={`w-12 text-center mx-2 appearance-none ${currentStock === 0 ? "text-red-500" : ""}`}
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
            <p className="text-gray-600 mt-2">
                Stock restante: {currentStock} unidades
            </p>

            <Button className="w-full mt-4" onClick={handleAddToCart} disabled={currentStock === 0}>
                Añadir a la cesta
            </Button>
        </div>
    );
}
