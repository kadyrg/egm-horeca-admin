import { ProductInstancesList } from "../types/product-instances";
import { ProductsList } from "../types/products";

export async function getProductInstances() {
  const res = await fetch(`${process.env.API_URL}/product_instances`, {
    method: "GET",
    next: { tags: ["product-instances"] },
  });
  const data: ProductInstancesList = await res.json();
  return data;
}

export async function getProductsOfInstanceId(instanceId: number) {
  const res = await fetch(
    `${process.env.API_URL}/product_instances/${instanceId}/products`,
    {
      method: "GET",
      next: { tags: ["products"] },
    },
  );
  const data: ProductsList = await res.json();
  return data;
}
