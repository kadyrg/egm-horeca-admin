"use client"

import { Delete } from "../delete"
import { deleteBanner } from "@/app/actions/banners"

function BannerDelete({id}:{id:number}) {
  return (
    <Delete onDelete={() => deleteBanner(id)} />
  )
}

export {BannerDelete}
