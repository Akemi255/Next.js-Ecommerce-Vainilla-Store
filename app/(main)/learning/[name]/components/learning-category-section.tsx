import { formatTextWithParagraphs } from "@/lib/format-text-with-paragraphs";
import { LearningCategory, LearningImage } from "@prisma/client"
import Image from "next/image";

interface LearningCategorySectionProps {
    learningCategory: LearningCategory & { images: LearningImage[] }
}

export default function LearningCategorySection({ learningCategory }: LearningCategorySectionProps) {

    const initialData = learningCategory || undefined;

    const urls = initialData?.images.map((image) => image.url);


    return (
        <div className="about-us-container mt-3 p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="text-[20px]">{initialData?.text && formatTextWithParagraphs(initialData.text)}</h1>
            {urls && urls.length > 0 && (
                <div className="mt-6">
                    <div className="grid grid-cols-2 gap-4">
                        {urls.map((url, index) => (
                            <Image width={300} height={300} key={index} src={url} alt={`About Us Image ${index + 1}`} className="rounded-lg shadow-md" />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
