export type ProductsListView = {
  id: number;
  nameEn: string;
  nameRo: string;
  descriptionEn: string;
  descriptionRo: string;
  price: number;
  stock: number;
  categoryId: number;
  status: boolean;
  isTop: boolean;
  variantsCount: number;
  mainImage: string | null;
  extraImage1: string | null;
  extraImage2: string | null;
  extraImage3: string | null;
  extraImage4: string | null;
  extraImage5: string | null;
  extraImage6: string | null;
};

export type ProductsList = {
  data: ProductsListView[];
  total: number;
  initial: number;
  last: number;
  totalPages: number;
  page: number;
};
