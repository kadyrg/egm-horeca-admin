"use server";

import { revalidateTag } from "next/cache";

export async function addBanner(formData: FormData) {
  try {
    const response = await fetch(`${process.env.API_URL}/banners`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error();
    }
    revalidateTag("banners");
  } catch (error) {
    throw error;
  }
}

export async function deleteBanner(id: number) {
  try {
    const response = await fetch(`${process.env.API_URL}/banners/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error();
    }
    revalidateTag("banners");
  } catch (error) {
    throw error;
  }
}

export async function updateBanner(id: number, formData: FormData) {
  try {
    const response = await fetch(`${process.env.API_URL}/banners/${id}`, {
      method: "PATCH",
      body: formData,
    });
    if (!response.ok) {
      throw new Error();
    }
    revalidateTag("banners");
  } catch (error) {
    throw error;
  }
}
