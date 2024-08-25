import Link from 'next/link'
import { Facebook, InstagramIcon, X } from 'lucide-react'

export default function Footer() {
    return (
        <header className="w-full py-8 bg-white text-gray-700 border-t">
            <div className="container mx-auto px-2">
                <div className="flex justify-between">

                    <div className="flex flex-col space-y-2">
                        <h2 className="font-semibold text-lg mb-2">Quick links</h2>
                        <Link href="/products/vanilla" className="text-sm hover:underline">Our Vanilla Beans</Link>
                        <Link href="/policies" className="text-sm hover:underline">Store Policies</Link>
                    </div>


                    <div className="flex flex-col space-y-2">
                        <h2 className="font-semibold text-lg mb-2">About Us</h2>
                        <Link href="/our-story" className="text-sm hover:underline">Our Story</Link>
                        <Link href="/our-team" className="text-sm hover:underline">Our Team</Link>
                        <Link href="/favorite-cause" className="text-sm hover:underline">Our Favorite Causes</Link>
                        <Link href="/contact-us" className="text-sm hover:underline">Contact Us</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}