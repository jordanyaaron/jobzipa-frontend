import {
    BookmarkIcon,
    ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { shortTimeAgo } from "@/utils/time";
import { Link } from "react-router-dom";
import { isJobSaved, toggleSaveJob } from "@/utils/bookmark";
  
  const JOB_TYPE_MAP = {
    FT: "Full Time",
    PT: "Part Time",
    CT: "Contract",
  };
  
  const JOB_MODE_MAP = {
    RM: "Remote",
    ON: "On-site",
    HY: "Hybrid",
  };
  
  export default function JobCard({ job }) {
    const [saved, setSaved] = useState(isJobSaved(job.public_id));
  
    return (
      <div className="border border-[var(--border)] rounded-xl p-4 bg-white dark:bg-gray-900 hover:shadow-md transition">
  
        {/* HEADER */}
        <div className="flex items-start justify-between">
  
          <div className="flex gap-3">
            <img
              src={job.company_logo}
              alt="logo"
              className="w-12 h-12 rounded-lg object-cover"
            />
  
            <div>
                <Link to={`/jobs/${job.public_id}`}>
                    <h2 className="font-semibold text-[var(--text)] text-lg hover:underline">{job.title}</h2>
                </Link>
                <p className="text-sm text-gray-500">{job.company}</p>
            </div>
          </div>
  
          {/* ACTIONS */}
          <div className="flex gap-2">
            <button
              onClick={() => {
                const newState = toggleSaveJob(job);
                setSaved(newState);
              }}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <BookmarkIcon
                onClick={() => {
                  const newState = toggleSaveJob(job);
                  setSaved(newState);
                }}
                className={`h-5 w-5 ${
                  saved ? "text-[var(--text)] fill-[var(--text)]" : ""
                }`}
              />
            </button>
  
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <ArrowUpRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
  
        {/* DESCRIPTION */}
        <div className="text-sm text-gray-600 dark:text-gray-300 mt-3 line-clamp-2"
            dangerouslySetInnerHTML={{ __html: job.description }}
        />
  
        {/* LOCATION */}
        <p className="text-sm mt-2 text-gray-500">
          {job.location?.length > 0 && (
            <>
              {job.location[0].locationRigion},{" "}
              {job.location[0].locationCountry}
  
              {job.location.length > 1 && (
                <span className="ml-1 text-xs text-gray-400">
                  +{job.location.length - 1}
                </span>
              )}
            </>
          )}
        </p>
  
        {/* TAGS */}
        <div className="flex gap-2 mt-3 flex-wrap">
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
            {JOB_TYPE_MAP[job.job_type]}
          </span>
  
          <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
            {JOB_MODE_MAP[job.job_mode]}
          </span>
        </div>
  
        {/* FOOTER */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-[var(--border)]">
  
            <p className="text-xs text-gray-500">
                {shortTimeAgo(job.actual_date)}
            </p>
            <Link to={`/jobs/${job.public_id}`} className="text-sm px-3 py-2 rounded-md bg-black text-white hover:opacity-80">
                View more
            </Link>
        </div>
      </div>
    );
  }