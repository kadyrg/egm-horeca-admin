export type ProductInstancesListView = {
  id: number;
  productsCount: number;
};

export type ProductInstancesList = {
  data: ProductInstancesListView[];
  total: number;
  initial: number;
  last: number;
  totalPages: number;
  page: number;
};
