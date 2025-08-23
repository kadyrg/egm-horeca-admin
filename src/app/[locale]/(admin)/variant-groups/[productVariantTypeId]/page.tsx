import { List } from "@/components/shared/list";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getProductVariantsByType } from "@/lib/api/product-variant-types";
import { ProductVariantTypeDelete } from "@/components/shared/product-variant-types/product-variant-type-delete";
import { ProductVariantAdd } from "@/components/shared/product-variants/product-variant-add";

interface Props {
  params: Promise<{productVariantTypeId: number}>
}

export default async function ProductVariantsPage({params}: Props) {
  const {productVariantTypeId} = await params
  const productVariants = await getProductVariantsByType(productVariantTypeId);

  return (
    <List
      addFeature={<ProductVariantAdd productVariantTypeId={productVariantTypeId} />}
      total={productVariants.total}
      initial={productVariants.initial}
      last={productVariants.last}
      totalPages={productVariants.totalPages}
      page={productVariants.page}
      table={
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>English name</TableHead>
              <TableHead>Romanian name</TableHead>
              <TableHead className="text-right">Controls</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productVariants.data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.nameEn}</TableCell>
                <TableCell>{item.nameRo}</TableCell>
                <TableCell className="text-right">
                  <span className="flex gap-1 float-right">
                    {/* <ProductVariantEdit productVariantType={item}  /> */}
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
