"use clients"
import Lottie from "lottie-react";

import CheckoutFalseAnimation from "@/public/checkout-false.json";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckoutFalse() {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push("/cart")
        }, 3000)
    }, [router])

    return (
        <>
            <div className="flex justify-center items-center w-[600px] h-[600px]">
                <Lottie animationData={CheckoutFalseAnimation} loop={false} height={400} width={400} />
            </div>
        </>
    )
}
