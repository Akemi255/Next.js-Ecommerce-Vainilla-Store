import { convertSlugToName } from '@/lib/convert-to-slug';
import prismadb from '@/lib/prismadb';
import LearningCategorySection from './components/learning-category-section';
import { notFound } from 'next/navigation';


export default async function LearningPage({ params }: { params: { name: string } }) {
    const { name } = params;

    const originalName = convertSlugToName(name);

    const learningCategory = await prismadb.learningCategory.findFirst({
        where: {
            name: {
                equals: originalName.toLowerCase(),
                mode: 'insensitive'
            }
        },
        include: { images: true }
    });

    if (!learningCategory) {
        return notFound()
    }

    return (
        <LearningCategorySection learningCategory={learningCategory} />
    );
}
