import React, { useState, useRef, useEffect } from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { Link , useOutletContext } from "react-router-dom";


// Dummy notifications
const notifications = [
  {
    id: 1,
    type: "staff",
    message: "You have been invited to join the team",
    read: false,
    date: "2026-03-25",
  },
  {
    id: 2,
    type: "staff",
    message: "Registration completed successfully",
    read: false,
    date: "2026-03-24",
  },
  {
    id: 3,
    type: "payout",
    message: "Your payout request has been approved",
    read: true,
    date: "2026-03-23",
  },
  {
    id: 4,
    type: "post",
    message: "New post published",
    read: false,
    date: "2026-03-22",
  },
];

export default function NotificationSuper() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const {  setNotificationFilter, notificationCategoryFilter , searchQuery, setSearchQuery } = useOutletContext();
  // const {  } = useOutletContext();


  const unreadCount = notifications.filter((n) => !n.read).length;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredNotificationData = notifications.filter((item) => {
    const matchesFilter =
    notificationCategoryFilter === "all" || item.type === notificationCategoryFilter;
  
    const matchesSearch =
      (item.message?.toLowerCase() || "").includes(searchQuery?.toLowerCase() || "");
  
    return matchesFilter && matchesSearch;
  });

  return (
    <div className=" p-0 lg:p-4 w-[calc(100vw)] lg:w-[calc(100vw-240px)] space-y-4 overflow-x-hidden">
      <div className="hidden lg:flex lg:flex-row md:items-center md:justify-between gap-3 min-w-0">
        <h1 className="text-lg md:text-2xl font-bold">Notifications</h1>

        <div className="flex gap-2 w-full md:w-auto min-w-0">
          {/* Search */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search jobs..."
            className="
              w-full md:w-[250px]
              px-3 py-2 rounded-lg border
              border-[var(--border)]
              bg-[var(--background)]
              text-sm
            "
          />

          {/* Filter */}
          <select
            value={notificationCategoryFilter}
            onChange={(e) => setNotificationFilter(e.target.value)}
            className="px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm"
          >
            <option value="all">All</option>
            <option value="staff">Staff</option>
            <option value="payout">Payout</option>
            <option value="post">Post</option>
          </select>
        </div>
      </div>
      {/* Dropdown */}
        <div 
            className="
              flex mt-16 lg:mt-0 
              overflow-x-hihden
              text-left items-center  justify-center
              scrollbar-hide  gap-3 
              lg:border border-[var(--border)]  rounded-lg
            "
         >
          
          <ul className="mx-0 w-full lg:w-[700px] w-full text-sm" >
            {filteredNotificationData.length === 0 ? (
              <li className="px-4  py-3 text-sm text-gray-500">No notifications</li>
            ) : (
              notifications.map((n) => (
                <li
                  key={n.id}
                  className={`px-4 py-3 text-sm text-[var(--text)]  border-b border-[var(--border)] hover:bg-[var(--hover)] cursor-pointer ${
                    !n.read ? "font-bold" : ""
                  }`}
                > 
                  <div className="flex justify-start items-center gap-2">
                    <span className="justify-start flex-1">{n.message}</span>
                    <span className="text-xs text-gray-400 w-[100px]">{n.date}</span>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
    </div>
  );
}