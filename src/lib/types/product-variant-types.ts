export type ProductVariantTypesListView = {
  id: number;
  nameEn: string;
  nameRo: string;
  variantsCount: number
};

export type ProductVariantTypesList = {
  data: ProductVariantTypesListView[];
  total: number;
  initial: number;
  last: number;
  totalPages: number;
  page: number;
};
