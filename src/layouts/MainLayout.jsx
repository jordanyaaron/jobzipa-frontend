import React from "react";
import { Outlet } from "react-router-dom";
import DeviceSize from "../components/DeviceSize";
import "../css/DeviceSize.css";// Importing Components
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {
    HomeIcon,
    BriefcaseIcon,
    UsersIcon,
    BellIcon,
    BookmarkIcon,
    QuestionMarkCircleIcon,
  } from "@heroicons/react/24/outline";
// import Footer from "../components/Footer";
const MianLayout = ({ darkMode, setDarkMode }) => (
 <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">

  <Header  darkMode={darkMode} setDarkMode={setDarkMode} />

  <div className="flex flex-1 pt-16 md:pt-0">

    <SideBar />

    <main className="flex-1 p-6 border-l bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 p-4" >
      <Outlet />
    </main>

    <aside className="hidden xl:flex xl:flex-col w-100
      bg-gray-50 dark:bg-gray-900
      border-l border-gray-200 dark:border-gray-800 p-4">
    </aside>

  </div>
</div>
);

export default MianLayout;