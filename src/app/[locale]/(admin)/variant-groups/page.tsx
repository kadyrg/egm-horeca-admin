import { List } from "@/components/shared/list";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductVariantTypeAdd } from "@/components/shared/product-variant-types/product-variant-type-add";
import { getProductVariantTypes } from "@/lib/api/product-variant-types";
import { ProductVariantTypeEdit } from "@/components/shared/product-variant-types/product-variant-type-edit";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import { ProductVariantTypeDelete } from "@/components/shared/product-variant-types/product-variant-type-delete";

export default async function ProductVariantTypesPage() {
  const productVariantTypes = await getProductVariantTypes();

  return (
    <List
      addFeature={<ProductVariantTypeAdd />}
      total={productVariantTypes.total}
      initial={productVariantTypes.initial}
      last={productVariantTypes.last}
      totalPages={productVariantTypes.totalPages}
      page={productVariantTypes.page}
      table={
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>English Name</TableHead>
              <TableHead>Romanian Name</TableHead>
              <TableHead>Variants</TableHead>
              <TableHead className="text-right">Controls</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productVariantTypes.data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.nameEn}</TableCell>
                <TableCell>{item.nameRo}</TableCell>
                <TableCell>
                  <Link href={`/product-variant-types/${item.id}`}>
                  <Badge variant={"outline"}>
                    {item.variantsCount} variants
                  </Badge></Link>
                </TableCell>
                <TableCell className="text-right">
                  <span className="flex gap-1 float-right">
                    <ProductVariantTypeEdit productVariantType={item} />
                    <ProductVariantTypeDelete id={item.id} />
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
