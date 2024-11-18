import { formatTextWithParagraphs } from "@/lib/format-text-with-paragraphs";
import prismadb from "@/lib/prismadb";
import Image from "next/image";

export default async function AboutUs() {
    const aboutText = await prismadb.about.findFirst({ include: { images: true } });
    const initialData = aboutText || undefined;
    const urls = initialData?.images.map((image) => image.url);

    return (
        <div className="about-us-container mt-5  max-w-5xl mx-auto ">
            <div className={`flex ${urls && urls.length > 0 ? "flex-row" : "flex-col"} items-center`}>
                {/* Texto */}
                <div className={`flex-1 ${urls && urls.length > 0 ? "text-left" : "text-center"}`}>
                    <h1 className="text-[20px] leading-relaxed">
                        {initialData?.text && formatTextWithParagraphs(initialData.text)}
                    </h1>
                </div>

            </div>
            {/* Imágenes */}
            {urls && urls.length > 0 && (
                <div className="flex-1 grid grid-cols-1 gap-4 ml-6">
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
            )}
            {/* YouTube Video */}
            {initialData?.youtubeUrl && (
                <div className="mt-6">
                    <iframe
                        width="100%"
                        height="415"
                        src={initialData.youtubeUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-md"
                    ></iframe>
                </div>
            )}
        </div>
    );
}
