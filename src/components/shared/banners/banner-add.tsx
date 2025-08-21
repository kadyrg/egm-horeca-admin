"use client";

import { Button } from "../../ui/button";
import { DialogDrawer } from "../dialog-drawer";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../ui/form";
import { toast } from "sonner";
import { BadToast, GoodToast } from "../toasts";
import { Input } from "../../ui/input";
import { addBanner } from "@/app/actions/banners";

const formSchema = z.object({
  image: z.instanceof(File),
});

function BannerAdd() {
  const [open, setOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("image", values.image);
    try {
      await addBanner(formData);
      toast(<GoodToast text={"Banner added successfully"} />, {
        position: "top-center",
      });
      setOpen(false);
    } catch {
      toast(<BadToast text={"Banner couldn't be added"} />, {
        position: "top-center",
      });
    }
  }
  return (
    <>
      <DialogDrawer
        title={"Add Banner"}
        isOpen={open}
        onOpenChange={(open) => setOpen(open)}
        trigger={<Button size={"sm"}>Add Banner</Button>}
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
                  Add Banner
                </Button>
              </div>
            </form>
          </Form>
        }
      />
    </>
  );
}

export { BannerAdd };
