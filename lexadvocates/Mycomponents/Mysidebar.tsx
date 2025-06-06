import {
  BookOpenCheck,
  Calendar,
  Home,
  Inbox,
  Scale,
  Settings,
  SquareLibrary,
  UserRoundSearch,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    url: "/About",
    icon: Inbox,
  },
  {
    title: "Career",
    url: "/career",
    icon: Calendar,
  },
  {
    title: "Contact",
    url: "/Contact",
    icon: UserRoundSearch,
  },
  {
    title: "Features",
    url: "/Features",
    icon: Settings,
  },
  {
    title: "KnowledgeHub",
    url: "/KnowledgeHub",
    icon: SquareLibrary,
  },
  {
    title: "Our Team",
    url: "/Management",
    icon: Scale,
  },
  {
    title: "Our Services",
    url: "/Services",
    icon: BookOpenCheck,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-white">
      <SidebarContent className="bg-white">
        <SidebarGroup className="mt-10">
          <SidebarGroupLabel>Ronel Lex Advocates</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="m-3">
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span className="text-xl">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
