import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
                <Image
                    src="/logo.png"
                    alt="Indrivanilla"
                    width={150}
                    height={50}
                />
            </Link>
        </div>
    )
}
