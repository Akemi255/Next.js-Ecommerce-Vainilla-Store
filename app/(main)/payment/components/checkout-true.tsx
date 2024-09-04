"use clients"
import Lottie from "lottie-react";

import CheckoutTrueAnimation from "@/public/checkout-complete.json";
import { useEffect } from "react";
import useCart from "@/hooks/store";
import { useRouter } from "next/navigation";

export default function CheckoutTrue() {

    const { items: cartItemsFromStore, removeAll } = useCart();
    const router = useRouter()

    useEffect(() => {
        removeAll();
        localStorage.removeItem('cart-storage');

        setTimeout(() => {
            router.push("/")
        }, 3000)
    }, [removeAll, router],)

    return (
        <div className="flex justify-center items-center w-[600px] h-[600px]">
            <Lottie animationData={CheckoutTrueAnimation} loop={false} height={400} width={400} />
        </div>
    )
}
