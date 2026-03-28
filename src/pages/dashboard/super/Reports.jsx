import React, { useState } from "react";
import { jobReportsData } from "@/data/roports"; // hii ndio data ya job reports
import { useNavigate , useOutletContext } from "react-router-dom";
import { EyeIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function ReportSuper() {
  const { reportsFilter, setReportsFilter, searchQuery , setSearchQuery } = useOutletContext();
  const [statusFilter, setStatusFilter] = useState("all");
  const navigate = useNavigate();

  // Filter and search logic
  const filteredReports = jobReportsData.filter((report) => {
    const matchesStatus = reportsFilter === "all" || report.status === reportsFilter;
    const matchesSearch =
      report.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.reporter.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Status colors
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    in_progress: "bg-blue-100 text-blue-800",
    resolved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
  };

  return (
    <div className="p-4 w-[calc(100vw)] lg:w-[calc(100vw-240px)] space-y-4 overflow-x-hidden">
      <div className="hidden lg:flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
        <h1 className="text-lg lg:text-2xl font-bold">Job Reports</h1>

        <div className="flex gap-2 w-full lg:w-auto">
          {/* Search */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by job title or reporter..."
            className="w-full lg:w-[250px] px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm"
          />

          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={(e) => setReportsFilter(e.target.value)}
            className="px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm"
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="resolved">Resolved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Reports Table */}
      <div className="overflow-x-auto border border-[var(--border)] rounded-lg">
        <table className="min-w-[700px] w-full text-sm">
          <thead className="bg-[var(--hover)] text-left">
            <tr>
              <th className="p-3">Job Title</th>
              <th className="p-3">Reporter</th>
              <th className="p-3">Message</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-3 text-center text-gray-500">
                  No reports found
                </td>
              </tr>
            ) : (
              filteredReports.map((report) => (
                <tr
                  key={report.id}
                  className="border-t border-[var(--border)] hover:bg-[var(--hover)]"
                >
                  <td className="p-3">{report.jobTitle}</td>
                  <td className="p-3">{report.reporter}</td>
                  <td className="p-3 max-w-[250px] truncate ">{report.message}</td>
                  <td className="p-3" >
                    <span className={`py-1 px-3 rounded-lg ${statusColors[report.status]}`}>
                      {report.status.replace("_", " ")}
                    </span>
                  </td>
                  <td className="p-3">{new Date(report.date).toLocaleString()}</td>
                  <td className="p-3 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      {/* Go to Job */}
                      <button
                        onClick={() => navigate(`/jobs/${report.jobId}`)}
                        className="
                          p-2 rounded-lg 
                          hover:bg-blue-100 
                          text-blue-600
                        "
                        title="Go to job"
                      >
                        <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                      </button>
                      {/* View Report */}
                      <button
                        onClick={() => navigate(`/super/report/${report.id}`)}
                        className="
                          p-2 rounded-lg 
                          hover:bg-gray-200 
                          text-gray-700
                        "
                        title="View report"
                      >
                        <EyeIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}