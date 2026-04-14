import React, { useEffect , useState } from 'react';
import { BookmarkIcon, ShareIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import Navbar from '../components/Nav';
import Footer from '../components/Foote';
import SkeletonBlock from "@/components/skeletons/JobZipaSkeleton";
import  JobsSkeleton  from '@/pages/loading-blocks/JobPostLoadinBlock'
import api from '@/api/axios';
import { shortTimeAgo } from '@/utils/time';


const Home = () => {
  const [ blockSkeleton , setBlockSkeleton ] = useState(true);
  const [jobs, setJobs] = useState([]);

  const JOB_TYPE_MAP = {
    FT: "Full Time",
    PT: "Part Time",
    CT: "Contract",
    IN: "Internship",
  };
  
  const JOB_MODE_MAP = {
    RM: "Remote",
    ON: "On-site",
    HY: "Hybrid",
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get("jobs/get");
        setJobs(res.data);
      } catch (error) {
        console.log("Fetch Jobs Error:", error.response || error);
      } finally {
        setBlockSkeleton(false);
      }
    };

    fetchJobs();
  }, []);
 
 
  return (
    <div className="w-fulll flex gap-2" >
      {
        blockSkeleton 
        ?  <JobsSkeleton />
        :  <main
              className="
                w-full
                lg:w-[710px] 
              "
            >
              {jobs.map((job) => (
                <>
                    <div className="flex flex-col gap-2 text-[var(--text)]  pt-5" >
                      {/* header */}
                      <div  className="flex gap-2">
                        <img src={job.company_logo} alt="" srcset="" className="h-10 w-10 rounded-full"  />
                        <div className="flex-1 flex gap-2 justify-start items-center">
                          <span>{job.company}</span>
                          <span className="font-black">{shortTimeAgo(job.actual_date)}</span>
                        </div>
                      </div>
                      {/* title & locations */}
                      <div  className="flex flex-col pl-6 gap-1">
                        <p className="font-black">{job.title}</p>
                        <p>
                          {job.location?.length > 0 && (
                            <>
                              {job.location[0].locationRigion}, {job.location[0].locationCountry}

                              {job.location.length > 1 && (
                                <span className="ml-1 text-sm text-gray-500">
                                  +{job.location.length - 1}
                                </span>
                              )}
                            </>
                          )}
                        </p>
                      </div>
                      <div className="flex gap-2 pl-3  text-sm">
                      <p>
                        {JOB_TYPE_MAP[job.job_type]} • {JOB_MODE_MAP[job.job_mode]}
                      </p>
                      </div>
                      <div className="flex pl-6   gap-2 my-3">
                        <button className="p-0" ><BookmarkIcon className="h-4 w-4 "/></button>
                        <button className="p-0" ><ShareIcon className="h-4 w-4 "/></button>
                      </div>
                    </div>
                    {/* <div className="flex flex-col text-[var(--text)]  pt-6">
                        <div
                          key={job.public_id}
                          className="
                            p-4 
                            space-y-4
                            border-b border-[var(--border)]
                          "
                        >
                          <div className="flex gap-2">
                            <div className="w-10 h-10" >
                              <img src={job.company_logo} alt="" srcset="" className="h-10 w-10 rounded-full"  />
                            <div className="flex-1 flex justify-between items-center " > 
                              <div>{job.company}</div>
                              <div>{job.actual_date}</div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 my-3">
                            <div>{job.title}</div>
                            <div>
                              <span>
                                {job.location?.length > 0 && (
                                  <>
                                    {job.location[0].locationRigion}, {job.location[0].locationCountry}

                                    {job.location.length > 1 && (
                                      <span className="ml-1 text-sm text-gray-500">
                                        +{job.location.length - 1}
                                      </span>
                                    )}
                                  </>
                                )}
                              </span>
                            </div>
                            <div className="flex gap-2 text-sm">
                              <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                                {JOB_TYPE_MAP[job.job_type]}
                              </span>

                              <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full">
                                {JOB_MODE_MAP[job.job_mode]}
                              </span>
                            </div>
                          </div>
                          <div className="flex  gap-2 my-3">
                            <button className="h-6 w-6 rounded-sm" ></button>
                            <button className="h-6 w-6 rounded-sm" ></button>
                          </div>
                        </div>
                      
                      
                        </div> 
                    </div> */}
                </>
                
              )
            )}
           
            </main>
      }
      <aside className="p-6 hidden lg:flex gap-3 flex-col ">
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
  )
    
};

export default Home;