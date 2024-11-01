import { formatTextWithParagraphs } from "@/lib/format-text-with-paragraphs";
import prismadb from "@/lib/prismadb";
import Image from "next/image";

export default async function AboutUs() {
    const aboutText = await prismadb.about.findFirst({ include: { images: true } });
    const initialData = aboutText || undefined;
    const urls = initialData?.images.map((image) => image.url);

    return (
        <div className="about-us-container mt-3 p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="text-[20px]">
                {initialData?.text && formatTextWithParagraphs(initialData.text)}
            </h1>
            {urls && urls.length > 0 && (
                <div className="mt-6">
                    <div className="grid grid-cols-1 gap-4">
                        {urls.map((url, index) => (
                            <div key={index} className="relative w-full h-80">
                                <Image
                                    src={url}
                                    alt={`About Us Image ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg shadow-md"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
