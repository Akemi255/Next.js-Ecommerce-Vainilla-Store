import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ChevronDown } from "lucide-react";

export default function AboutUsDropdown() {
    return (
        <Popover>
            <PopoverTrigger asChild className='border-none'>
                <Button variant="outline" className="flex items-center text-gray-500 hover:text-gray-900">
                    Sobre nosotros
                    <ChevronDown className="ml-1 h-4 w-4 relative top-[0.5px]" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48">
                <div className="grid gap-2">
                    <Link href="/about-us" className="hover:bg-gray-100 p-2 rounded cursor-pointer block">
                        Sobre nosotros
                    </Link>
                    <Link href="/our-story" className="hover:bg-gray-100 p-2 rounded cursor-pointer block">
                        Nuestra historia
                    </Link>
                    <Link href="/contact-us" className="hover:bg-gray-100 p-2 rounded cursor-pointer block">
                        Contáctanos
                    </Link>
                </div>
            </PopoverContent>
        </Popover>
    );
}
