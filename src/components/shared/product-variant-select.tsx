import { CategoryListViewAll } from "@/lib/types/categories";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ProductVariantTypesListView } from "@/lib/types/product-variant-types";
import { ProductVariantsListView } from "@/lib/types/product-variants";
import { useState } from "react";

function ProductVariantSelect({
  categories,
  variantTypes,
  variants,
  ...props
}: React.ComponentProps<typeof Select> & {
  categories: CategoryListViewAll[];
  variantTypes: ProductVariantTypesListView[];
  variants: ProductVariantsListView[]
}) {
  const [variantTypeId, setVariantTypeId] = useState<number>();

  const sortedVariants = variants.filter((variant) => variant.productVariantTypeId===variantTypeId)

  return (
    <div className="flex gap-2">
      <Select onValueChange={(v) => setVariantTypeId(Number(v))}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select variant type" />
        </SelectTrigger>
        <SelectContent>
          {variantTypes.map((item) => (
            <SelectItem key={item.id} value={item.id.toString()}>
              {item.nameEn}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select {...props}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select variant" />
        </SelectTrigger>
        <SelectContent>
          {sortedVariants.map((item) => (
            <SelectItem key={item.id} value={item.id.toString()}>
              {item.nameEn}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export { ProductVariantSelect };
