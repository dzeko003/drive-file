"use client";
import DashboardLayout from "@/components/dashboard-layout";
import FileGrid from "@/components/file-grid";
import FolderBreadCrumb from "@/components/folder-breadcrumb";
import ThemeToggle from "@/components/theme-toggle";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useFileStore } from "@/lib/file-store";
import { FilePlus, Folder, FolderPlus, Plus, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { getCurrentFiles, viewMode } = useFileStore();
  const files = getCurrentFiles();
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        {/* Header with Breadcrumb */}
        <div className="flex items-center justify-between">
          <FolderBreadCrumb />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" size="sm" className="gap-2 rounded-lg">
                <Plus className="h-4 w-4" />
                New
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => null} className="gap-2">
                <FolderPlus className="h-4 w-4" />
                New Folder
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => null} className="gap-2">
                <FilePlus className="h-4 w-4" />
                New File
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <FileGrid files={files} />
      </div>
    </DashboardLayout>
  );
}
