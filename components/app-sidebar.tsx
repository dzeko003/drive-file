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
  useSidebar,
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
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Progress } from "./ui/progress";

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

  const usedStorage = 4.2; // GB
  const totalStorage = 15; // GB
  const storagePercent = (usedStorage / totalStorage) * 100;

  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

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
        <div className="flex flex-col gap-3">
          <Separator className="bg-sidebar-border" />

          {/* Stockage */}
          {isCollapsed ? (
            // Mode icône : uniquement le cercle SVG centré
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex justify-center py-1">
                  <div className="h-8 w-8 relative">
                    <svg className="h-8 w-8 -rotate-90">
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-sidebar-accent"
                      />
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeDasharray={`${storagePercent * 0.88} 88`}
                        className="text-primary"
                      />
                    </svg>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p className="font-medium">
                  {usedStorage} GB / {totalStorage} GB utilisés
                </p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <div className="space-y-2 px-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-sidebar-foreground/70">Stockage</span>
                <span className="font-medium text-sidebar-foreground">
                  {usedStorage} GB / {totalStorage} GB
                </span>
              </div>
              <Progress value={storagePercent} className="h-2" />
              <p className="text-xs text-sidebar-foreground/60">
                {(totalStorage - usedStorage).toFixed(1)} GB libres
              </p>
            </div>
          )}

          {/* Utilisateur */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-3 w-full overflow-x-hidden cursor-pointer rounded-md p-1 hover:bg-sidebar-accent transition-colors">
                <Avatar className="shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>BM</AvatarFallback>
                </Avatar>

                {!isCollapsed && (
                  <div className="flex flex-col items-start min-w-0">
                    <span className="text-xs font-medium text-sidebar-foreground truncate w-full">
                      Berenis MASSAMBA
                    </span>
                    <span className="text-xs text-muted-foreground truncate w-full">
                      berenismassamba@gmail.com
                    </span>
                  </div>
                )}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side={isCollapsed ? "right" : "top"}
              align="start"
            >
              <DropdownMenuGroup>
                <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                <DropdownMenuItem>Profil</DropdownMenuItem>
                <DropdownMenuItem>Facturation</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Équipe</DropdownMenuItem>
                <DropdownMenuItem>Abonnement</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
