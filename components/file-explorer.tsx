import React from "react";
import FileGrid from "@/components/file-grid";
import FileList from "@/components/file-list";
import FolderBreadCrumb from "@/components/folder-breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { useFileStore } from "@/lib/file-store";
import {
  FilePlus,
  Folder,
  FolderOpen,
  FolderPlus,
  Icon,
  Plus,
  Star,
} from "lucide-react";

interface FileExplorerProps {
  onUploadClick: () => void;
}

export default function FileExplorer({ onUploadClick }: FileExplorerProps) {
  const { getCurrentFiles, viewMode } = useFileStore();
  const files = getCurrentFiles();
  return (
    <div className="flex flex-col gap-6">
      {/* Header with Breadcrumb */}
      <div className="flex items-center justify-between">
        <FolderBreadCrumb />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
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

      {files.length > 0 ? (
        viewMode === "grid" ? (
          <FileGrid files={files} />
        ) : (
          <FileList files={files} />
        )
      ) : (
        <Empty className="min-h-[400px]">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FolderOpen className="h-5 w-5" />
            </EmptyMedia>
            <EmptyTitle>This folder is empty</EmptyTitle>
            <EmptyDescription>
              Upload files or create a new folder to get started
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button onClick={onUploadClick} className="gap-2 rounded-xl">
              <Plus className="h-4 w-4" />
              Upload files
            </Button>
          </EmptyContent>
        </Empty>
      )}
    </div>
  );
}
