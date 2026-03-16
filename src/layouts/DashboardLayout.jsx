import React,{ useState , useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import JobzipaLogo from '../assets/logos/jobzipa.png';
import DeviceSize from "../components/DeviceSize";
import "../css/DeviceSize.css";// Importing Components
import Header from "../components/Header";
import DashboardHeader from "../components/DashboardHeader";

import SideBar from "../components/SideBar";
import SuperSideBar from "../components/SuperSidebar";
// import "../css/Post.css";
// import "../css/QuillEditor.css";
// import "../css/Cropper.css";
import "../css/DeviceSize.css"; // CSS file
import Footer from "../components/Foote";




export default function AdminDashboardLayout({  darkMode, setDarkMode  }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleDrawer = () => setSidebarOpen(!sidebarOpen);
  useEffect(() => {
    const handleResize = () => {

      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }

    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (
    <div className="flex h-screen bg-[var(--background)] text-[var(--text)]">

      {/* Sidebar */}
      <SuperSideBar toggleDrawer={toggleDrawer} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Divider line (desktop only) */}
      <div className="hidden md:block w-px bg-[var(--border)]" />

      {/* Main container */}
      <div className="flex flex-col flex-1">

        {/* Header (mobile & tablet) */}
        <DashboardHeader setSidebarOpen={setSidebarOpen} />

        {/* Main content */}
        <main 
          className="
            flex-1 p-0 pt-0 
            md:p-0 md:pt-0 
            overflow-y-auto 
            bg-(--background) 
          "
        >
          
          <Outlet />
        </main>

      </div>
    </div>
  );
}