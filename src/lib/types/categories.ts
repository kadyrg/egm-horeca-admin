export type CategoryListView = {
  id: number;
  nameEn: string;
  nameRo: string;
  productCount: number;
};

export type CategoryListViewAll = {
  id: number;
  nameEn: string;
  nameRo: string;
};

export type CategoriesList = {
  data: CategoryListView[];
  total: number;
  initial: number;
  last: number;
  totalPages: number;
  page: number;
};
