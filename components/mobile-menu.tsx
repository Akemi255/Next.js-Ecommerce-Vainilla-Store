"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, ChevronRight, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./logo";
import { Category, LearningCategory, Logo as TypeLogo } from "@prisma/client";
interface MobileMenuProps {
    categories: Category[];
    learningCategories: LearningCategory[];
    logo?: TypeLogo
}

export function MobileMenu({ categories, learningCategories, logo }: MobileMenuProps) {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (menu: any) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden flex border-none">
                    <Menu className="mr-2" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col h-full">
                <SheetHeader>
                    <SheetTitle className="flex justify-center">
                        <Logo logo={logo} />
                    </SheetTitle>
                </SheetHeader>
                <nav className="mt-4 flex-grow">
                    <ul className="space-y-4">
                        <li>
                            <div className="flex justify-between items-center" onClick={() => handleMenuClick('shop')}>
                                <span>Tienda</span>
                                {activeMenu === 'shop' ? <ChevronDown /> : <ChevronRight />}
                            </div>
                            {activeMenu === 'shop' && (
                                <ul className="ml-4 mt-2 space-y-2">
                                    <li><Link href="/products">Ver productos</Link></li>
                                    {categories.map((category) => (
                                        <Link
                                            key={category.id}
                                            href={`/products/${category.name.replace(/\s+/g, '-')}`}
                                            className="rounded cursor-pointer block"
                                        >
                                            {category.name}
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li>
                            <div className="flex justify-between items-center" onClick={() => handleMenuClick('resources')}>
                                <span>Historias ancestrales</span>
                                {activeMenu === 'resources' ? <ChevronDown /> : <ChevronRight />}
                            </div>
                            {activeMenu === 'resources' && (
                                <ul className="ml-4 mt-2 space-y-2">
                                    {learningCategories.map((category) => (
                                        <Link
                                            key={category.id}
                                            href={`/learning/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="rounded cursor-pointer block"
                                        >
                                            {category.name}
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li>
                            <div className="flex justify-between items-center" onClick={() => handleMenuClick('about')}>
                                <span>Sobre nosotros</span>
                                {activeMenu === 'about' ? <ChevronDown /> : <ChevronRight />}
                            </div>
                            {activeMenu === 'about' && (
                                <ul className="ml-4 mt-2 space-y-2">
                                    <li><Link href="/about-us">Sobre nosotros</Link></li>
                                    <li><Link href="/our-story">Nuestra historia</Link></li>
                                    <li><Link href="/contact-us">Contáctanos</Link></li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
                <SheetFooter className="mt-auto">
                    <h2 className="text-center text-sm text-gray-500">
                        Ancestral land all rights reserved
                    </h2>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
