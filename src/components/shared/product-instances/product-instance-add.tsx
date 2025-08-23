"use client";

import { DialogDrawer } from "../dialog-drawer";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../../ui/form";
import { addCategory } from "@/app/actions/categories";
import { toast } from "sonner";
import { BadToast, GoodToast } from "../toasts";
import { AddButton } from "../add-button";
import { CancelButton } from "../cancel-button";
import { SaveButton } from "@/components/save-button";
import { addProductInstance } from "@/app/actions/product-instances";

const formSchema = z.object({

});

function ProductInstanceAdd() {
  const [open, setOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {

    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await addProductInstance();
      toast(<GoodToast text={"Product instance added successfully"} />, {
        position: "top-center",
      });
      setOpen(false);
    } catch {
      toast(<BadToast text={"Product instance couldn't be added"} />, {
        position: "top-center",
      });
    }
  }

  return (
    <DialogDrawer
      title={"Add Product instance"}
      isOpen={open}
      onOpenChange={(open) => setOpen(open)}
      trigger={<AddButton />}
      body={
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="flex gap-1 justify-end">
              <CancelButton onClick={() => setOpen(false)} />
              <SaveButton />
            </div>
          </form>
        </Form>
      }
    />
  )
}

export { ProductInstanceAdd }
