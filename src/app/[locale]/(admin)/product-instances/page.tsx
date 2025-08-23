import { List } from "@/components/shared/list";
import { ProductInstanceAdd } from "@/components/shared/product-instances/product-instance-add";
import { ProductInstanceDelete } from "@/components/shared/product-instances/product-instance-delete";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "@/i18n/navigation";
import { getProductInstances } from "@/lib/api/product-instances";

export default async function ProductsPage() {
  const producInstances = await getProductInstances();

  return (
    <List
      addFeature={<ProductInstanceAdd />}
      total={producInstances.total}
      initial={producInstances.initial}
      last={producInstances.last}
      totalPages={producInstances.totalPages}
      page={producInstances.page}
      table={
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead className="w-[100px]">Products</TableHead>
              <TableHead className="text-right">Controls</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {producInstances.data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>
                  <Link href={`/product-instances/${item.id}/products`}>
                    <Badge variant={"outline"}>
                      {item.productsCount} products
                    </Badge>
                  </Link>
                </TableCell>
                <TableCell>
                  <span className="flex gap-1 float-right">
                    <ProductInstanceDelete id={item.id} />
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
