import { Link , useOutletContext  } from "react-router-dom";
import React, {useState , useEffect} from "react"
import {
  EyeIcon,PlusIcon,
  PencilSquareIcon,
  TrashIcon,
  EllipsisHorizontalIcon
} from "@heroicons/react/24/outline";

const staffList = [
    {
      id: 1,
      fullName: "John Doe",
      username: "john_doe",
      status: "active",
      role: "staff",
      dateJoined: "2026-01-15",
      posts: 12,
    },
    {
      id: 2,
      fullName: "Mary Jane",
      username: "mary_jane",
      status: "active",
      role: "official",
      dateJoined: "2026-02-10",
      posts: 5,
    },
    {
      id: 3,
      fullName: "James Mwangi",
      username: "james_m",
      status: "suspended",
      role: "staff",
      dateJoined: "2025-12-20",
      posts: 20,
    },
    {
      id: 4,
      fullName: "Sophia Brown",
      username: "sophia_b",
      status: "inactive",
      role: "official",
      dateJoined: "2026-01-05",
      posts: 0,
    },
    {
      id: 5,
      fullName: "Michael Smith",
      username: "michael_s",
      status: "active",
      role: "staff",
      dateJoined: "2026-03-01",
      posts: 8,
    },
    {
      id: 6,
      fullName: "Amina Hassan",
      username: "amina_h",
      status: "pending",
      role: "official",
      dateJoined: "2026-03-12",
      posts: 2,
    },
    {
      id: 7,
      fullName: "David Kimani",
      username: "david_k",
      status: "active",
      role: "staff",
      dateJoined: "2025-11-28",
      posts: 15,
    },
    {
      id: 8,
      fullName: "Grace Wanjiku",
      username: "grace_w",
      status: "suspended",
      role: "official",
      dateJoined: "2026-02-02",
      posts: 6,
    },
  ];
