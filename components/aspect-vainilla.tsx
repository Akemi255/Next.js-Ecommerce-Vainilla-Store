"use client"
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function AspectRatioVainilla() {

    const router = useRouter()

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
                <h1 className="text-4xl font-bold">Ancestral Land</h1>
                <h2 className="mt-2 text-lg">Fair trade whole vanilla beans from around the world!</h2>
                <Button variant="outline" className="mt-4 text-black" onClick={() => router.push("/products")}>
                    Products
                </Button>
            </div>
        </div>
    );
}
