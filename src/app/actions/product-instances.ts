"use server"

import { revalidateTag } from "next/cache";

export async function addProductInstance() {
  try {
    const response = await fetch(`${process.env.API_URL}/product_instances`, {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error();
    }
    revalidateTag("product-instances");
  } catch (error) {
    throw error;
  }
}

export async function deleteProductInstance(id: number) {
  try {
    const response = await fetch(`${process.env.API_URL}/product_instances/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error();
    }
    revalidateTag("product-instances");
  } catch (error) {
    throw error;
  }
}
