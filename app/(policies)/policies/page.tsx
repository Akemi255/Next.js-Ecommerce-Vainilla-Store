export const revalidate = 0;

import { formatTextWithParagraphs } from "@/lib/format-text-with-paragraphs";
import prismadb from "@/lib/prismadb";

export default async function PoliciesPage() {
    const policiesText = await prismadb.policies.findFirst();
    const initialData = policiesText || undefined;

    return (
        <div className="about-us-container mt-3 p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="text-[20px]">
                {initialData?.text && formatTextWithParagraphs(initialData.text)}
            </h1>
        </div>
    );
}
