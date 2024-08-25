
import { auth } from "@/auth";
import prismadb from "@/lib/prismadb";
import { redirect } from "next/navigation";

import Footer from "@/components/footer";
import Header from "@/components/header";

export default async function MainLayout({
    children
}: {
    children: React.ReactNode;
}) {

    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
