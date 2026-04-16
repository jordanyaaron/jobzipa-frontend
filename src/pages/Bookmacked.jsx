import React, { useEffect, useState } from "react";
import { getSavedJobs, toggleSaveJob } from "@/utils/bookmark";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import Footer from '../components/Foote';
import SkeletonBlock from "@/components/skeletons/JobZipaSkeleton";

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

  

  return (
    <>
    <div className="w-fulll flex gap-10" >
      {
        jobs.length === 0 
        ?  <div className="p-10 w-full lg:w-[560px] text-center text-gray-500">
                No saved jobs yet 🔖
            </div>
        :  <main
              className="
                w-full
                pt-6
                lg:w-[560px] 
              "
            >
                <h1 className="text-xl text-[var(--text)] font-bold mb-4">Saved Jobs</h1>
                <div className="flex flex-col gap-3">
                {jobs.map((job) => (
                    <div
                    key={job.public_id}
                    className="flex items-center justify-between p-3 border-b border-[var(--border)] "
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
            </main>
      }
      <aside className="hidden lg:block pb-10 w-[400px]">
          <div className="sticky top-10">

              {/* ADS */}
              <div className='mt-4 flex flex-col gap-2'>
                  <SkeletonBlock className="w-20 h-6"/>
                  <SkeletonBlock className="w-full h-[150px]"/>
                  </div>

                  <div className='flex mt-3 gap-2'>
                  <div>
                      <SkeletonBlock className="w-[100px] h-[100px]"/>
                  </div>
                  <div className='flex-1 flex flex-col gap-2'>
                      <SkeletonBlock className="h-5 w-full"/>
                      <SkeletonBlock className="h-5 w-3/4"/>
                      <SkeletonBlock className="h-5 w-1/4"/>
                  </div>
              </div>
              <div className='mt-4 flex flex-col gap-2'>
                  <SkeletonBlock className="w-20 h-6"/>
                  <SkeletonBlock className="w-full h-[150px]"/>
                  </div>

                  <div className='flex mt-3 gap-2'>
                  <div>
                      <SkeletonBlock className="w-[100px] h-[100px]"/>
                  </div>
                  <div className='flex-1 flex flex-col gap-2'>
                      <SkeletonBlock className="h-5 w-full"/>
                      <SkeletonBlock className="h-5 w-3/4"/>
                      <SkeletonBlock className="h-5 w-1/4"/>
                  </div>
              </div>

              <Footer />

          </div>
      </aside>
    </div>
    </>
  );
};

export default SavedJobsPage;

