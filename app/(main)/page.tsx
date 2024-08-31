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
      <FeatureSection products={products} />
    </main>
  );
}
