import { Button } from "./ui/button"

function SaveButton({...props}:React.ComponentProps<typeof Button>) {
  return (
    <Button size={"sm"} type="submit" {...props}>
      Save
    </Button>
  )
}

export {SaveButton}
