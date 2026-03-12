import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SunIcon , MoonIcon , MagnifyingGlassIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import JobzipaLogo from "../assets/logos/jobzipa.png";
// import { ReactComponent as SearchIcon } from "../assets/icons/search.svg"; 
// import { ReactComponent as BackIcon } from "../assets/icons/back.svg";

const Header = ({ darkMode, setDarkMode }) => {
  const [search, setSearch] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Track window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Automatically close mobile search if width > md
  useEffect(() => {
    if (windowWidth >= 768 && mobileSearchOpen) {
      setMobileSearchOpen(false);
    }
  }, [windowWidth, mobileSearchOpen]);

  return (
    <header className="fixed top-0 left-0 w-full
     bg-white dark:bg-gray-900  z-50
     border-b border-gray-200 dark:border-gray-800 
     ">
      <div className="w-full mx-auto flex items-center justify-between px-10 md:px-6 h-16 relative">
      
        {/* Left: Logo */}
        <div className="flex ml-0 items-center flex-shrink-0">
          <img src={JobzipaLogo} alt="Logo" className="h-10 md:h-12" />
        </div>

        {/* Center: Desktop Search */}
        <div className="flex-1 mx-4 hidden md:flex items-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search job here..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          />
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          {/* Mobile Search Button */}
          <button
            onClick={() => setMobileSearchOpen(true)}
            className="md:hidden p-2 rounded-lg text-gray-800 dark:text-gray-200 hover:text-green-500 transition"
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>

          {/* Post Button */}
          <Link to="/post"  className="px-4 py-2 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition">
            Post
          </Link>
          {/* Dark Mode Toggle */}
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

        {/* Mobile Search Overlay */}
        <div
          className={`absolute top-0 left-0 w-full h-16 
            px-4 flex items-center z-50 transform transition-all
             bg-gray-50 dark:bg-gray-900 
            duration-300 ease-in-out
            ${mobileSearchOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
          `}
        >
          {mobileSearchOpen && (
            <>
              {/* Back Button */}
              <button
                onClick={() => setMobileSearchOpen(false)}
                className="mr-4 p-2 rounded-lg text-gray-800 dark:text-gray-200 hover:text-green-500 transition"
              >
                <ArrowLeftIcon className="h-6 w-6" />
              </button>

              {/* Full Width Input */}
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                autoFocus
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;



// import React from "react";
// import JobzipaLogo from '../assets/logos/jobzipa.png';
// import searchIcon from '../assets/icons/search.png';
// import closeIcon from '../assets/icons/close.png';
// import { Link } from 'react-router-dom';



// import storybookLogo from '../assets/logos/jobzipa.png';
// function Header() {
//     return(
//         <>
//           <header>
//              <div className='app-logo'>
//                   <img src={JobzipaLogo} alt="Storybook-logo" />
//               </div>
//               <div className='main-search-box'>
//                 <span><img src={searchIcon} alt="" srcset="" /></span>
//                 <input type="search" name="" id="" placeholder='search job here . . .'/>
//                 <button>
//                   <img src={closeIcon} alt="" />
//                 </button>
//               </div>
              
//           </header>
//         </>
//     );
// }

// export default Header

