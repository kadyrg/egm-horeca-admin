import {
  ProductVariantTypesList,
  ProductVariantTypesListView,
} from "../types/product-variant-types";
import { ProductVariantsListAdmin } from "../types/product-variants";

export async function getProductVariantTypes() {
  const res = await fetch(`${process.env.API_URL}/product_variant_types`, {
    method: "GET",
    next: { tags: ["product-variant-types"] },
  });
  const data: ProductVariantTypesList = await res.json();
  return data;
}

export async function getProductVariantTypesAll() {
  const res = await fetch(`${process.env.API_URL}/product_variant_types/all`, {
    method: "GET",
    next: { tags: ["product-variant-types"] },
  });
  const data: ProductVariantTypesListView[] = await res.json();
  return data;
}

export async function getProductVariantsByType(variantTypeId: number) {
  const res = await fetch(
    `${process.env.API_URL}/product_variant-types/${variantTypeId}/variants`,
    {
      method: "GET",
      next: { tags: ["product-variants"] },
    },
  );
  const data: ProductVariantsListAdmin = await res.json();
  return data;
}
