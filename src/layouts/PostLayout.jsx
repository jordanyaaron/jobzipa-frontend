import React from "react";
import { Outlet } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import JobzipaLogo from '../assets/logos/jobzipa.png';
import DeviceSize from "../components/DeviceSize";
// import "../css/Post.css";
// import "../css/QuillEditor.css";
// import "../css/Cropper.css";
import "../css/DeviceSize.css"; // CSS file
import Footer from "../components/Foote";

const PostLayout = ({ darkMode, setDarkMode }) => (
    <div className="min-h-screen  bg-gray-100 dark:bg-gray-900 transition-colors  transition-colors duration-300">

    {/* Header */}
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-16">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={JobzipaLogo} alt="Logo" className="h-14 md:h-16" />
        </div>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg text-gray-800 dark:text-gray-200 hover:text-green-500 transition"
        >
          {darkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-400" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-900 dark:text-gray-100" />
          )}
        </button>

      </div>
    </header>

    {/* Content */}
    <div className="flex-1 pt-[64px] overflow-y-auto  scrollbar-none">
      <div className="w-full flex justify-center">
        <main className="w-750px min-h-[calc(100vh-80px)]
          bg-white dark:bg-gray-800 relative scrollbar-none
          mb-[4px] mt-[3px] p-[30px] pt-[13px] 
                 overflow-y-auto text-left 
                 w-full sm:w-full md:w-[720px] lg:w-[720px]
          ">
          <Outlet />
        </main>
      </div>

      {/* Optional DeviceSize Component */}
      <DeviceSize />

      {/* Footer */}
      
      <footer className="
        bg-white dark:bg-gray-800
        p-5 pt-4.5
        -mt-[2px]
        -mb-5
        h-[60px]
        flex flex-col items-center justify-center
        text-center
      ">

        <p className="text-gray-500 dark:text-gray-400 text-xs">
          <a href="#" className="no-underline text-[#3E907D] ml-1 hover:underline">About Us</a> |
          <a href="#" className="no-underline text-[#3E907D] ml-1 hover:underline">Contact Us</a> |
          <a href="#" className="no-underline text-[#3E907D] ml-1 hover:underline">Terms & Conditions</a> |
          <a href="#" className="no-underline text-[#3E907D] ml-1 hover:underline">Privacy & Cookies Policies</a>
        </p>

        <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
          JobZipa Inc &copy; 2025. All Rights Reserved
        </p>

      </footer>
    </div>
    
  </div>
)

export default PostLayout;