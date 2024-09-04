import CheckoutFalse from "./components/checkout-false";
import CheckoutTrue from "./components/checkout-true";

export default function PaymentPage({ searchParams }: { searchParams: { success: boolean } }) {

    if (searchParams.success) {
        <CheckoutTrue />
    }

    return (
        <CheckoutFalse />
    );
}