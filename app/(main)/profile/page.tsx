import { auth } from "@/auth";
import prismadb from "@/lib/prismadb";
import { redirect } from "next/navigation";

import ProfileSection from "./components/profile-section";

export default async function ProfilePage() {

    const session = await auth();
    const userEmail = session?.user?.email ?? undefined;

    const user = await prismadb.user.findUnique({
        where: {
            email: userEmail,
        },
    });

    if (!user) {
        redirect("/login")
    }

    if (!user?.emailVerified) {
        redirect("/verify-email");
    }

    return (
        <>
            <ProfileSection email={user.email} />
        </>
    )
}
