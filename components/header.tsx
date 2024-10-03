import Link from 'next/link'
import prismadb from '@/lib/prismadb'
import { User } from 'lucide-react'

import Logo from './logo'
import RetailShopDropdown from './retail-shop-dropdown'
import LearningResourcesDropdown from './learning-resources-dropdown'
import AboutUsDropdown from './about-us-dropdown'
import { MobileMenu } from './mobile-menu'
import SearchModal from './search-modal'
import CartIcon from './cart-icon'

export default async function Header() {

    const categories = await prismadb.category.findMany({
        orderBy: {
            createdAt: "desc",
        },
    })

    const learningCategories = await prismadb.learningCategory.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })

    return (
        <header className="border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <MobileMenu categories={categories} learningCategories={learningCategories} />
                    <Logo />
                    <nav className="hidden md:flex space-x-8">
                        <div className="relative group">
                            <RetailShopDropdown categories={categories} />
                        </div>

                        <div className="relative group">
                            <LearningResourcesDropdown learningCategories={learningCategories} />
                        </div>
                        <div className="relative group">
                            <AboutUsDropdown />
                        </div>
                    </nav>
                    <div className="flex items-center">
                        <button className="p-2 text-gray-400 hover:text-gray-500">
                            <SearchModal />
                        </button>
                        <Link className="p-2 text-gray-400 hover:text-gray-500" href="/profile">
                            <User className="h-6 w-6" />
                        </Link>
                        <Link href="/cart" className="p-2 text-gray-400 hover:text-gray-500">
                            <CartIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}