"use client";
import React from "react";
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import TopNavbar from "./top-navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main>
          <TopNavbar />
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
