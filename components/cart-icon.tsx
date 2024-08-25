"use client"
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/store";
import { useEffect, useState } from "react";

export default function CartIcon() {
    const [mounted, setmounted] = useState(false);
    const totalItems = useCart((state) => state.totalItems());

    useEffect(() => {
        setmounted(true)
    }, [])
    return (
        <> {mounted && (
            <div className="relative">

                <ShoppingBag className="h-6 w-6" />
                {totalItems > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                        {totalItems}
                    </span>
                )}
            </div>
        )}
        </>
    );
}
