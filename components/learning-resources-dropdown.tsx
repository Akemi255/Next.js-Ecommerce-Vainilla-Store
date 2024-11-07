import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { LearningCategory } from '@prisma/client';

interface LearningResourcesDropdownProps {
    learningCategories: LearningCategory[]
}

export default function LearningResourcesDropdown({ learningCategories }: LearningResourcesDropdownProps) {
    return (
        <Popover>
            <PopoverTrigger asChild className='border-none'>
                <Button variant="outline" className="flex items-center text-gray-500 hover:text-gray-900">
                    Historias Ancestrales
                    <ChevronDown className="ml-1 h-4 w-4 relative top-[0.5px]" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48">
                <div className="grid gap-2">
                    {learningCategories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/learning/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="hover:bg-gray-100 p-2 rounded cursor-pointer block"
                        >
                            {category.name}
                        </Link>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
}
