import prismadb from "@/lib/prismadb"
import Image from "next/image"
import Link from "next/link"

export default async function CategoriesSection() {

    const categories = await prismadb.category.findMany();

    return (
        <>
            <h1 className="text-4xl font-medium text-center mb-3 mt-5">Explora nuestras categorías</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-5">
                {categories.map((categorie, index) => (
                    <Link
                        key={index}
                        href={`/products/${categorie.name}`}
                        className="group relative overflow-hidden rounded-lg aspect-square"
                    >
                        <Image
                            src={categorie.image}
                            alt={`${categorie.name}`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center text-white">
                            <h2 className="text-2xl font-medium mb-1">{categorie.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}