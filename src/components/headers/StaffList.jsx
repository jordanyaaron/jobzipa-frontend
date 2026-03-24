import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FunnelIcon,
  MagnifyingGlassIcon,
  ArrowLeftIcon,
  Bars3Icon,
  UserPlusIcon
} from "@heroicons/react/24/outline";
import JobzipaLogo from "../../assets/logos/jobzipa.png";

const filterOptions = ["all", "Super", "Admin", "Official", "Unofficial"];

const StaffListHeader = ({ setSidebarOpen , onFilterStaff , onSearchStaff }) => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed md:hidden top-0 left-0 w-[100vw] z-40 border-b border-[var(--border)] bg-[var(--background)]">

      {/* Top bar */}
      <div className="flex items-center justify-between px-4 h-16">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={JobzipaLogo} alt="Jobzipa" className="h-9" />
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-3 relative">

          {/* Search */}
          <button
            onClick={() => setMobileSearchOpen(true)}
            className="p-2 rounded-lg hover:bg-[var(--hover)]"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-[var(--text)]" />
          </button>

          {/* Post */}
          <Link
            to="/super/post"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700"
          >
            <UserPlusIcon className="h-5 w-5" />
            <span className="hidden sm:block">Invite</span>
          </Link>

          {/* Filter */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="p-2 rounded-lg hover:bg-[var(--hover)]"
            >
              <FunnelIcon className="h-6 w-6 text-[var(--text)]" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg z-50">
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                        onFilterStaff(option); // 👈 important
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-[var(--hover)] capitalize"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar toggle */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-[var(--hover)]"
          >
            <Bars3Icon className="h-6 w-6 text-[var(--text)]" />
          </button>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {mobileSearchOpen && (
        <div className="fixed top-0 left-0 w-full h-16 z-50 flex items-center px-4 bg-[var(--background)] border-b border-[var(--border)]">
          
          <button
            onClick={() => setMobileSearchOpen(false)}
            className="mr-3 p-2 rounded-lg hover:bg-[var(--hover)]"
          >
            <ArrowLeftIcon className="h-6 w-6 text-[var(--text)]" />
          </button>

          <input
            type="text"
            onChange={(e) => onSearchStaff(e.target.value)}
            placeholder="Search jobs..."
            className="flex-1 px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--main-bg)] text-[var(--text)] focus:outline-none"
            autoFocus
          />
        </div>
      )}
    </header>
  );
};

export default StaffListHeader;