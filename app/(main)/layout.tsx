
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

    const session = await auth();
    const userEmail = session?.user?.email ?? undefined;

    if (!session) {
        return (
            <div>
                <Header />
                {children}
                <Footer />
            </div>
        );
    }

    const user = await prismadb.user.findUnique({
        where: {
            email: userEmail,
        },
    });

    if (!user?.emailVerified) {
        redirect("/verify-email");
    }

    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
