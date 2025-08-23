import { BannerAdd } from "@/components/shared/banners/banner-add";
import { List } from "@/components/shared/list";
import { getBanners } from "@/lib/api/banners";
import { Table,TableHead,
  TableHeader,
  TableBody,
  TableCell,
  TableRow, } from "@/components/ui/table";
import { BannerEdit } from "@/components/shared/banners/banner-edit";
import { BannerDelete } from "@/components/shared/banners/banner-delete";

interface Props {
  searchParams: Promise<{ page: number }>;
}

export default async function BannersPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const reqPage = page ? Number(page) : 1;
  const data = await getBanners({ page: reqPage });

  return (
    <List
      addFeature={<BannerAdd />}
      total={data.total}
      initial={data.initial}
      last={data.last}
      totalPages={data.totalPages}
      page={data.page}
      table={
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Image</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.image}</TableCell>
                <TableCell>
                  <span className="flex gap-1 float-right">
                    <BannerEdit data={item} />
                    <BannerDelete id={item.id} />
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      }
    />
  );
}
