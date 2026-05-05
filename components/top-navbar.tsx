"use client";

import {
  Bell,
  Grid3X3,
  HardDrive,
  List,
  MessageSquare,
  Plus,
  Search,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import ThemeToggle from "./theme-toggle";
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
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useFileStore } from "@/lib/file-store";
import { cn } from "@/lib/utils";

export default function TopNavbar() {
  const { viewMode, setViewMode, isSearching } = useFileStore();
  return (
    <header className="border-b border-sidebar-border p-3 flex items-center justify-between ">
      <SidebarTrigger />
      <div className="flex-1">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute top-1/2 -translate-y-1/2 left-2.5" />
          <Input placeholder="Search..." className="w-full pl-9 h-9" />
        </div>
      </div>

      <div className="flex items-center gap-2 ">
        <div className="bg-muted/500 p-1 border flex gap-2 rounded-lg items-center">
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "w-8 h-8 rounded-md",
                  viewMode === "grid" && "bg-background shadow-sm",
                )}
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Grod view</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "w-8 h-8 rounded-md",
                  viewMode === "list" && "bg-background shadow-sm",
                )}
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>List view</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <ThemeToggle />

        <Button className="rounded-xl bg-blue-600 text-primary">
          <Plus />
          <span className="hidden sm:inline">upload</span>
        </Button>

        <Button size="icon" variant="ghost" className="relative">
          <Bell className="w-4 h-4" />
          <span className="-top-0.5 -right-0.5 absolute bg-secondary w-4 h-4 rounded-full flex justify-center items-center ">
            3
          </span>
        </Button>

        <Button size="icon" variant="ghost" className="relative">
          <MessageSquare className="w-4 h-4" />
          <span className="-top-0.5 -right-0.5 absolute bg-secondary min-w-4 h-4 rounded-full flex justify-center items-center ">
            12
          </span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-4 w-full overflow-x-hidden">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-80">
            <DropdownMenuGroup>
              <DropdownMenuLabel>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-muted-foreground">
                    berenis MASSAMBA
                  </span>
                  <span className="text-xs text-muted-foreground">
                    berenismassamba@gmail.com
                  </span>
                </div>
              </DropdownMenuLabel>

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
      </div>

      <div></div>
    </header>
  );
}
