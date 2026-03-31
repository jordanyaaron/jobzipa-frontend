import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  SunIcon,
  MoonIcon,
  MagnifyingGlassIcon,
  ArrowLeftIcon,
  Bars3Icon,
  PlusIcon
} from "@heroicons/react/24/outline";

import JobzipaLogo from "../../assets/logos/jobzipa.png";

 export default function  StaffDashboardHeader  ({ darkMode, setDarkMode, toggleDrawer }) {
  
  
  const [search, setSearch] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 768 && mobileSearchOpen) setMobileSearchOpen(false);
  }, [windowWidth, mobileSearchOpen]);

  return (
    <header
      className="fixed lg:hidden  top-0 left-0 w-full z-40 border-b  border-[var(--border)] bg-[var(--header-bg)]"
    >
      <div 
            className={`flex items-center justify-between px-4 md:px-6 h-16 transition-all duration-200 ${
                mobileSearchOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
      >
        {/* Left */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center">
            <img src={JobzipaLogo} alt="Jobzipa" className="h-9 md:h-10" />
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
            <button
                onClick={toggleDrawer}
                className="lg:hidden p-2 rounded-lg hover:bg-[var(--hover)]  text-[var(--text)]"
            >
                <Bars3Icon className="h-6 w-6   text-[var(--text)]" />
            </button>
        </div>
      </div>
    </header>
  );
};

