import {
  ProductsList
} from "../types/products";

export async function getProducts() {
  const res = await fetch(`${process.env.API_URL}/products`, {
    method: "GET",
    next: { tags: ["products"] },
  });
  const data: ProductsList = await res.json();
  return data;
}
