
import CheckoutProvider from "@/providers/checkout-provider";

export default function PaymentPage({ searchParams }: { searchParams: { success: string } }) {
    return (
        <CheckoutProvider searchParams={searchParams} />
    );
}