"use clients"
import Lottie from "lottie-react";

import CheckoutFalseAnimation from "@/public/checkout-false.json";

export default function CheckoutFalse() {

    return (
        <div className="flex justify-center items-center w-[600px] h-[600px]">
            <Lottie animationData={CheckoutFalseAnimation} loop={false} height={400} width={400} />
        </div>
    )
}
