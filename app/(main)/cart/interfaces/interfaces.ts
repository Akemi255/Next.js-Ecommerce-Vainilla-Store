import {
  AdvancedProduct,
  AdvancedProductImage,
  Category,
  Image,
  Product,
  ProductVariant,
} from "@prisma/client";

export interface ProductWithDetails extends Product {
  images: Image[];
  category: Category;
  advancedProduct?: AdvancedProduct;
}

export interface VariantProductWithImages extends ProductVariant {
  images: AdvancedProductImage[];
  advancedProduct: AdvancedProduct;
}

export interface CartItem {
  id: string;
  quantity: number;
}
