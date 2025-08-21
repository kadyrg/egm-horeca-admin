import { BannerAdd } from "@/components/shared/banners/banner-add";
import { BannersTable } from "@/components/shared/banners/banners-table";
import { List } from "@/components/shared/list";
import { getBanners } from "@/lib/api/banners";

interface Props {
  searchParams: Promise<{ page: number }>;
}

export default async function BannersPage({searchParams}: Props) {
  const { page } = await searchParams;
  const reqPage = page ? Number(page) : 1;
  const data = await getBanners({ page: reqPage });
  
  return (
    <List
      addFeature={<BannerAdd />}
      title={"Banners"}
      table={<BannersTable data={data.data} />}
      total={data.total}
      initial={data.initial}
      last={data.last}
      totalPages={data.totalPages}
      page={data.page}
      searchPlaceholder={"Search banner..."}
    />
  );
}
