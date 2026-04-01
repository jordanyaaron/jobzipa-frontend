import { useState, useEffect, useRef } from "react";
import { Link ,useLocation } from "react-router-dom";
import {
  SunIcon,
  MoonIcon,
  MagnifyingGlassIcon,
  ArrowLeftIcon,
  AdjustmentsHorizontalIcon ,
  Bars3Icon,
  PlusIcon ,
  FunnelIcon
} from "@heroicons/react/24/outline";

import JobzipaLogo from "../../assets/logos/jobzipa.png";

 export default function  StaffDashboardHeader  ( 
    {
        toggleDrawer ,
        setFilter,
        setViewAllPosts,
        setSearchQuery
    }
) {
    const location = useLocation();
    const path = location.pathname;
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownPosterOpen, setDropdownPosterOpen] = useState(false);
    const dropdownRef = useRef();
    const dropdownPosterRef = useRef();

    // Options
    const filterOptions = ["all", "Super", "Admin", "Official", "Unofficial"];
  
    // UseEffects Hooks
    // 1. Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setDropdownOpen(false);
        }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // 2. Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
        if (dropdownPosterRef.current && !dropdownPosterRef.current.contains(e.target)) {
            setDropdownPosterOpen(false);
        }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


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
                    <button
                        onClick={toggleDrawer}
                        className="lg:hidden p-2 rounded-lg hover:bg-[var(--hover)]  text-[var(--text)]"
                    >
                        <Bars3Icon className="h-6 w-6   text-[var(--text)]" />
                    </button>
                    {
                        path.startsWith("/admin/jobs") || path.startsWith("/staff/jobs")  
                        ?   <h1 className="text-[var(--text)]">Jobs</h1>
                        :   <Link to="/" className="flex items-center">
                                <img src={JobzipaLogo} alt="Jobzipa" className="h-9 md:h-10" />
                            </Link>
                    }
                            
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                    {
                        path.startsWith("/admin/jobs") || path.startsWith("/staff/jobs")
                        ?   <button
                                onClick={() => setMobileSearchOpen(true)}
                                className="lg:hidden p-2 rounded-lg hover:bg-[var(--hover)]  text-[var(--text)]"
                            >
                                <MagnifyingGlassIcon className="h-6 w-6   text-[var(--text)]" />
                            </button>
                        : ""
                    }
                   

                    {
                        path.startsWith("/admin/jobs") || path.startsWith("/staff/jobs")
                        ?   <div className="relative" ref={dropdownPosterRef}>
                                <button
                                    onClick={() => {
                                        setDropdownPosterOpen(!dropdownPosterOpen)
                                    }}
                                    className="p-2 rounded-lg hover:bg-[var(--hover)]"
                                >
                                    <AdjustmentsHorizontalIcon className="h-6 w-6 text-[var(--text)]" />
                                </button>

                                {dropdownPosterOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg z-50">
                                        
                                        <button
                                            
                                            onClick={() => {
                                                setViewAllPosts(true);
                                                setDropdownPosterOpen(false);
                                            }}
                                            className="block w-full text-left px-4 py-2 text-sm hover:bg-[var(--hover)] capitalize"
                                        >
                                            All Post
                                        </button>
                                        <button
                                            
                                            onClick={() => {
                                                setViewAllPosts(false); 
                                                setDropdownPosterOpen(false);
                                            }}
                                            className="block w-full text-left px-4 py-2 text-sm hover:bg-[var(--hover)] capitalize"
                                        >
                                            My Posts
                                        </button>
                                    </div>
                                )}
                            </div>
                        : ""
                    }

                    {
                        path.startsWith("/admin/jobs") || path.startsWith("/staff/jobs")
                        ?   <div className="relative" ref={dropdownRef}>
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
                                            setFilter(option); // 👈 important
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
                        :   ""
                    }
                    
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
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search jobs..."
                    className="flex-1 px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--main-bg)] text-[var(--text)] focus:outline-none"
                    autoFocus
                />
                </div>
            )}
        </header>
    );
};

