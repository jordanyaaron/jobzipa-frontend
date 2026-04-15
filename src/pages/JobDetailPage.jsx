import React, {useEffect, useState}  from "react";
import Footer from "@/components/Foote";
import SkeletonBlock from "@/components/skeletons/JobZipaSkeleton";
import JobDetailSkeleton  from '@/pages/loading-blocks/JobDetailsBlockLoading';
import api from "@/api/axios";
import { useParams } from "react-router-dom";

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
    const [ blockSkeleton , setBlockSkeleton ] = useState(true);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        api.get(`jobs/${id}/`) // badilisha na dynamic id
        .then(res => {
            setJob(res.data);
        })
        .catch(err => console.log(err))
        .finally(() => setBlockSkeleton(false));
    }, []);

    return (
        <main className="pt-6 lg:pt-16 bg-[var(--main-bg)] px-1 md:px-6 flex-1 overflow-y-auto">
            <div className="w-fulll flex  gap-2 justify-center" >
                {
                blockSkeleton 
                ?  <JobDetailSkeleton />
                :  <main
                        className="
                        w-full
                        pt-6
                        lg:w-[600px] 
                        "
                    >              {/* MAIN */}
                        <div className="lg:col-span-2 space-y-4">
                            
                            {/* HEADER */}
                            <div className="p-5 ">

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

                                    {/* META */}
                                    <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-500">
                                        <span>
                                        {job.location?.[0]?.locationRigion},{" "}
                                        {job.location?.[0]?.locationCountry}
                                        {job.location?.length > 1 && ` +${job.location.length - 1}`}
                                        </span>

                                        <span>•</span>

                                        <span>{JOB_TYPE_MAP[job.job_type]}</span>

                                        <span>•</span>

                                        <span>{JOB_MODE_MAP[job.job_mode]}</span>

                                        <span>•</span>

                                        <span>{shortTimeAgo(job.created_at)}</span>
                                    </div>
                                    </div>
                                </div>

                                {/* ACTIONS */}
                                <div className="flex gap-2">
                                    <button
                                    onClick={() => setSaved(!saved)}
                                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                                    >
                                    <BookmarkIcon
                                        className={`h-5 w-5 ${
                                        saved ? "text-blue-500 fill-blue-500" : ""
                                        }`}
                                    />
                                    </button>

                                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                                    <ArrowUpRightIcon className="h-5 w-5" />
                                    </button>
                                </div>

                                </div>

                                {/* APPLY BUTTON */}
                                <div className="mt-4">
                                <a
                                    href={job.application_link}
                                    target="_blank"
                                    className="inline-block px-5 py-2 bg-black text-white rounded-md hover:opacity-80"
                                >
                                    Apply Now
                                </a>
                                </div>

                            </div>

                            {/* DESCRIPTION */}
                            <div className=" p-5 ">

                                <div
                                className="prose dark:prose-invert max-w-none text-sm"
                                    dangerouslySetInnerHTML={{ __html: job.description }}
                                />
                            </div>

                        </div>
                    </main>
                }
                <aside className="p-6 hidden w-[400px] lg:flex gap-3 flex-col ">
                    <div className=' mt-4 flex-col  flex gap-2'>
                    <SkeletonBlock className="w-20 h-6 "/>
                    <SkeletonBlock className="w-full h-[150px]"/>
                    </div>
                    <div className='flex gap-2'>
                    <div className=''>
                        <SkeletonBlock className="w-[100px] h-[100px]"/>
                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                        <SkeletonBlock className="h-5 w-full"/>
                        <SkeletonBlock className="h-5 w-3/4"/>
                        <SkeletonBlock className="h-5 w-1/4"/>
                    </div>
                    </div>
                    <Footer/>
                </aside>
            </div>
        </main>
            
    );
  }