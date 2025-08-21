export async function getMetadata({ group }: { group: string }) {
  const res = await fetch(
    `${process.env.API_URL}/metadata/${group}`,
    {
      method: "GET",
      next: { tags: ["categories"] },
    },
  );
  const data = await res.json();
  return data;
}
