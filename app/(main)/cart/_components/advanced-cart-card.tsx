import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import useCart from '@/hooks/store';

interface CartCardProps {
    id: string;
    name: string;
    images: { url: string }[];
    price: number;
    quantity: number;
}

const CartCard: React.FC<CartCardProps> = ({
    id,
    name,
    images,
    price,
    quantity
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { removeItem } = useCart();

    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    const handleRemove = () => {
        removeItem(id);
        location.reload()
    };

    return (
        <div key={id} className="border rounded-lg shadow-lg p-3 bg-white w-60">
            <div className="relative overflow-hidden h-32 rounded-md">
                <div
                    className="relative h-full flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image.url || "/placeholder-image.png"}
                            alt={name}
                            width={200}
                            height={120}
                            className="object-cover w-full h-32 rounded-md flex-shrink-0"
                        />
                    ))}
                </div>
            </div>
            {images.length > 1 && (
                <div className="flex justify-center mt-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 mx-1 rounded-full ${currentImageIndex === index ? "bg-gray-800" : "bg-gray-400"}`}
                            onClick={() => goToImage(index)}
                        ></button>
                    ))}
                </div>
            )}
            <h2 className="text-md font-semibold mt-3">{name}</h2>
            <p className="font-semibold mt-1">Price: ${price.toFixed(2)}</p>
            <div className="flex items-center mt-3">
                <p>Cantidad</p>
                <Input
                    type="text"
                    value={quantity.toString()}
                    className="w-10 text-center mx-2 appearance-none"
                    readOnly
                />
            </div>
            <div className="mt-4 flex justify-center">
                <Button onClick={handleRemove} variant="destructive">Eliminar del carrito</Button>
            </div>
        </div>
    );
};

export default CartCard;
