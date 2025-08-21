"use client";

import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
} from "../../ui/table";
import { Delete } from "../delete";
import { BannerListView } from "@/lib/types/banners";
import { BannerEdit } from "./banner-edit";
import { deleteBanner } from "@/app/actions/banners";

function BannersTable({ data }: { data: BannerListView[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Image</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.image}</TableCell>
            <TableCell>
              <span className="flex gap-1 float-right">
                <BannerEdit data={item} />
                <Delete
                  onDelete={() => deleteBanner(item.id)}
                  successMessage={"Banner deleted successfully"}
                  failMessage={"Banner couldn't be deleted"}
                />
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export { BannersTable };
