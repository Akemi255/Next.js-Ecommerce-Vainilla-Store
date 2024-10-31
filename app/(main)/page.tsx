import prismadb from "@/lib/prismadb";

import { AspectRatioVainilla } from "@/components/aspect-vainilla";
import FeatureSection from "@/components/feature-section";


export default async function Home() {

  const products = await prismadb.product.findMany({
    where: {
      isFeature: true
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      category: true,
      images: true,
    },
  });

  return (
    <main className="">
      <AspectRatioVainilla />
      <p className="hidden sm:flex text-center text-xl text-gray-700 w-[70%] mx-auto mt-8 leading-relaxed">
        Descubre la esencia de Ecuador donde la naturaleza y la cultura se unen en armonía. Nuestros productos naturales, cuidadosamente seleccionados y elaborados con amor, llevan la riqueza de nuestra tierra y la sabiduría de nuestras tradiciones ancestrales a tu vida.
      </p>
      <FeatureSection products={products} />
    </main>
  );
}
