import {ProductVariantsListView } from "../types/product-variants";




export async function getProductVariantsAll() {
  const res = await fetch(
    `${process.env.API_URL}/product_variants/all`,
    {
      method: "GET",
      next: { tags: ["product-variants"] },
    },
  );
  const data: ProductVariantsListView[] = await res.json();
  return data;
}
