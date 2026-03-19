import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export default function JobsSuper() {
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

  return (
    <div className="p-4 w-full space-y-4 min-w-0">

      {/* Header */}
      <div className="hidden lg:flex md:flex-row md:items-center md:justify-between gap-3 min-w-0">
        <h1 className="text-lg md:text-2xl font-bold">Jobs</h1>

        <div className="flex gap-2 w-full md:w-auto min-w-0">
          {/* Search */}
          <input
            type="text"
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
            className="
              px-3 py-2 rounded-lg border
              border-[var(--border)]
              bg-[var(--background)]
              text-sm
            "
          >
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="reported">Reported</option>
          </select>
        </div>
      </div>

      {/* Table Wrapper */}
      <div className="w-full min-w-0">
        <div className="w-full overflow-x-auto border border-[var(--border)] rounded-lg">
          
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
              {jobs.map((job) => (
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
    </div>
  );
}