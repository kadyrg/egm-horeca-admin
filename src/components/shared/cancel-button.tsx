import { Button } from "../ui/button"

function CancelButton({...props}: React.ComponentProps<typeof Button>) {
  return (
    <Button type="button" size={"sm"} variant={"destructive"} {...props}>
      Cancel
    </Button>
  )
}

export { CancelButton }
