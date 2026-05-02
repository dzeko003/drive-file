"use client";
import DashboardLayout from "@/components/dashboard-layout";
import FileExplorer from "@/components/file-explorer";
import { useState } from "react";

export default function Home() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  return (
    <DashboardLayout>
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="mx-auto max-w-7xl">
          <FileExplorer onUploadClick={() => setIsUploadOpen(true)} />
        </div>
      </main>
    </DashboardLayout>
  );
}
