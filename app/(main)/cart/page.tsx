import { redirect } from "next/navigation";

import CartSection from "./components/cart-section";
import { auth } from "@/auth";
import prismadb from "@/lib/prismadb";

export default async function CartPage({ searchParams }: { searchParams: { success: boolean } }) {

    const session = await auth();
    const userEmail = session?.user?.email ?? undefined;

    if (!session) {
        redirect("/login")
    }

    const user = await prismadb.user.findUnique({
        where: {
            email: userEmail,
        },
    });

    if (!user) {
        redirect("/reset")
    }

    if (!user?.emailVerified) {
        redirect("/verify-email");
    }


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