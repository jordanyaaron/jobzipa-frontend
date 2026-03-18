import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  SunIcon,
  MoonIcon,
  MagnifyingGlassIcon,
  ArrowLeftIcon,
  Bars3Icon,
  PlusIcon,
  FunnelIcon
} from "@heroicons/react/24/outline";

import JobzipaLogo from "../../assets/logos/jobzipa.png";

const SuperJobsHeader = ({ setSidebarOpen }) => {
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
          {/* Mobile search */}
          <button
            onClick={() => setMobileSearchOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--hover)]"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-[var(--text)]" />
          </button>

          {/* Post Button with Plus Icon */}
          <Link
            to="/post"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700"
          >
            <PlusIcon className="h-5 w-5 text-white" />
            Post
          </Link>

          {/* filter toggle */}

          <button
            onClick={setSidebarOpen}
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--hover)]  text-[var(--text)]"
          >
            <FunnelIcon className="h-6 w-6   text-[var(--text)]" />
          </button>

          {/* Dark mode toggle */}
          
          <button
            onClick={setSidebarOpen}
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--hover)]  text-[var(--text)]"
          >
            <Bars3Icon className="h-6 w-6   text-[var(--text)]" />
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

              {/* Close button */}
              <button
                onClick={() => setMobileSearchOpen(false)}
                className="mr-3 p-2 rounded-lg hover:bg-[var(--hover)]"
              >
                <FunnelIcon className="h-6 w-6 text-[var(--text)]" />
              </button>
            </div>
        )}
    </header>
  );
};

export default SuperJobsHeader;