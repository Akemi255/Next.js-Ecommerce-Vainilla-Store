import Link from 'next/link'
import { Search, User, ShoppingBag, Home } from 'lucide-react'

import Logo from './logo'
import RetailShopDropdown from './retail-shop-dropdown'
import LearningResourcesDropdown from './learning-resources-dropdown'
import AboutUsDropdown from './about-us-dropdown'
import { MobileMenu } from './mobile-menu'
import SearchModal from './search-modal'
import CartIcon from './cart-icon'

export default function Header() {
    return (
        <header className="border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <MobileMenu />
                    <Logo />
                    <nav className="hidden md:flex space-x-8">


                        <div className="relative group">
                            <RetailShopDropdown />
                        </div>

                        <div className="relative group">
                            <LearningResourcesDropdown />
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