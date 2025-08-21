export type BannerListView = {
  id: number
  image: string
}

export type BannersList = {
  data: BannerListView[];
  total: number;
  initial: number;
  last: number;
  totalPages: number;
  page: number;
}
