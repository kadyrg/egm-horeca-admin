import { AdminSidebar } from "@/components/layout/admin-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="w-full p-3 sm:p-[14px] md:p-4 lg:p-[18px] xl:p-5 flex flex-col gap-3 h-screen overflow-hidden">
        {children}
      </main>
    </SidebarProvider>
  );
}
