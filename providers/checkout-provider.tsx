"use client"

import CheckoutFalse from "@/app/(main)/payment/components/checkout-false";
import CheckoutTrue from "@/app/(main)/payment/components/checkout-true";

export default function CheckoutProvider({ searchParams }: { searchParams: { success: string } }) {
    if (searchParams.success == "true") {
        return <CheckoutTrue />
    }

    return (
        <CheckoutFalse />
    );
}
