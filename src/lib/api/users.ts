import { UsersList } from "../types/users";

export async function getUsers() {
  const res = await fetch(`${process.env.API_URL}/users`, {
    method: "GET",
    next: { tags: ["users"] },
  });
  const data: UsersList = await res.json();
  return data;
}
