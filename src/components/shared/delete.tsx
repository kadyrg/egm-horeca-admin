"use client";

import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { BadToast, GoodToast } from "./toasts";
import { DialogDrawer } from "./dialog-drawer";
import { useState } from "react";

function Delete({
  onDelete,
}: {
  onDelete: () => Promise<void> | void;
}) {
  const [open, setOpen] = useState<boolean>(false);

  async function handleClick() {
    try {
      await onDelete();
      toast(<GoodToast text={"Successfully deleted"} />, { position: "top-center" });
    } catch {
      toast(<BadToast text={"Something went wrong"} />, { position: "top-center" });
    }
  }

  return (
    <DialogDrawer
      isOpen={open}
      onOpenChange={(open) => setOpen(open)}
      trigger={
        <Button
          size="icon"
          className="w-7 h-7 rounded-full"
          variant="destructive"
        >
          <Trash2 />
        </Button>
      }
      title={"Are you sure you want to delete?"}
      body={
        <div className="flex gap-2 w-full">
          <Button
            onClick={() => setOpen(false)}
            variant={"outline"}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            onClick={handleClick}
            variant={"destructive"}
            className="flex-1"
          >
            Delete
          </Button>
        </div>
      }
    />
  );
}

export { Delete };
