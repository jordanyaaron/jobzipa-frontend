import React, { useEffect, useState } from "react";
import Footer from "@/components/Foote";
import SkeletonBlock from "@/components/skeletons/JobZipaSkeleton";
import JobDetailSkeleton from "@/pages/loading-blocks/JobDetailsBlockLoading";
import api from "@/api/axios";
import { useParams } from "react-router-dom";
import { isJobSaved, toggleSaveJob } from "@/utils/bookmark";
import ShareModal from "@/components/models/ShareModel";

import {
  BookmarkIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";

import { shortTimeAgo } from "@/utils/time";

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

export default function JobDetailPage() {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [blockSkeleton, setBlockSkeleton] = useState(true);
  const [saved, setSaved] = useState(false);
  const [openShare, setOpenShare] = useState(false); // ✅ NEW

  useEffect(() => {
    const fetchJobDetail = async () => {
      const cachedJobs = localStorage.getItem("jobs_cache");

      if (cachedJobs) {
        const parsedJobs = JSON.parse(cachedJobs);

        const foundJob = parsedJobs.find(
          (j) => j.public_id === id
        );

        if (foundJob) {
          setJob(foundJob);
          setBlockSkeleton(false);

          // background update
          api.get(`jobs/${id}/`, { skipAuth: true }).then((res) => {
            setJob(res.data);
          });

          return;
        }
      }

      try {
        const res = await api.get(`jobs/${id}/`, { skipAuth: true });
        setJob(res.data);
      } catch (err) {
        console.log("Fetch Job Detail Error:", err.response || err);
      } finally {
        setBlockSkeleton(false);
      }
    };

    fetchJobDetail();
  }, [id]);

  useEffect(() => {
    if (job) {
      setSaved(isJobSaved(job.public_id));
    }
  }, [job]);

  return (
    <>
      <main className="pt-10 lg:pt-16 bg-[var(--main-bg)] px-1 md:px-6 flex-1 overflow-y-auto">
        <div className="w-fulll flex gap-2 justify-center relative">
          
          {blockSkeleton ? (
            <JobDetailSkeleton />
          ) : (
            <main className="w-full pt-6 lg:w-[600px] text-[var(--text)]">

              <div className="space-y-1">

                {/* HEADER */}
                <div className="p-4">
                  <div className="flex justify-between items-start">

                    <div className="flex gap-4">
                      <img
                        src={job.company_logo}
                        alt=""
                        className="w-14 h-14 rounded-lg object-cover"
                      />

                      <div>
                        <h1 className="text-2xl font-bold">{job.title}</h1>
                        <p className="text-gray-500">{job.company}</p>
                      </div>
                    </div>

                    {/* ACTIONS DESKTOP */}
                    <div className="hidden lg:flex gap-2">

                      {/* SAVE */}
                      <button
                        onClick={() => {
                          const newState = toggleSaveJob(job);
                          setSaved(newState);
                        }}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <BookmarkIcon
                          className={`h-5 w-5 ${
                            saved ? "fill-[var(--text)]" : ""
                          }`}
                        />
                      </button>

                      {/* SHARE */}
                      <button
                        onClick={() => setOpenShare(true)}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <ArrowUpRightIcon className="h-5 w-5" />
                      </button>

                    </div>
                  </div>

                  {/* META */}
                  <div className="mt-4 text-sm text-gray-500 space-y-1">

                    <div>
                      {job.location?.[0]?.locationRigion},{" "}
                      {job.location?.[0]?.locationCountry}
                      {job.location?.length > 1 &&
                        ` +${job.location.length - 1}`}
                    </div>

                    <div>
                      {JOB_TYPE_MAP[job.job_type]} •{" "}
                      {JOB_MODE_MAP[job.job_mode]} •{" "}
                      {shortTimeAgo(job.created_at)}
                    </div>
                  </div>

                  {/* MOBILE ACTIONS */}
                  <div className="mt-3 flex lg:hidden gap-2">

                    <button
                      onClick={() => {
                        const newState = toggleSaveJob(job);
                        setSaved(newState);
                      }}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <BookmarkIcon
                        className={`h-5 w-5 ${
                          saved ? "fill-[var(--text)]" : ""
                        }`}
                      />
                    </button>

                    <button
                      onClick={() => setOpenShare(true)}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <ArrowUpRightIcon className="h-5 w-5" />
                    </button>

                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="p-4">
                <div
                    className="
                        ql-display
                        prose
                        prose-ul:list-disc
                        prose-ol:list-decimal
                        prose-li:ml-4
                        prose-p:leading-relaxed
                        dark:prose-invert
                        max-w-none
                        text-sm
                    "
                    dangerouslySetInnerHTML={{
                        __html: job.description?.trim(),
                    }}
                    />
                </div>

                {/* APPLY */}
                <div className="p-4 mb-5">
                  <a
                    href={job.application_link}
                    target="_blank"
                    className="inline-block px-5 py-2 bg-[var(--text)] text-[var(--main-bg)] rounded-md hover:opacity-80"
                  >
                    Apply Now
                  </a>
                </div>

              </div>
            </main>
          )}

          {/* SIDEBAR */}
          <aside className="hidden lg:block pb-10 w-[400px]">
            <div className="sticky top-10">

              <div className="mt-4 flex flex-col gap-2">
                <SkeletonBlock className="w-20 h-6" />
                <SkeletonBlock className="w-full h-[150px]" />
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
      </main>

      {/* 🔥 SHARE MODAL */}
      {job && (
        <ShareModal
          open={openShare}
          onClose={() => setOpenShare(false)}
          job={job}
        />
      )}
    </>
  );
}