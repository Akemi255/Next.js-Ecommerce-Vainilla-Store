"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Label } from "./ui/label";
import { UserIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function RightButtons() {

    const logout = async () => {
        await signOut({
            callbackUrl: "/login",
        });
    };

    return (
        <>
            <Button variant="outline" className="w-full" onClick={logout}>
                Logout
            </Button>
        </>
    );
}
