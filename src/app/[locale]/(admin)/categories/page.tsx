import { List } from "@/components/shared/list";
import { getCategories } from "@/lib/api/categories";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CategoryEdit } from "@/components/shared/categories/category-edit";
import { CategoryAdd } from "@/components/shared/categories/category-add";
import { CategoryDelete } from "@/components/shared/categories/category-delete";

interface Props {
  searchParams: Promise<{ page: number }>;
}

export default async function CategoriesPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const reqPage = page ? Number(page) : 1;
  const data = await getCategories({ page: reqPage });

  return (
    <List
      addFeature={<CategoryAdd />}
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
              <TableHead>English name</TableHead>
              <TableHead>Romanian name</TableHead>
              <TableHead>Product count</TableHead>
              <TableHead className="text-right">Controls</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.nameEn}</TableCell>
                <TableCell>{item.nameRo}</TableCell>
                <TableCell>{item.productCount}</TableCell>
                <TableCell>
                  <span className="flex gap-1 float-right">
                    <CategoryEdit data={item} />
                    <CategoryDelete id={item.id} />
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
