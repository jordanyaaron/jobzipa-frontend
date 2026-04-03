import { Link ,  } from "react-router-dom";
import {
  EyeIcon,PlusIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React, {useState} from "react"

export default function JobsAdmin(
    {
        setFilter ,
        setViewAllPosts ,
        viewAllPosts,
        filter ,
        searchQuery,
        setSearchQuery
    }
){

    const allJobPost = [
        {
            id: 1,
            title: "Frontend Developer",
            staff: "You",
            status: "active",
            views: 120,
            date: "2026-03-18",
        },
        {
            id: 2,
            title: "Backend Engineer",
            staff: "Mary",
            status: "pending",
            views: 80,
            date: "2026-03-17",
        },
        {
            id: 3,
            title: "Data Analyst",
            staff: "James",
            status: "active",
            views: 150,
            date: "2026-03-15",
        },
        {
            id: 4,
            title: "Mobile App Developer",
            staff: "Sophia",
            status: "closed",
            views: 60,
            date: "2026-03-13",
        },
        {
            id: 5,
            title: "DevOps Engineer",
            staff: "Michael",
            status: "active",
            views: 210,
            date: "2026-03-11",
        },
        {
            id: 6,
            title: "UI/UX Designer",
            staff: "You",
            status: "pending",
            views: 65,
            date: "2026-03-16",
        },
    ];

    const [jobs, setJobs] = useState(allJobPost);
    const [loadingId, setLoadingId] = useState(null);
    
    

    const filteredJobs = jobs.filter((job) => {
        const matchesFilter =
            filter === "all" || job.status === filter;
        
        const matchesSearch =
            (job.title?.toLowerCase() || "").includes(searchQuery?.toLowerCase() || "") ||
            (job.staff?.toLowerCase() || "").includes(searchQuery?.toLowerCase() || "");
        
        return matchesFilter && matchesSearch;
    });

    const jobsToDisplay = viewAllPosts
        ? filteredJobs
        : filteredJobs.filter(job => job.staff === "You");


    const updateStatus = (id, status) => {
        setLoadingId(id);
        
        setTimeout(() => {
            setJobs(prev =>
            prev.map(job =>
                job.id === id ? { ...job, status } : job
            )
            );
        
            setLoadingId(null);
        }, 1000); // ⏱ 1 second delay
        };
        
          

    // function 
   

    
      
    return (
        <>
            <Link
                to="/super/post"
                className="fixed right-4 bottom-4.5 md:hidden flex items-center gap-2 px-3 py-2 rounded-xl text-white bg-green-600 hover:bg-green-700"
            >
                <PlusIcon className="h-5 w-5" />
                <span >Post New Job</span>
            </Link>
            <div className="p-2 pb-[64px] md:p-4  w-[calc(100vw)] lg:w-[calc(100vw-240px)] space-y-4 overflow-x-hidden">
                
                <div className="hidden lg:flex lg:flex-row md:items-center md:justify-between gap-3 min-w-0">
                <h1 className="text-lg md:text-2xl font-bold">Jobs</h1>

                <div className="flex gap-2 w-full md:w-auto min-w-0">
                    {/* post */}
                    <Link
                    to="/post"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700"
                    >
                        <PlusIcon className="h-5 w-5" />
                        <span className="hidden sm:block">Post New Job</span>
                    </Link>

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

                    {/* poster */}
                    <select
                        value={filter}
                        onChange={(e) => setViewAllPosts(e.target.value === "true")}
                        className="px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm"
                    >
                        <option value="true">All Posts</option>
                        <option value="false">My Posts</option>
                    </select>

                    {/* Filter */}
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm"
                    >
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="closed">Closed</option>
                    </select>
                
                </div>
                </div>
                {/* Scrollable row */}
                <div className="flex mt-16 lg:mt-0 overflow-x-auto  scrollbar-hide  gap-3 border border-[var(--border)]  rounded-lg">
                    <table className="min-w-[700px] w-full text-sm">
                        <thead className="bg-[var(--hover)] text-left">
                            <tr>
                            <th className="p-3">Title</th>
                            <th className="p-3">Staff</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Views</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobsToDisplay.map((job) => (
                                <tr
                                    key={job.id}
                                    className="border-t border-[var(--border)] hover:bg-[var(--hover)]"
                                >
                                    <td className="p-3 whitespace-nowrap">{job.title}</td>
                                    <td className="p-3 whitespace-nowrap">{job.staff}</td>

                                    {/* Status */}
                                    <td className="p-3">
                                    <span
                                        className={`
                                        px-2 py-1 rounded-full text-xs whitespace-nowrap
                                        ${
                                            job.status === "active"
                                            ? "bg-green-100 text-green-600"
                                            : job.status === "pending"
                                            ? "bg-yellow-100 text-yellow-600"
                                            : "bg-red-100 text-red-600"
                                        }
                                        `}
                                    >
                                        {job.status}
                                    </span>
                                    </td>

                                    <td className="p-3 whitespace-nowrap">{job.views}</td>
                                    <td className="p-3 whitespace-nowrap">{job.date}</td>

                                    {/* Actions */}
                                    <td className="p-3">
                                    <div className="flex justify-start gap-2 whitespace-nowrap">
                                        {
                                            job.status === 'pending' && (
                                                <button
                                                    onClick={() => updateStatus(job.id, "active")}
                                                    disabled={loadingId === job.id}
                                                    className="py-2 px-3 rounded-lg text-white bg-blue-600 flex items-center gap-2"
                                                >
                                                    {loadingId === job.id ? 
                                                        (<>
                                                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                                            Activating...
                                                        </>)
                                                        
                                                     : 
                                                        "Activate"
                                                    }
                                                </button>
                                            )
                                            }
                                        {
                                            job.status === 'active'
                                            && (   
                                                <button
                                                    disabled={loadingId === job.id}
                                                    onClick={() => updateStatus(job.id, "closed")}
                                                    className="
                                                        py-2 px-3 rounded-lg cursor-pointer
                                                        text-white bg-red-600
                                                        flex items-center gap-2
                                                    "
                                                >
                                                    {loadingId === job.id ? 
                                                        (<>
                                                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                                            closing...
                                                        </>)
                                                        
                                                      : 
                                                        "close"
                                                    }
                                                    
                                                </button>
                                            )
                                        }

                                        {
                                            job.status === 'closed'
                                            && (   <button
                                                    onClick={()=>updateStatus(job.id, "active")}
                                                    disabled={loadingId === job.id}
                                                    className="
                                                        py-2 px-3 rounded-lg cursor-pointer
                                                        text-white bg-green-600
                                                        flex items-center gap-2
                                                    "
                                                >
                                                    {loadingId === job.id ? 
                                                        (<>
                                                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                                            reactivating...
                                                        </>)
                                                      : 
                                                        "reactivate"
                                                    }
                                                    
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
        </>
    );
}