export default function StaffsAdmin(){
    const [confirmData, setConfirmData] = useState(null);
    const [openDropdownId, setOpenDropdownId] = useState(null);
    const [actionComand, setCctionComand] = useState(null);
    const [userOfConcern, setUserOfConcern] = useState(null);
    const { 
        // variables
            filter,
            searchQuery,
        // seters
            setFilter,
            setSearchQuery

    } = useOutletContext();
      const [staffs, setStaffs] = useState(staffList);
      
      const [loadingId, setLoadingId] = useState(null);
      
      
  
      const filteredStaffs = staffs.filter((staff) => {
          const matchesFilter =
              filter === "all" || staff.status === filter;
          
          const matchesSearch =
              (staff.fullName?.toLowerCase() || "").includes(searchQuery?.toLowerCase() || "") ||
              (staff.username?.toLowerCase() || "").includes(searchQuery?.toLowerCase() || "") ||
              (staff.role?.toLowerCase() || "").includes(searchQuery?.toLowerCase() || ""); 
          
          return matchesFilter && matchesSearch;
      });
  
      
  
  
      const handleAction = (actionData) => {
        setLoadingId(`${actionData.id}-${actionData.action}`);
      
        let newStatus;
        let newRole;

        if (actionData.action === 'upgrade' || 'downgrade'){
            if(actionData.action === 'upgrade' ){newRole='official'}
            else if (actionData.action === 'downgrade' ){newRole='staff'}
            setTimeout(() => {
                setStaffs(prev =>
                    prev.map(staff =>
                    staff.id === actionData.id
                    ? { ...staff, role: newRole }
                    : staff
                )
            );
        
            setLoadingId(null);
            }, 1000);
        }else{
            if (actionData.action === "suspend") {
                newStatus = "suspended";
            } else if (actionData.action === "unsuspend") {
            newStatus = "active";
            }else if (actionData.action === "deactivate") {
                newStatus = "inactive";
            }else if (actionData.action === "activate") {
                newStatus = "active";
            }else if (actionData.action === "unsuspend") {
                newStatus = "active";
            }else if (actionData.action === "unsuspend") {
                newStatus = "active";
            }

            setTimeout(() => {
            setStaffs(prev =>
                prev.map(staff =>
                staff.id === actionData.id
                    ? { ...staff, status: newStatus }
                    : staff
                )
            );
        
            setLoadingId(null);
            }, 1000);
        }
      
        
      };

      
    return(
        <>
            {confirmData && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                    <div className="bg-white p-6 rounded-lg">
                    <p >
                        Are you sure you want to {confirmData.action} this user?
                    </p>

                    <div className="flex gap-3 mt-4">
                        <button
                        onClick={() => {
                            handleAction(confirmData);
                            setConfirmData(null);
                        }}
                        className="px-4 py-2 bg-red-600 text-white rounded"
                        >
                            Yes
                        </button>

                        <button
                        onClick={() => setConfirmData(null)}
                        className="px-4 py-2 bg-gray-300 rounded"
                        >
                        Cancel
                        </button>
                    </div>
                    </div>
                </div>
            )}
            <div className="p-2 pb-[64px] md:p-4  w-[calc(100vw)] lg:w-[calc(100vw-240px)] space-y-4 overflow-x-hidden">
                
                <div className="hidden lg:flex lg:flex-row md:items-center md:justify-between gap-3 min-w-0">
                    <h1 className="text-lg md:text-2xl font-bold">Payouts</h1>

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
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm"
                        >
                            <option value="all">All</option>
                            <option value="active">Active</option>
                            <option value="suspended">Suspended</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    
                    </div>
                </div>
                {/* Scrollable row */}
                <div className="flex mt-16 lg:mt-0 overflow-x-auto  scrollbar-hide  gap-3 border border-[var(--border)]  rounded-lg">
                    <table className="min-w-[700px] w-full text-sm">
                        <thead className="bg-[var(--hover)] text-left">
                            <tr>
                                <th className="p-3">Full Name</th>
                                <th className="p-3">Usernamme</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Role</th>
                                <th className="p-3">Post</th>
                                <th className="p-3">Date</th>
                                <th className="p-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStaffs.map((staff) => (
                                <tr
                                    key={staff.id}
                                    className="border-t border-[var(--border)] hover:bg-[var(--hover)]"
                                >
                                    <td className="p-3 whitespace-nowrap">{staff.fullName}</td>
                                    <td className="p-3 whitespace-nowrap">{staff.username}</td>

                                    {/* Status */}
                                    <td className="p-3">
                                        <span
                                            className={`
                                            px-2 py-1 rounded-full text-xs whitespace-nowrap
                                            ${
                                                    staff.status === "active"
                                                    ? "bg-green-100 text-green-600"
                                                    : staff.status === "suspeded"
                                                    ? "bg-yellow-100 text-yellow-600"
                                                    : "bg-red-100 text-red-600"
                                                }
                                            `}
                                        >
                                            {staff.status}
                                        </span>
                                    </td>

                                    <td className="p-3 whitespace-nowrap">{staff.role}</td>
                                    <td className="p-3 whitespace-nowrap">{staff.posts}</td>
                                    <td className="p-3 whitespace-nowrap">{staff.dateJoined}</td>

                                    <td className="p-3 relative text-right">
                                        <button
                                            onClick={() =>
                                            setOpenDropdownId(openDropdownId === staff.id ? null : staff.id)
                                            }
                                            className={`
                                                "p-2 rounded hover:bg-[var(--background)] "
                                                ${
                                                    openDropdownId === staff.id && "bg-[var(--hover)]"
                                                }
                                            `}
                                        >
                                            <EllipsisHorizontalIcon className="w-5 h-5"/>
                                        </button>

                                        {openDropdownId === staff.id && (
                                            <div className="absolute right-9 top-0 mr- w-40 bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg z-50">

                                            <button
                                                onClick={() => {
                                                handleAction({
                                                    id: staff.id,
                                                    action:
                                                    staff.status === "suspended" ? "unsuspend" : "suspend",
                                                });
                                                setOpenDropdownId(null);
                                                }}
                                                className="block w-full text-left px-4 py-2 hover:bg-[var(--hover)]"
                                            >
                                                {staff.status === "suspended" ? "Unsuspend" : "Suspend"}
                                            </button>

                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}