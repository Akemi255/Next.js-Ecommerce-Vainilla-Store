export const revalidate = 0

import prismadb from "@/lib/prismadb";

export default async function PoliciesPage() {

    const policiesText = await prismadb.policies.findFirst();
    const initialData = policiesText || undefined;

    const formatTextWithParagraphs = (text: string) => {
        return text.split('<br />').map((line, index) => (
            <p key={index} className="my-2">
                {line}
            </p>
        ));
    };

    return (
        <div className="about-us-container mt-3 p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="text-[20px]">{initialData?.text && formatTextWithParagraphs(initialData.text)}</h1>
        </div>
    );
}
