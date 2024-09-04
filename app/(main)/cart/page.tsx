import { redirect } from "next/navigation";

import CartSection from "./components/cart-section";

export default function CartPage({ searchParams }: { searchParams: { success: boolean } }) {

    if (searchParams.success === true) {
        redirect("payment?success=true")
    }

    if (searchParams.success === false) {
        redirect("/payment?success=false")
    }

    return (
        <div>
            <CartSection />
        </div>
    );
}