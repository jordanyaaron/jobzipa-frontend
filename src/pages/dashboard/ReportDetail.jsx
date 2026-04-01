import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUser, isAuthenticated } from "@/utils/auth";
import { jobReportsData } from "@/data/roports";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function ReportDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // local state (temporary)
  const [reports, setReports] = useState(jobReportsData);

  const report = reports.find((r) => r.id === id);

  if (!report) {
    return <div className="p-4">Report not found</div>;
  }

  // 🔥 change status
  const updateStatus = (status) => {
    const updated = reports.map((r) =>
      r.id === id ? { ...r, status } : r
    );
    setReports(updated);
  };

  // 🎨 status colors
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    in_progress: "bg-blue-100 text-blue-800",
    resolved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
  };

  return (
    <div className="p-4 lg:p-6 w-[calc(100vw)] lg:w-[calc(100vw-240px)] space-y-4">
      
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 px-3 py-2 bg-green-800 text-white rounded-lg"
      >
        <ArrowLeftIcon className="h-5 w-5" />
        Back
      </button>

      {/* Card */}
      <div className="border border-[var(--border)] rounded-lg p-4 bg-[var(--background)] space-y-3">
        
        <h1 className="text-xl font-bold">Job Report Detail</h1>

        <p>
          <span className="font-semibold">Job:</span> {report.jobTitle}
        </p>

        <p>
          <span className="font-semibold">Reporter:</span> {report.reporter}
        </p>

        <p>
          <span className="font-semibold">Message:</span> {report.message}
        </p>

        <p>
          <span className="font-semibold">Date:</span>{" "}
          {new Date(report.date).toLocaleString()}
        </p>

        {/* Status */}
        <p>
          <span className="font-semibold">Status:</span>{" "}
          <span className={`px-2 py-1 rounded ${statusColors[report.status]}`}>
            {report.status.replace("_", " ")}
          </span>
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-2 flex-wrap">
        
        <button
          onClick={() => updateStatus("resolved")}
          className="px-3 py-2 bg-green-600 text-white rounded-lg"
        >
          Mark as Resolved
        </button>

        <button
          onClick={() => updateStatus("rejected")}
          className="px-3 py-2 bg-red-600 text-white rounded-lg"
        >
          Reject
        </button>

        <button
          onClick={() => updateStatus("in_progress")}
          className="px-3 py-2 bg-blue-600 text-white rounded-lg"
        >
          In Progress
        </button>

        <button
          onClick={() => navigate(`/jobs/${report.jobId}`)}
          className="px-3 py-2 bg-black text-white rounded-lg"
        >
          Go to Job
        </button>

      </div>
    </div>
  );
}