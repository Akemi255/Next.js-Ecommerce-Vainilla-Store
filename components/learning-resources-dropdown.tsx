import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';

export default function LearningResourcesDropdown() {
    return (
        <Popover>
            <PopoverTrigger asChild className='border-none'>
                <Button variant="outline" className="flex items-center text-gray-500 hover:text-gray-900">
                    Learning Resources
                    <ChevronDown className="ml-1 h-4 w-4 relative top-[0.5px]" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48">
                <div className="grid gap-2">
                    <Link href="/learning/make-vanilla-extract" className="hover:bg-gray-100 p-2 rounded cursor-pointer block">
                        Make Vanilla Extract
                    </Link>
                    <Link href="/learning/vanilla-glosary" className="hover:bg-gray-100 p-2 rounded cursor-pointer block">
                        Vanilla Glossary
                    </Link>
                    <Link href="/learning/vanilla-bean-basics" className="hover:bg-gray-100 p-2 rounded cursor-pointer block">
                        Vanilla Bean Basics
                    </Link>
                    <Link href="/learning/advanced-topics" className="hover:bg-gray-100 p-2 rounded cursor-pointer block">
                        Advanced topics
                    </Link>
                </div>
            </PopoverContent>
        </Popover>
    );
}
