import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function RetailShopDropdown() {
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
                        Todos los productos
                    </Link>
                    <Link href="/products/vanilla" className="hover:bg-gray-100 p-2 rounded cursor-pointer block">
                        Vanilla
                    </Link>
                    <Link href="/products/coffe" className="hover:bg-gray-100 p-2 rounded cursor-pointer block">
                        Coffe
                    </Link>
                    <Link href="/products/cocoa" className="hover:bg-gray-100 p-2 rounded cursor-pointer block">
                        Cocoa
                    </Link>
                    <Link href="/products/panama-huts" className="hover:bg-gray-100 p-2 rounded cursor-pointer block">
                        Panamá huts
                    </Link>
                    <Link href="/products/tagua" className="hover:bg-gray-100 p-2 rounded cursor-pointer block">
                        Tagua
                    </Link>
                </div>
            </PopoverContent>
        </Popover>
    );
}
