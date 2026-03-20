import { Link , useOutletContext } from "react-router-dom";
import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export default function JobsSuper() {
  const { jobFilter, setJobFilter, searchQuery, setSearchQuery } = useOutletContext();
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      staff: "John",
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
  ];
  const filteredJobs = jobs.filter((job) => {
    const matchesFilter =
      jobFilter === "all" || job.status === jobFilter;
  
    const matchesSearch =
      (job.title?.toLowerCase() || "").includes(searchQuery?.toLowerCase() || "") ||
      (job.staff?.toLowerCase() || "").includes(searchQuery?.toLowerCase() || "");
  
    return matchesFilter && matchesSearch;
  });
  return (
    <div className="p-4 w-[calc(100vw)] lg:w-[calc(100vw-240px)] space-y-4 overflow-x-hidden">
  
      <div className="hidden lg:flex lg:flex-row md:items-center md:justify-between gap-3 min-w-0">
        <h1 className="text-lg md:text-2xl font-bold">Jobs</h1>

        <div className="flex gap-2 w-full md:w-auto min-w-0">
          {/* post */}
          <Link
            to="/super/post"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700"
          >
            <PlusIcon className="h-5 w-5" />
            <span className="hidden sm:block">Post</span>
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

          {/* Filter */}
          <select
            value={jobFilter}
            onChange={(e) => setJobFilter(e.target.value)}
            className="px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="reported">Reported</option>
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
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredJobs.map((job) => (
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
                    <div className="flex justify-end gap-2 whitespace-nowrap">
                      <button className="p-2 hover:bg-[var(--hover)] rounded">
                        <EyeIcon className="h-4 w-4" />
                      </button>

                      <button className="p-2 hover:bg-[var(--hover)] rounded">
                        <PencilSquareIcon className="h-4 w-4" />
                      </button>

                      <button className="p-2 hover:bg-red-100 rounded">
                        <TrashIcon className="h-4 w-4 text-red-500" />
                      </button>
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