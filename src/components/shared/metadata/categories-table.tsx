"use client";

import { CategoryListView } from "@/lib/types/categories";
import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
} from "../../ui/table";

function MetadataTable({ data }: { data: CategoryListView[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>English name</TableHead>
          <TableHead>Romanian name</TableHead>
          <TableHead>Product count</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.nameEn}</TableCell>
            <TableCell>{item.nameRo}</TableCell>
            <TableCell>{item.productCount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export { MetadataTable };
