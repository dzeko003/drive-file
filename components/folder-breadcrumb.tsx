"use client";
import React from "react";
import { Breadcrumb, BreadcrumbList } from "./ui/breadcrumb";
import { useFileStore } from "@/lib/file-store";

export default function FolderBreadCrumb() {
  const { currentPath, navigateToPath } = useFileStore();
  return (
    <Breadcrumb>
      <BreadcrumbList>{}</BreadcrumbList>
    </Breadcrumb>
  );
}
