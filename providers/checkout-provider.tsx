"use client"

import CheckoutFalse from "@/app/(main)/payment/components/checkout-false";
import CheckoutTrue from "@/app/(main)/payment/components/checkout-true";

export default function CheckoutProvider({ searchParams }: { searchParams: { success: string } }) {
    if (searchParams.success == "true") {
        return (
            <>
                <div className="flex justify-center items-center">
                    <CheckoutTrue />
                </div>
                <h2 className="flex justify-center font-bold text-2xl text-red-500 mt-[200px]">
                    Order completed successfully, you will be redirected
                </h2>
            </>
        )
    }

    return (
        <>
            <div className="flex justify-center items-center">
                <CheckoutFalse />
            </div>
            <h2 className="flex justify-center font-bold text-2xl text-red-500 mt-[200px]">
                Something went wrong with the order, you will be redirected to cart
            </h2>
        </>
    );
}
