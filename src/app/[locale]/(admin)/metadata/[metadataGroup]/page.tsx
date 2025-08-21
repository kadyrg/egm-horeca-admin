import { List } from "@/components/shared/list";
import { MetadataTable } from "@/components/shared/metadata/categories-table";
import { getMetadata } from "@/lib/api/metadata";

interface Props {
  params: Promise<{ metadataGroup: string }>;
}

export default async function MetadataPage({ params }: Props) {
  const { metadataGroup } = await params;

  const data = await getMetadata({ group: metadataGroup });

  return (
    <List
      title={"Metadata"}
      table={<MetadataTable data={data.data} />}
      total={data.total}
      initial={data.initial}
      last={data.last}
      totalPages={data.totalPages}
      page={data.page}
      searchPlaceholder={"Search category..."}
    />
  );
}
