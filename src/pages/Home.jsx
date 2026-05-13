import React, { useEffect , useState } from 'react';
import { Helmet } from "react-helmet-async";
import { BookmarkIcon, ForwardIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import Navbar from '../components/Nav';
import Footer from '../components/Foote';
import SkeletonBlock from "@/components/skeletons/JobZipaSkeleton";
import  JobsSkeleton  from '@/pages/loading-blocks/JobPostLoadinBlock'
import api from '@/api/axios';
import { shortTimeAgo } from '@/utils/time';
import JobCard from '@/components/cards/JobCard';
import { saveJobsToCache, getJobsFromCache } from "@/utils/jobCache";




const Home = () => {
  const [ blockSkeleton , setBlockSkeleton ] = useState(true);
  const [jobs, setJobs] = useState([]);

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
      'key' : 'c19acf17a50b54480aeff4aa3a225032',
      'format' : 'iframe',
      'height' : 50,
      'width' : 320,
      'params' : {}
    };
  `;

  
  const script2 = document.createElement("script");
  script2.src =
    "https://www.highperformanceformat.com/c19acf17a50b54480aeff4aa3a225032/invoke.js";
  script2.async = true;

  if (adRef.current) {
    adRef.current.appendChild(script1);
    adRef.current.appendChild(script2);
  }
}, []);
 
  return (
    <>
      
      <div className="w-full flex flex-col lg:flex-row  gap-10" >
        {
          blockSkeleton 
          ?  <JobsSkeleton />
          :  <main
                className="
                  w-full
                  pt-6
                  flex-1
                  lg:w-[560px]
                "
              >
                {jobs.map((job) => (
                  <>
                      <JobCard key={job.public_id} job={job}/>
                  </>
                )
              )}
            
              </main>
        }
        <aside className="lg:block pb-10 w-full lg:w-[400px]">
            <div className="sticky top-10">

                {/* ADS */}
                <div className='mt-4 hidden lg:flex flex-col gap-2'>
                    <div className="text-xs text-gray-400">Sponsored</div>

                    <div ref={adRef} className="w-[320px] h-[50px] mx-auto" />
                </div>

                <div className='hidden lg:flex mt-3 gap-2'>
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
  )
    
};

export default Home;