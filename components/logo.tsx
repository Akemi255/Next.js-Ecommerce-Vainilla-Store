import type { Logo } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    logo?: Logo
}

export default function Logo({ logo }: LogoProps) {
    return (
        <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
                <Image
                    src={logo?.imageUrl || "https://res.cloudinary.com/doyon5buj/image/upload/v1729508595/epomozu30ensiqlkrprr.png"}
                    alt="Indrivanilla"
                    width={150}
                    height={50}
                />
            </Link>
        </div>
    )
}
