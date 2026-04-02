import { Link , useOutletContext  } from "react-router-dom";
import React, {useState} from "react"
import {
  EyeIcon,PlusIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export default function PayoutsAdmin(){
    const { 
        // theme mode 
            darkMode , setDarkMode ,
            setSidebarOpen, 
        // variables
            filter,
            searchQuery,
        // seters
            setFilter,
            setSearchQuery

    } = useOutletContext();
    const payoutsList = [
        {
          id: 1,
          username: "john_doe",
          fullName: "John Doe",
          amount: 150000,
          status: "pending",
          reference: "TXN12345",
          date: "2026-03-20",
        },
        {
          id: 2,
          username: "mary_jane",
          fullName: "Mary Jane",
          amount: 85000,
          status: "pending",
          reference: "TXN12346",
          date: "2026-03-21",
        }
      ];

      const [payouts, setPayouts] = useState(payoutsList);
      const [loadingId, setLoadingId] = useState(null);
      
      
  
      const filteredPayouts = payouts.filter((payout) => {
          const matchesFilter =
              filter === "all" || payout.status === filter;
          
          const matchesSearch =
              (payout.fullName?.toLowerCase() || "").includes(searchQuery?.toLowerCase() || "") ||
              (payout.username?.toLowerCase() || "").includes(searchQuery?.toLowerCase() || "");
          
          return matchesFilter && matchesSearch;
      });
  
      const payoutsToDisplay = filteredPayouts
  
  
      const updateStatus = (id, status) => {
          setLoadingId(id);
          
          setTimeout(() => {
            setPayouts(prev =>
              prev.map(payout =>
                payout.id === id ? { ...payout, status } : payout
              )
              );
          
              setLoadingId(null);
          }, 1000); // ⏱ 1 second delay
          };
    return(
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
                        <option value="approved">Approved</option>
                        <option value="pending">Pending</option>
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
                                <th className="p-3">Amount</th>
                                <th className="p-3">Date</th>
                                <th className="p-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payoutsToDisplay.map((payout) => (
                                <tr
                                    key={payout.id}
                                    className="border-t border-[var(--border)] hover:bg-[var(--hover)]"
                                >
                                    <td className="p-3 whitespace-nowrap">{payout.fullName}</td>
                                    <td className="p-3 whitespace-nowrap">{payout.username}</td>

                                    {/* Status */}
                                    <td className="p-3">
                                    <span
                                        className={`
                                        px-2 py-1 rounded-full text-xs whitespace-nowrap
                                        ${
                                                payout.status === "approved"
                                                ? "bg-green-100 text-green-600"
                                                : payout.status === "pending"
                                                ? "bg-yellow-100 text-yellow-600"
                                                : ""
                                            }
                                        `}
                                    >
                                        {payout.status}
                                    </span>
                                    </td>

                                    <td className="p-3 whitespace-nowrap">{payout.amount}</td>
                                    <td className="p-3 whitespace-nowrap">{payout.date}</td>

                                    {/* Actions */}
                                    <td className="p-3">
                                    <div className="flex justify-start gap-2 whitespace-nowrap">
                                        {
                                            payout.status === 'pending' && (
                                                <button
                                                    onClick={() => updateStatus(payout.id, "pending")}
                                                    disabled={loadingId === payout.id}
                                                    className="py-2 px-3 rounded-lg text-white bg-blue-600 flex items-center gap-2"
                                                >
                                                    {loadingId === payout.id ? (
                                                        <>
                                                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                                            "Approving..."
                                                        </>
                                                        
                                                    )  : (
                                                        "Approve"
                                                    )}
                                                </button>
                                            )
                                            }
                                        {
                                            payout.status === 'approved'
                                            && (   
                                                <button
                                                    disabled={loadingId === payout.id}
                                                    onClick={() => updateStatus(payout.id, "closed")}
                                                    className="
                                                        py-2 px-3 rounded-lg cursor-pointer
                                                        text-white bg-red-600
                                                        flex items-center gap-2
                                                    "
                                                >
                                                    {loadingId === payout.id ? (
                                                        <>
                                                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                                            "closing..."
                                                        </>
                                                        
                                                    )  : (
                                                        "close"
                                                    )}
                                                    
                                                </button>
                                            )
                                        }
                                    </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    );
}