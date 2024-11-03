"use client"
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import WatchProductsButton from "./watch-products-button";

export function AspectRatioVainilla() {

    const router = useRouter();

    return (
        <div className="relative">
            <AspectRatio ratio={20 / 9} className="bg-muted">
                <Image
                    src="/test2.jpg"
                    alt="Photo by Drew Beamer"
                    fill
                    className="rounded-md object-cover"
                />
            </AspectRatio>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-3xl  md:text-6xl font-extrabold mb-4">Ancestral Land</h1>
                <h1 className="hidden sm:flex sm:text-2xl  md:text-4xl font-bold">Lo mejor de nuestra tierra, directo a tu vida</h1>
                <p className="hidden sm:flex text-center text-xl w-[70%] mx-auto mt-8 leading-relaxed">
                    Descubre la esencia de Ecuador donde la naturaleza y la cultura se unen en armonía. Nuestros productos naturales, cuidadosamente seleccionados y elaborados con amor, llevan la riqueza de nuestra tierra y la sabiduría de nuestras tradiciones ancestrales a tu vida.
                </p>
                <WatchProductsButton />
            </div>
        </div>
    );
}
