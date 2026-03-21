import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  SunIcon,
  MoonIcon,
  MagnifyingGlassIcon,
  ArrowLeftIcon,
  Bars3Icon
} from "@heroicons/react/24/outline";

import JobzipaLogo from "../../assets/logos/jobzipa.png";

const PublicHeader = ({ darkMode, setDarkMode, toggleDrawer }) => {
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
    <header className="fixed top-0 left-0 w-full z-40 border-b border-[var(--border)]  bg-[var(--header-bg)]">
      <div
            className={`flex items-center justify-between px-4 md:px-6 h-16 transition-all duration-200 ${
                mobileSearchOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
        >
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDrawer}
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--hover)]  text-[var(--text)]"
          >
            <Bars3Icon className="h-6 w-6  text-[var(--text)]" />
          </button>

          <Link to="/" className="flex items-center">
            <img src={JobzipaLogo} alt="Jobzipa" className="h-9 md:h-10" />
          </Link>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 opacity-60" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none text-[var(--text)] placeholder:text-[var(--placeholder)]"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Mobile search */}
          <button
            onClick={() => setMobileSearchOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--hover)]"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-[var(--text)]" />
          </button>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-[var(--hover)]"
          >
            {darkMode ? <SunIcon className="h-6 w-6 text-yellow-400" /> : <MoonIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {mobileSearchOpen && (
        <div
            className="
            fixed top-0 left-0 w-full h-16
            z-50
            flex items-center px-4
            bg-[var(--header-bg)]
            border-b border-[var(--border)]
            transition-all duration-300
            "
        >
            {/* Close button */}
            <button
            onClick={() => setMobileSearchOpen(false)}
                className="mr-3 p-2 rounded-lg hover:bg-[var(--hover)]"
            >
            <ArrowLeftIcon className="h-6 w-6 text-[var(--text)]" />
            </button>

            {/* Search input */}
            <input
                type="text"
                placeholder="Search jobs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                    flex-1 px-4 py-2
                    rounded-lg
                    border border-[var(--border)]
                    bg-[var(--main-bg)]
                    text-[var(--text)]
                    placeholder:text-[var(--placeholder)]
                    focus:outline-none
                "
                autoFocus
            />
            </div>
        )}
    </header>
  );
};

export default PublicHeader;