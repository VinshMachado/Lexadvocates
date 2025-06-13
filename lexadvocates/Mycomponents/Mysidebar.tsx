import {
  BookOpenCheck,
  Calendar,
  Home,
  Inbox,
  Newspaper,
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
import Link from "next/link";

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
  {
    title: "News",
    url: "/News",
    icon: Newspaper,
  },
  {
    title: "Live Chat",
    url: "/chatbot",
    icon: Newspaper,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-white">
      <SidebarContent className="bg-white">
        <SidebarGroup className="mt-10">
          <SidebarGroupLabel className="text-2xl text-amber-400">
            Ronel Lex Advocates
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-5">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="m-3 ml-5">
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span className="text-xl">{item.title}</span>
                    </Link>
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
