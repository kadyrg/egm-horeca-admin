"use client";

import { DialogDrawer } from "../dialog-drawer";
import { EditButton } from "../edit-button";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { ScrollArea } from "../../ui/scroll-area";
import {
  FormLabel,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../ui/form";
import { BadToast, GoodToast } from "../toasts";
import { ProductVariantTypesListView } from "@/lib/types/product-variant-types";
import { editProductVariantType } from "@/app/actions/product-variant-types";
import { CancelButton } from "../cancel-button";
import { SaveButton } from "../../save-button";

const formSchema = z.object({
  nameEn: z.string().min(1).max(50),
  nameRo: z.string().min(1).max(50),
});

function ProductVariantTypeEdit({
  productVariantType,
}: {
  productVariantType: ProductVariantTypesListView;
}) {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nameEn: productVariantType.nameEn,
      nameRo: productVariantType.nameRo,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const body = JSON.stringify(values);
    try {
      await editProductVariantType(productVariantType.id, body);
      toast(<GoodToast text={"Variant group edited successfully"} />, {
        position: "top-center",
      });
      setOpen(false);
    } catch {
      toast(<BadToast text={"Variant group couldn't be edited"} />, {
        position: "top-center",
      });
    }
  }

  return (
    <DialogDrawer
      isOpen={open}
      onOpenChange={(open) => setOpen(open)}
      trigger={<EditButton />}
      title={`Edit ${productVariantType.nameEn}`}
      body={
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <FormField
              control={form.control}
              name="nameEn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>English name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nameRo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Romanian name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-1 justify-end">
              <CancelButton onClick={() => setOpen(false)} />
              <SaveButton />
            </div>
          </form>
        </Form>
      }
    />
  );
}

export { ProductVariantTypeEdit };
