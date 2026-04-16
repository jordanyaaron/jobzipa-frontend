import React, { useEffect, useState } from "react";
import { getSavedJobs, toggleSaveJob } from "@/utils/bookmark";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SavedJobsPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const saved = getSavedJobs();
    setJobs(saved);
  }, []);

  const removeJob = (job) => {
    toggleSaveJob(job);
    const updated = getSavedJobs();
    setJobs(updated);
  };

  if (jobs.length === 0) {
    return (
      <div className="p-10 text-center text-gray-500">
        No saved jobs yet 🔖
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Saved Jobs</h1>

      <div className="flex flex-col gap-3">
        {jobs.map((job) => (
          <div
            key={job.public_id}
            className="flex items-center justify-between p-3 border rounded-lg"
          >
            {/* LEFT */}
            <Link to={`/jobs/${job.public_id}`} className="flex gap-3">
              <img
                src={job.company_logo}
                alt=""
                className="w-10 h-10 rounded-md object-cover"
              />

              <div>
                <p className="font-semibold">{job.title}</p>
                <p className="text-sm text-gray-500">{job.company}</p>
              </div>
            </Link>

            {/* ACTION */}
            <button
              onClick={() => removeJob(job)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <BookmarkIcon className="h-5 w-5text-[var(--text)] fill-[var(--text)]" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedJobsPage;

