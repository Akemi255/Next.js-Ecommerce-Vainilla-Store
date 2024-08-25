import Link from 'next/link'
import { Facebook, InstagramIcon, X } from 'lucide-react'

export default function Footer() {
    return (
        <header className="w-full py-8 bg-white text-gray-700 border-t">
            <div className="container mx-auto px-2">
                <div className="flex justify-between">

                    <div className="flex flex-col space-y-2">
                        <h2 className="font-semibold text-lg mb-2">Quick links</h2>
                        <Link href="/search" className="text-sm hover:underline">Search Online Store</Link>
                        <Link href="/beans" className="text-sm hover:underline">Our Vanilla Beans</Link>
                        <Link href="/policies" className="text-sm hover:underline">Store Policies</Link>
                    </div>


                    <div className="flex flex-col space-y-2">
                        <h2 className="font-semibold text-lg mb-2">Ancestral Land Group</h2>
                        <Link href="/about-group" className="text-sm hover:underline">About Group</Link>
                        <Link href="/resources" className="text-sm hover:underline">Group Resources</Link>
                        <Link href="/group-policies" className="text-sm hover:underline">Group Policies</Link>
                        <div className="flex space-x-4 mt-4 relative top-7">
                            <Link href="https://facebook.com" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="https://facebook.com" aria-label="Instagram">
                                <InstagramIcon className="w-5 h-5" />
                            </Link>
                            <Link href="https://facebook.com" aria-label="X">
                                <X className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>


                    <div className="flex flex-col space-y-2">
                        <h2 className="font-semibold text-lg mb-2">About Us</h2>
                        <Link href="/our-story" className="text-sm hover:underline">Our Story</Link>
                        <Link href="/our-team" className="text-sm hover:underline">Our Team</Link>
                        <Link href="/causes" className="text-sm hover:underline">Our Favorite Causes</Link>
                        <Link href="/contact" className="text-sm hover:underline">Contact Us</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}