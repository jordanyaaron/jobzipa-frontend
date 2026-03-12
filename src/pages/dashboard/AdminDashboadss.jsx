import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AdminDashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[var(--background)] text-[var(--text)]">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Divider line (desktop only) */}
      <div 
        className="
          hidden md:block w-px 
          bg-[var(--border)]
        " 
      />

      {/* Main container */}
      <div className="flex flex-col flex-1">

        {/* Header (mobile & tablet) */}
        <Header setSidebarOpen={setSidebarOpen} />

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto   bg-[var(--background)]">
          {children}
        </main>

      </div>
    </div>
  );
}