"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Clock, FolderOpen, HardDrive, Star, Trash2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const navItems = [
  { id: "files" as const, icon: FolderOpen, label: "My Files", href: "/" },
  { id: "recent" as const, icon: Clock, label: "Recent", href: "/recent" },
  {
    id: "favorites" as const,
    icon: Star,
    label: "Favorites",
    href: "/favorites",
  },
  { id: "trash" as const, icon: Trash2, label: "Trash", href: "/trash" },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <Link href="/">
          <div className="h-16 flex  items-center gap-2">
            <div className="size-8 flex justify-center items-center rounded-md bg-blue-600">
              <HardDrive className="size-4" />
            </div>
            <span className="text-md font-semibold capitalize tracking-tight leading-0.5 group-data-[collapsible=icon]:hidden">
              RoyalDrive
            </span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <Link href={item.href}>
                <SidebarMenuButton isActive={pathname === item.href}>
                  <div className="flex items-center justify-center gap-2">
                    <item.icon className="size-4" />
                    {item.label}
                  </div>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-4 w-full overflow-x-hidden">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="flex flex-col gap-2 items-start">
                <span className="text-xs text-muted-foreground">
                  berenis MASSAMBA
                </span>
                <span className="text-xs text-muted-foreground">
                  berenismassamba@gmail.com
                </span>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
