import prismadb from "@/lib/prismadb";

import { AspectRatioVainilla } from "@/components/aspect-vainilla";
import FeatureSection from "@/components/feature-section";
import CategoriesSection from "@/components/categories-card";

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

  const advancedproducts = await prismadb.advancedProduct.findMany({
    where: {
      isFeature: true
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      category: true,
      variants: {
        include: {
          images: true
        }
      }
    }
  });

  const filteredAdvancedProducts = advancedproducts.filter(product => product.variants.length > 0);

  return (
    <main className="">
      <AspectRatioVainilla />
      <CategoriesSection />
      <FeatureSection
        products={products}
        advancedProducts={filteredAdvancedProducts}
      />
    </main>
  );
}
