
import CheckoutProvider from "@/providers/checkout-provider";

export default function PaymentPage({ searchParams }: { searchParams: { success: string } }) {
    return (
        <div className="flex justify-center items-center">
            <CheckoutProvider searchParams={searchParams} />
        </div>
    );
}