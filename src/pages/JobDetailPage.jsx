import React, {  useEffect , useState , useRef } from "react";
import Footer from "@/components/Foote";
import SkeletonBlock from "@/components/skeletons/JobZipaSkeleton";
import JobDetailSkeleton from "@/pages/loading-blocks/JobDetailsBlockLoading";
import api from "@/api/axios";
import { useParams } from "react-router-dom";
import { isJobSaved, toggleSaveJob } from "@/utils/bookmark";
import ShareModal from "@/components/models/ShareModel";
import { Helmet } from "react-helmet-async";
import { getUser, isAuthenticated } from "../utils/auth";
import EditJobFAB from "@/components/buttons/EditJobButton";



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
  const user = getUser()
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [blockSkeleton, setBlockSkeleton] = useState(true);
  const [saved, setSaved] = useState(false);
  const [openShare, setOpenShare] = useState(false);

  const adRef = useRef(null)
    const bottomAdRef = useRef(null)
    const nativeAdRef = useRef(null)
  
    useEffect(() => {
      const fetchJobs = async () => {
    
        // 🔥 1. CHECK CACHE FIRST
        const cachedJobs = getJobsFromCache();
    
        if (cachedJobs) {
          console.log("⚡ Using cached jobs");
          setJobs(cachedJobs);
          setBlockSkeleton(false);
          return;
        }
    
        // 🌐 2. FETCH FROM API
        try {
          const res = await api.get("jobs/get/",{ skipAuth: true });
    
          setJobs(res.data);
    
          // 💾 SAVE TO CACHE
          saveJobsToCache(res.data);
    
        } catch (error) {
          console.log("Fetch Jobs Error:", error.response || error);
        } finally {
          setBlockSkeleton(false);
        }
      };
    
      fetchJobs();
    }, []);
   
    useEffect(() => {
    if (window.location.hostname !== "jobzipa.com") return;
  
    const script1 = document.createElement("script");
    script1.innerHTML = `
      atOptions = {
        'key' : '8e88afa87734f47e37f619b78251c6ba',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
      };
    `;
  
    
    const script2 = document.createElement("script");
    script2.src =
      "https://www.highperformanceformat.com/8e88afa87734f47e37f619b78251c6ba/invoke.js";
    script2.async = true;
  
    if (adRef.current) {
      adRef.current.appendChild(script1);
      adRef.current.appendChild(script2);
    }
  }, []);
  
  
  useEffect(() => {
    if (window.location.hostname !== "jobzipa.com") return;
  
    const myscript1 = document.createElement("script");
    myscript1.text = `
      atOptions = {
        'key' : 'c19acf17a50b54480aeff4aa3a225032',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320,
        'params' : {}
      };
    `;
  
    
    const myscript2 = document.createElement("script");
    myscript2.src =
      "https://www.highperformanceformat.com/c19acf17a50b54480aeff4aa3a225032/invoke.js";
    myscript2.async = true;
  
    if (bottomAdRef.current) {
      bottomAdRef.current.appendChild(myscript1);
      bottomAdRef.current.appendChild(myscript2);
    }
  }, []);
  
  
  
  
  
  useEffect(() => {
    if (window.location.hostname !== "jobzipa.com") return;
  
    const script = document.createElement("script");
  
    script.src =
      "https://pl29439802.profitablecpmratenetwork.com/1b363497faa51091189902cbeda1d156/invoke.js";
  
    script.async = true;
    script.setAttribute("data-cfasync", "false");
  
    if (nativeAdRef.current) {
      nativeAdRef.current.appendChild(script);
    }
  }, []);
  
  

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
      {/* SEO START */}
      <Helmet>
        <title>
          {job
            ? `${job.title} Job in ${job.location?.[0]?.locationRigion || ""} ${job.location?.[0]?.locationCountry || ""} | Jobzipa`
            : "Job Details | Jobzipa"}
        </title>

        <meta
          name="description"
          content={
            job
              ? `Apply for ${job.title} job at ${job.company}. Location: ${job.location?.[0]?.locationRigion}, ${job.location?.[0]?.locationCountry}. Find more jobs on Jobzipa.`
              : "Find latest jobs on Jobzipa."
          }
        />
      </Helmet>
      {/* SEO END */}

      <main className="pb-[100px] pt-10  lg:pt-16 bg-[var(--main-bg)] px-1 md:px-6 flex-1 overflow-y-auto">
        <div className="w-full flex gap-2 justify-center relative">

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
                      {shortTimeAgo(job.actual_date)}
                    </div>
                  </div>

                  {/* ACTIONS Mobile */}
                  <div className="flex lg:hidden gap-2">

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
              {/* ADS */}
              <div className='mt-4 hidden lg:flex flex-col gap-2'>
                    <div className="text-xs text-gray-400">Sponsored</div>

                    <div ref={adRef} className="w-[469px] h-[60px] mb-[15px] mx-auto" />
                </div>

                <div className='hidden lg:flex mt-3 gap-2' boder>
                  <div className="mt-4 hidden lg:flex flex-col gap-2">
                    <div className="text-xs text-blue-400">
                      Ad
                    </div>

                    <div
                      id="container-1b363497faa51091189902cbeda1d156"
                      ref={nativeAdRef}
                      className="mx-auto"
                    />
                  </div>

                  

                  {/* <div>
                    <SkeletonBlock className="w-[100px] h-[100px]"/>
                  </div>
                  <div className='flex-1 flex flex-col gap-2'>
                      <SkeletonBlock className="h-5 w-full"/>
                      <SkeletonBlock className="h-5 w-3/4"/>
                      <SkeletonBlock className="h-5 w-1/4"/>
                  </div> */}
                </div>
              <Footer />
            </div>
          </aside>

           <div
          className="
            fixed
            bottom-[10px]
            left-0
            right-0
            flex
            justify-center
            z-50
            lg:hidden
            min-h-[50px]
          "
        >
          <div
            ref={bottomAdRef}
            className="
              overflow-hidden
              rounded-lg
              shadow-lg
            "
          />
        </div>

        </div>
      </main>
      {/* SHARE MODAL */}
      <EditJobFAB canEdit={ user?.is_admin || null } job={job}/>
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