import { useState } from "react";
import { Outlet } from "react-router-dom";
import PublicSidebar from "../components/sidebars/PublicSidebar";
import StaffSidebar from "../components/sidebars/StaffSidebar";
import PublicHeader from "../components/headers/PublicHeader";
import StaffHeader from "../components/headers/StaffHeader";

const HomeLayout = ({ user }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle drawer
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  // Determine if user is staff/admin/superstaff
  const isStaff =
    user?.role === "STAFF" ||
    user?.role === "SUPERSTAFF" ||
    user?.role === "ADMIN" ||
    user?.is_superuser;

  return (
    <div className={`min-h-screen flex bg-(--main-bg) text-(--text) ${darkMode ? "dark" : ""}`}>
      
      {/* Sidebar */}
      <aside
        className={`hidden lg:flex shrink-0 w-64 border-r border-(--border) bg-(--sidebar-bg) transition-transform duration-300`}
      >
        {isStaff ? <StaffSidebar /> : <PublicSidebar />}
      </aside>

      {/* Drawer for mobile */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 lg:hidden transition-opacity ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      ></div>

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-(--sidebar-bg) border-r border-(--border) lg:hidden transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {isStaff ? <StaffSidebar toggleDrawer={toggleDrawer} /> : <PublicSidebar toggleDrawer={toggleDrawer} />}
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        {isStaff ? (
          <StaffHeader darkMode={darkMode} setDarkMode={setDarkMode} toggleDrawer={toggleDrawer} />
        ) : (
          <PublicHeader darkMode={darkMode} setDarkMode={setDarkMode} toggleDrawer={toggleDrawer} />
        )}

        {/* Outlet for pages */}
        <main className="pt-16 px-4 md:px-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;