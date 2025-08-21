import { BannersList } from "../types/banners";

export async function getBanners({ page }: { page: number }) {
  const res = await fetch(
    `${process.env.API_URL}/banners?page=${page}`,
    {
      method: "GET",
      next: { tags: ["banners"] },
    },
  );
  const data: BannersList = await res.json();
  return data;
}
