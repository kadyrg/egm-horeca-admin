import { Box, ChevronUp, Home, Images, LetterText, User2, UsersRound } from "lucide-react";

import { CategoriesIcon } from "../ui/icons";
import { Link } from "@/i18n/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "../ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

const items = [
  {
    title: "Home",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Users",
    url: "/users",
    icon: UsersRound,
  },
  {
    title: "Banners",
    url: "/banners",
    icon: Images,
  },
  {
    title: "Metadata",
    url: "/metadata",
    icon: LetterText,
  },
  {
    title: "Categories",
    url: "/categories",
    icon: CategoriesIcon,
  },
  {
    title: "Products",
    icon: Box,
    url: "/products",
    items: [
      {
        title: "Products",
        url: "/products",
      },
      {
        title: "Variant types",
        url: "/product-variant-types",
      },
    ],
  },
];

const metadata = [
  {title: "Root layout", url: '/metadata/root_layout'},
  {title: "Home page", url: '/metadata/home_page'},
  {title: "Product page", url: '/metadata/product_page'},
  {title: "Login page", url: '/metadata/login_page'},
  {title: "Register page", url: '/metadata/register_page'},
]

function AdminSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarTrigger />
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Link href={item.url}>
                    <SidebarMenuButton>
                      <item.icon size={17} />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                  {item.items && (
                    <SidebarMenuSub>
                      {item.items.map((i) => (
                        <SidebarMenuSubItem key={i.title}>
                          <SidebarMenuSubButton
                            href={i.url}
                            className="whitespace-nowrap"
                          >
                            {i.title}
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Metadata
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  {metadata.map((item) => (
                    <Link key={item.title} href={item.url}>
                      <DropdownMenuItem>
                      <span>{item.title}</span>
                    </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  );
}

export { AdminSidebar };
