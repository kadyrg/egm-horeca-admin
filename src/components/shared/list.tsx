import { AdminPagination } from "./pagination";

function List({
  addFeature,
  table,
  total,
  initial,
  last,
  totalPages,
  page,
}: {
  addFeature?: React.ReactNode;
  table: React.ReactNode;
  total: number;
  initial: number;
  last: number;
  totalPages: number;
  page: number;
}) {
  return (
    <div className="h-full border rounded-lg flex flex-col overflow-hidden">
      <div className="py-2 sticky top-0 z-50 flex items-center justify-between px-2 bg-background">
        {addFeature}
        <AdminPagination
          initial={initial}
          last={last}
          total={total}
          totalPages={totalPages}
          page={page}
        />
      </div>
      {table}
    </div>
  );
}

export { List };
