import { Plus } from "lucide-react";
import { Button } from "../ui/button";

function AddButton({...props}:React.ComponentProps<typeof Button>) {
  return (
    <Button size={"icon"} variant={"outline"} className="rounded-full" {...props}>
      <Plus />
    </Button>
  )
}

export { AddButton }
