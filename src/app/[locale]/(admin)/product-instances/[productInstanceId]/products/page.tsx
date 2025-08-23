import { List } from "@/components/shared/list";
import { ProductInstanceAddProduct } from "@/components/shared/product-instances/product-instance-add-product";
import { ProductDelete } from "@/components/shared/products/product-delete";
import { ProductEdit } from "@/components/shared/products/product-edit";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllCategories } from "@/lib/api/categories";
import { getProductsOfInstanceId } from "@/lib/api/product-instances";
import { getProductVariantTypesAll } from "@/lib/api/product-variant-types";
import { getProductVariantsAll } from "@/lib/api/product-variants";

interface Props {
  params: Promise<{ productInstanceId: number }>;
}

export default async function ProductVariantsPage({ params }: Props) {
  const {productInstanceId} = await params
  const products = await getProductsOfInstanceId(productInstanceId);
  const categories = await getAllCategories();
  const varaintTypes = await getProductVariantTypesAll()
  const variants = await getProductVariantsAll()

  return (
    <List
      addFeature={
        <ProductInstanceAddProduct
          instanceId={productInstanceId}
          categories={categories} variantTypes={varaintTypes} variants={variants}
        />
      }
      total={products.total}
      initial={products.initial}
      last={products.last}
      totalPages={products.totalPages}
      page={products.page}
      table={
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>English name</TableHead>
              <TableHead>Romanian name</TableHead>
              <TableHead>price</TableHead>
              <TableHead>stock</TableHead>
              <TableHead>status</TableHead>
              <TableHead>Variant type</TableHead>
              <TableHead>Variant name</TableHead>
              <TableHead className="text-right">Controls</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.nameEn}</TableCell>
                <TableCell>{item.nameRo}</TableCell>
                <TableCell>{item.price} lei</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>
                  <Badge variant={item.status ? "default" : "destructive"}>
                    {item.status ? "active" : "inactive"}
                  </Badge>
                </TableCell>
                <TableCell>{item.categoryId}</TableCell>
                <TableCell>{item.categoryId}</TableCell>
                <TableCell className="text-right">
                  <span className="flex gap-1 float-right">
                    <ProductEdit product={item} allCategories={categories} />
                    <ProductDelete id={item.id} />
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
