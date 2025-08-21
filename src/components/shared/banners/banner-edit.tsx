"use client";

import { DialogDrawer } from "../dialog-drawer";
import { EditButton } from "../edit-button";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { BadToast, GoodToast } from "../toasts";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { BannerListView } from "@/lib/types/banners";
import { updateBanner } from "@/app/actions/banners";

const formSchema = z.object({
  image: z.instanceof(File).optional(),
});

function BannerEdit({ data }: { data: BannerListView }) {
  const [open, setOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    if (values.image) {
      formData.append("image", values.image);
    }
    try {
      await updateBanner(data.id, formData);
      toast(<GoodToast text={"Banner updated successfully"} />, {
        position: "top-center",
      });
      setOpen(false);
    } catch {
      toast(<BadToast text={"Banner couldn't be updated"} />, {
        position: "top-center",
      });
    }
  }

  return (
    <DialogDrawer
      isOpen={open}
      onOpenChange={(open) => setOpen(open)}
      trigger={<EditButton />}
      title={"Edit category"}
      body={
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 p-3"
          >
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files?.[0] ?? null;
                        field.onChange(file);
                      }}
                      onBlur={field.onBlur}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-1 justify-end">
              <Button
                type="button"
                onClick={() => setOpen(false)}
                size={"sm"}
                variant={"destructive"}
              >
                Cancel
              </Button>
              <Button size="sm" type="submit">
                Save changes
              </Button>
            </div>
          </form>
        </Form>
      }
    />
  );
}

export { BannerEdit };