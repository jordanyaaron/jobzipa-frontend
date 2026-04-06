import React,{ useState , useEffect } from "react";
import { Outlet  } from "react-router-dom";
import "../css/DeviceSize.css";

// headers
import StaffDashboardHeader from "../components/headers/StaffDashboardHeader";
import StaffDashboardSidebar from "../components/sidebars/StaffDashboardSidebar";
import "../css/DeviceSize.css"; // CSS file
import Footer from "../components/Foote";




export default function StaffDashboardLayout({  darkMode, setDarkMode  }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleDrawer = () => setSidebarOpen(!sidebarOpen);
  const [viewAllPosts, setViewAllPosts] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState(null)
  


  const handleReset = () => {
    setStartDate("");
    setEndDate("");
    setPlacementFilter("all");
  };

  

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
      <StaffDashboardSidebar toggleDrawer={toggleDrawer}  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}  />

      {/* Divider line (desktop only) */}
      <div className="hidden md:block w-px bg-[var(--border)]" />

      {/* Main container */}
      <div className="flex flex-col flex-1">

        {/* Header (mobile & tablet) */}
      <StaffDashboardHeader toggleDrawer={toggleDrawer} setFilter={setFilter} setViewAllPosts={setViewAllPosts} setSearchQuery={setSearchQuery}   />

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

            // theme mode 
                darkMode , setDarkMode ,
                setSidebarOpen, 
            // variables
                viewAllPosts,
                filter,
                searchQuery,
            // seters
                setViewAllPosts,
                setFilter,
                setSearchQuery

          }} />
        </main>

      </div>
    </div>
  );
}