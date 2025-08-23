"use client";

import { DialogDrawer } from "../dialog-drawer";
import { useState } from "react";
import { BadToast, GoodToast } from "../toasts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { toast } from "sonner";
import { Input } from "../../ui/input";
import { addProductVariant } from "@/app/actions/product-variants";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../ui/form";
import { AddButton } from "../add-button";
import { CancelButton } from "../cancel-button";
import { SaveButton } from "@/components/save-button";

const formSchema = z.object({
  nameEn: z.string().min(1).max(50),
  nameRo: z.string().min(1).max(50),
});

function ProductVariantAdd({
  productVariantTypeId,
}: {
  productVariantTypeId: number;
}) {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nameEn: "",
      nameRo: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const body = JSON.stringify({ ...values, productVariantTypeId });
    try {
      await addProductVariant(body);
      toast(<GoodToast text={"Product variant added successfully"} />, {
        position: "top-center",
      });
      setOpen(false);
    } catch {
      toast(<BadToast text={"Product variant couldn't be added"} />, {
        position: "top-center",
      });
    }
  }
  
  return (
    <DialogDrawer
      title={"Add Product variant"}
      isOpen={open}
      onOpenChange={(open) => setOpen(open)}
      trigger={<AddButton />}
      body={
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="nameEn"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="English name" {...field} />
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
                  <FormControl>
                    <Input placeholder="Romanian name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <span className="flex gap-1 justify-end">
              <CancelButton onClick={() => setOpen(false)} />
              <SaveButton />
            </span>
          </form>
        </Form>
      }
    />
  );
}

export { ProductVariantAdd };
