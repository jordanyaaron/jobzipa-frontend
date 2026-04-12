import { useState } from "react";
import { Outlet } from "react-router-dom";
import PublicSidebar from "../components/sidebars/PublicSidebar";
import StaffSidebar from "../components/sidebars/StaffSidebar";
import PublicHeader from "../components/headers/PublicHeader";
import StaffHeader from "../components/headers/StaffHeader";

const HomeLayout = ({ darkMode, setDarkMode}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const isStaff =
    user?.is_staff ||
    user?.is_admin ||
    user?.is_superstaff ||
    user?.is_superuser;


  return (
    <div className="flex h-screen overflow-hidden bg-[var(--main-bg)]">

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex shrink-0 w-64 border-r border-[var(--border)] bg-[var(--sidebar-bg)]">
        {isStaff ? <StaffSidebar toggleDrawer={!toggleDrawer} /> : <PublicSidebar toggleDrawer={!toggleDrawer} />}
      </aside>

      {/* Overlay (mobile) */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 lg:hidden transition-opacity ${
          drawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed flex top-0 left-0 z-50 h-full w-64 bg-[var(--sidebar-bg)] border-r border-[var(--border)] lg:hidden transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {isStaff ? (
          <StaffSidebar  toggleDrawer={toggleDrawer} />
        ) : (
          <PublicSidebar toggleDrawer={toggleDrawer} />
        )}
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        {isStaff ? (
          <StaffHeader
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            toggleDrawer={toggleDrawer}
          />
        ) : (
          <PublicHeader
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            toggleDrawer={toggleDrawer}
          />
        )}

        {/* Pages */}
        <main className="pt-16 bg-[var(--main-bg)] px-4 md:px-6 flex-1 overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default HomeLayout;