import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Category } from '@prisma/client';

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface RetailShopDropdownProps {
    categories: Category[];
}

export default function RetailShopDropdown({ categories }: RetailShopDropdownProps) {
    return (
        <Popover>
            <PopoverTrigger asChild className='border-none'>
                <Button variant="outline" className="flex items-center text-gray-500 hover:text-gray-900">
                    Retail Shop
                    <ChevronDown className="ml-1 h-4 w-4 relative top-[0.5px]" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48">
                <div className="grid gap-2">
                    <Link href="/" className="hover:bg-gray-100 p-2 rounded cursor-pointer block">
                        Home
                    </Link>
                    <Link href="/products" className="hover:bg-gray-100 p-2 rounded cursor-pointer block">
                        All products
                    </Link>
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/products/${category.name.replace(/\s+/g, '-')}`}
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
