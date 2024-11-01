import prismadb from "@/lib/prismadb";
import Image from "next/image";

export default async function AboutUs() {
    const aboutText = await prismadb.about.findFirst({ include: { images: true } });
    const initialData = aboutText || undefined;
    const urls = initialData?.images.map((image) => image.url);

    const formatTextWithParagraphs = (text: string) => {

        const formattedText = text.replace(/(<br \/>)+/g, '<br />').trim();

        return formattedText.split(/<br \/>+/).map((line, index) => (
            line.trim() ? (
                <p key={index} className="my-2">
                    {line}
                </p>
            ) : <br key={index} />
        ));
    };

    return (
        <div className="about-us-container mt-3 p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="text-[20px]">
                {initialData?.text && formatTextWithParagraphs(initialData.text)}
            </h1>
            {urls && urls.length > 0 && (
                <div className="mt-6">
                    <div className="grid grid-cols-2 gap-4">
                        {urls.map((url, index) => (
                            <Image
                                width={300}
                                height={300}
                                key={index}
                                src={url}
                                alt={`About Us Image ${index + 1}`}
                                className="rounded-lg shadow-md"
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
