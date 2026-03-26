import JobzipaLogo from "../assets/logos/jobzipa.png";
import { Bars3Icon ,  FunnelIcon , MagnifyingGlassIcon ,} from "@heroicons/react/24/outline";
import React , { useState , useRef , useEffect } from 'react'
import { Link ,useLocation } from "react-router-dom";
 
export default function DashboardHeader({ 
  setSidebarOpen ,
  startDate = "",
  endDate = "",
  placementFilter = "all",

  onSetNotificationFilter, 
  onSearchNotification,

  setStartDate = () => {},
  setEndDate = () => {},
  setPlacementFilter = () => {},

  onReset = () => {},
}) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const location = useLocation()
  const [dateFilterOpen, setDateFilterOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dateFilterRef = useRef();
  const dropdownRef = useRef();
  const filterOptions = ["all", "staff", "post", "payout"];
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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dateFilterRef.current && !dateFilterRef.current.contains(e.target)) {
        setDateFilterOpen(false);
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
        {
          location.pathname === "/super/notifications" 
            ? <h1 className="text-lg  md:text-lg font-bold">Notifications</h1>
            : <Link to="/" className="flex items-center">
                <img src={JobzipaLogo} alt="Jobzipa" className="h-9" />
              </Link>
        }
        

        {/* Right actions */}
        <div className="flex items-center gap-3 relative">

          {/* revenue filters Button */}
          {
            location.pathname === "/super/revenue" && (
              <>
                  
                  {/* date filter */}
                  <div className="relative" ref={dateFilterRef}>
                    <button
                      onClick={() => setDateFilterOpen(!dateFilterOpen)}
                      className="p-2 rounded-lg hover:bg-[var(--hover)]"
                    >
                      <CalendarIcon className="h-6 w-6 text-[var(--text)]" />
                    </button>

                    {dateFilterOpen && (
                      <div className="absolute right-0 mt-2 p-3 w-50 bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg z-50">
                        <div className="flex flex-col gap-2">
                          <b className="w-15 text-[var(--text)]">From :</b>
                          <input 
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <b className="w-15 text-[var(--text)]">To :</b>
                          <input 
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm"
                          />
                        </div>
                        <button
                          onClick={() => {
                            onReset();       // reset filters
                            setDateFilterOpen(false);
                          }}
                          className="mt-2 text-sm px-3 text-white py-1 bg-red-700 rounded"
                        >
                          Reset
                        </button>
                      </div>
                    )}
                  </div> 

                  {/* placement filter */}
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => {
                        setDropdownOpen(!dropdownOpen);
                      }}
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
                              setPlacementFilter(option); 
                              setDropdownOpen(!dropdownOpen);
                            }}
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-[var(--hover)] capitalize"
                          >
                            {option
                              .split("_")               
                              .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
                              .join(" ")                 
                            }
                          </button>
                        ))}
                      </div>
                    )}
                  </div>  
              </>
            )
          }
          {
            location.pathname === "/super/notifications" && (
              <>
                    <button
                        onClick={() => setMobileSearchOpen(true)}
                        className="p-2 rounded-lg hover:bg-[var(--hover)]"
                    >
                        <MagnifyingGlassIcon className="h-6 w-6 text-[var(--text)]" />
                    </button>

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
                                  onSetNotificationFilter(option); // 👈 important
                                  setDropdownOpen(false);
                                }}
                                className="block w-full text-left px-4 py-2 text-sm hover:bg-[var(--hover)] capitalize"
                            >
                                {option.charAt(0).toUpperCase() + option.slice(1)}
                            </button>
                            ))}
                        </div>
                        )}
                    </div>
                </>
            )
          }

          {/* Sidebar toggle */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-[var(--hover)]"
          >
            <Bars3Icon className="h-6 w-6 text-[var(--text)]" />
          </button>
        </div>
      </div>

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
            onChange={(e) => onSearchNotification(e.target.value)}
            placeholder="Search jobs..."
            className="flex-1 px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--main-bg)] text-[var(--text)] focus:outline-none"
            autoFocus
          />
        </div>
      )}
    </header>
  );
}