import React,{ useState , useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import JobzipaLogo from '../assets/logos/jobzipa.png';
import DeviceSize from "../components/DeviceSize";
import "../css/DeviceSize.css";// Importing Components

// headers
import DashboardHeader from "../components/DashboardHeader";
import SuperJobsHeader from "../components/headers/SuperJobsHeader";
import StaffListHeader from "../components/headers/StaffList";
import SuperSideBar from "../components/SuperSidebar";
// import "../css/Post.css";
// import "../css/QuillEditor.css";
// import "../css/Cropper.css";
import "../css/DeviceSize.css"; // CSS file
import Footer from "../components/Foote";




export default function AdminDashboardLayout({  darkMode, setDarkMode  }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleDrawer = () => setSidebarOpen(!sidebarOpen);
  const location = useLocation();
  const [jobFilter, setJobFilter] = useState("all");
  const [staffFilter, setStaffFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [handlePostJobFromHeader, setHandlePostJobFromHeader] = useState(false);
  useEffect(() => {
    const handleResize = () => {

      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }

    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  const renderHeader = () => {
    if (location.pathname.startsWith("/super/jobs")) {
      return <SuperJobsHeader setSidebarOpen={setSidebarOpen} onFilter={setJobFilter} onSearch={setSearchQuery}/>;
    }
    if (location.pathname.startsWith("/super/staff")) {
      return <StaffListHeader setSidebarOpen={setSidebarOpen} onFilterStaff={setStaffFilter} onSearchStaff={setSearchQuery}/>;
    }
    
    // default
    return <DashboardHeader setSidebarOpen={setSidebarOpen} />;
  };

  return (
    <div className="flex h-screen bg-[var(--background)] text-[var(--text)]">

      {/* Sidebar */}
      <SuperSideBar toggleDrawer={toggleDrawer} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Divider line (desktop only) */}
      <div className="hidden md:block w-px bg-[var(--border)]" />

      {/* Main container */}
      <div className="flex flex-col flex-1">

        {/* Header (mobile & tablet) */}
      {renderHeader()}

        {/* Main content */}
        <main 
          className="
            flex-1 p-0 pt-0 
            md:p-0 md:pt-0 
            overflow-y-auto 
            overflow-x-hidden
            bg-(--background) 
            min-w-0
          "
        >
          
          <Outlet context={{ 
            setSidebarOpen, 
            jobFilter, setJobFilter, 
            staffFilter , setStaffFilter,
            searchQuery, setSearchQuery, 
            handlePostJobFromHeader, setHandlePostJobFromHeader 
          }} />
        </main>

      </div>
    </div>
  );
}