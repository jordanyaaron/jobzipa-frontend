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

// const DashboardLayout = ({ darkMode, setDarkMode }) => (
//     <div className="min-h-screen  bg-gray-100 dark:bg-gray-900 transition-colors  transition-colors duration-300">

//     <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-16">
        
//         <div className="flex items-center">
//           <img src={JobzipaLogo} alt="Logo" className="h-14 md:h-16" />
//         </div>

//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="p-2 rounded-lg text-gray-800 dark:text-gray-200 hover:text-green-500 transition"
//         >
//           {darkMode ? (
//             <SunIcon className="h-6 w-6 text-yellow-400" />
//           ) : (
//             <MoonIcon className="h-6 w-6 text-gray-900 dark:text-gray-100" />
//           )}
//         </button>

//       </div>
//     </header>

//     <div className="flex-1 pt-[64px] overflow-y-auto  scrollbar-none">
//          <div className="flex flex-1 pt-16 md:pt-0">

//             <SideBar />

//             <main className="flex-1 p-6 border-l bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4" >
//                 <Outlet />
//             </main>

//         </div>

//       <DeviceSize />

      
      
//     </div>
    
//   </div>
// )

  // export default DashboardLayout;


export default function AdminDashboardLayout({  darkMode, setDarkMode  }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      <SuperSideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

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