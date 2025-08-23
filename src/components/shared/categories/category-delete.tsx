"use client"

import { deleteCategory } from "@/app/actions/categories"
import { Delete } from "../delete"

function CategoryDelete({id}:{id:number}) {
  return (
    <Delete onDelete={() => deleteCategory(id)} />
  )
}

export {CategoryDelete}
