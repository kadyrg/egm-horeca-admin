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
import { ProductVariantTypeDelete } from "@/components/shared/poduct-variant-type-delete";
import { ProductVariantTypeEdit } from "@/components/shared/product-variant-types/product-variant-type-edit";
import { Badge } from "@/components/ui/badge";
import { getProductVariantsByType } from "@/lib/api/product-variant-types";

interface Props {
  params: Promise<{productVariantTypeId: number}>
}

export default async function ProductVariantTypesPage({params}: Props) {
  const {productVariantTypeId} = await params
  const productVariants = await getProductVariantsByType(productVariantTypeId);

  return (
    <List
      addFeature={<ProductVariantTypeAdd />}
      title={"Variants"}
      total={productVariants.total}
      initial={productVariants.initial}
      last={productVariants.last}
      totalPages={productVariants.totalPages}
      page={productVariants.page}
      searchPlaceholder={"Search product variant..."}
      table={
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>English name</TableHead>
              <TableHead>Romanian name</TableHead>
              <TableHead>Variants</TableHead>
              <TableHead className="text-right">Controls</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productVariants.data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.nameEn}</TableCell>
                <TableCell>{item.nameRo}</TableCell>
                <TableCell>
                  <Badge variant={"outline"}>
                    {item.variantsCount} variants
                  </Badge>
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
