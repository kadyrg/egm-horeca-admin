"use client"

import { Delete } from "../delete"
import { deleteProductInstance } from "@/app/actions/product-instances"

function ProductInstanceDelete({id}:{id:number}) {
  return (
    <Delete onDelete={() => deleteProductInstance(id)} />
  )
}

export {ProductInstanceDelete}
