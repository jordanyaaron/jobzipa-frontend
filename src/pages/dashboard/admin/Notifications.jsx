import React, { useState, useRef, useEffect } from "react";
import { 
  CheckBadgeIcon , PlusCircleIcon ,
  PencilSquareIcon , ArrowUpIcon ,
  ClockIcon , CheckCircleIcon ,
  XCircleIcon , UserIcon,
} from "@heroicons/react/24/outline";
import { notificationsData } from "@/data/notification";
import { formatNotificationTime } from "@/utils/time";
import { Link , useOutletContext , useNavigate } from "react-router-dom";


export default function NotificationsAdmin() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const {  
    // variables
    filter,
    searchQuery,
    // seters
    setFilter,
    setSearchQuery

  } = useOutletContext();
  // const {  } = useOutletContext();


  const unreadCount = notificationsData.filter((n) => !n.read).length;
  const handleClick = (n) => {
    navigate(`/super/notifications/${n.category}/${n.id}`);
  };
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

  const filteredNotificationData = notificationsData.filter((item) => {
    const matchesFilter =
    notificationCategoryFilter === "all" || item.category === notificationCategoryFilter;
  
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
              filteredNotificationData.map((n) => (
                <li
                  key={n.id}
                  onClick={()=>handleClick(n)}
                  className={`px-4 py-3 text-sm text-[var(--text)]  border-b border-[var(--border)] hover:bg-[var(--hover)] cursor-pointer ${
                    !n.read ? "font-bold" : ""
                  }`}
                > 
                  <div className="flex justify-start items-center gap-2">
                    <div
                      className="flex-1 flex  justify-start items-center gap-2"
                    >
                      {
                        n.type === 'request'
                        ? <span 
                            className="
                              flex  rounded-full justify-center p-3 bg-purple-200 text-purple-800
                            "
                          >
                              <ArrowUpIcon className="h-6 w-6" />
                          </span>
                        : n.type === 'pre_approval' 
                        ? <span 
                            className="
                              flex  rounded-full justify-center p-3 bg-green-200 text-green-900
                            "
                          >
                            <ClockIcon className="h-6 w-6" />
                          </span>
                        : n.type === 'final_approval' 
                        ? <span 
                            className="
                              flex  rounded-full justify-center p-3 bg-green-900 text-white
                            "
                          >
                            <CheckCircleIcon className="h-6 w-6" />
                          </span> 
                        : n.type === 'rejected' 
                        ? <span 
                            className="
                              flex  rounded-full justify-center p-3 bg-red-200 text-red-900
                            "
                          >
                            <XCircleIcon className="h-6 w-6" />
                          </span> 
                        : n.type === 'created' 
                        ? <span 
                            className="
                              flex  rounded-full justify-center p-3 bg-green-100 text-green-800
                            "
                          >
                            <PlusCircleIcon className="h-6 w-6" />
                          </span> 
                        : n.type === 'updated' 
                        ? <span 
                            className="
                              flex  rounded-full justify-center p-3 bg-blue-100 text-blue-800
                            "
                          >
                            <PencilSquareIcon className="h-6 w-6" />
                          </span> 
                        : n.type === 'completed' 
                        ? <span 
                            className="
                              flex  rounded-full justify-center p-3 bg-green-900 text-white
                            "
                          >
                            <CheckBadgeIcon className="h-6 w-6" />
                          </span> 
                        : <span 
                            className="
                              flex rounded-full justify-center items-center  p-3 bg-[var(--hover)] text-[var(--text)]
                            "
                          >
                            <UserIcon className="h-6 w-6" />
                          </span> 
                      }
                      <p 
                        className="
                          grid grid-cols-1 flex-1
                        "
                      >
                        <span className="justify-start col-span-1">{n.category}</span>
                        <span className="justify-start col-span-1">{n.message}</span>
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 w-[90px]">{formatNotificationTime(n.date)}</span>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
    </div>
  );
}