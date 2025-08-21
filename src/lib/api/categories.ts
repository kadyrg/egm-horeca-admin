import { CategoriesList, CategoryListViewAll } from "../types/categories";

export async function getCategories({ page }: { page: number }) {
  const res = await fetch(
    `${process.env.API_URL}/categories/?page=${page}`,
    {
      method: "GET",
      next: { tags: ["categories"] },
    },
  );
  const data: CategoriesList = await res.json();
  return data;
}

export async function getAllCategories() {
  const res = await fetch(`${process.env.API_URL}/categories/all`, {
    method: "GET",
    next: { tags: ["categories"] },
  });
  const data: CategoryListViewAll[] = await res.json();
  return data;
}
