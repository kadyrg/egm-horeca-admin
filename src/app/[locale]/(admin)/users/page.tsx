import { List } from "@/components/shared/list";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { getUsers } from "@/lib/api/users";
import { ViewButton } from "@/components/shared/view-button";

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function ProductsPage({searchParams}:Props) {
  const { page } = await searchParams;
  const users = await getUsers();

  return (
    <List
      title={"Users"}
      total={users.total}
      initial={users.initial}
      last={users.last}
      totalPages={users.totalPages}
      page={users.page}
      searchPlaceholder={"Search user..."}
      table={
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>First name</TableHead>
              <TableHead>Last name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone number</TableHead>
              <TableHead>Active status</TableHead>
              <TableHead>Verify status</TableHead>
              <TableHead className="text-right">Controls</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phoneNumber}</TableCell>
                <TableCell>
                  <Badge variant={item.isActive ? "default" : "destructive"}>
                    {item.isActive ? "active" : "inactive"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={item.isVerified ? "default" : "destructive"}>
                    {item.isVerified ? "verified" : "unverified"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <span className="flex gap-1 float-right">
                    <ViewButton />
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      }
    />
  );
}
