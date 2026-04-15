import React, {useEffect, useState}  from "react";
import Footer from "@/components/Foote";
import SkeletonBlock from "@/components/skeletons/JobZipaSkeleton";
import JobDetailSkeleton  from '@/pages/loading-blocks/JobDetailsBlockLoading';
import api from "@/api/axios";
import { useParams } from "react-router-dom";



export default function JobDetailPage() {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [ blockSkeleton , setBlockSkeleton ] = useState(true);

    useEffect(() => {
        api.get(`jobs/${id}/`) // badilisha na dynamic id
        .then(res => {
            setJob(res.data);
        })
        .catch(err => console.log(err))
        .finally(() => setBlockSkeleton(false));
    }, []);

    return (
        <main className="pt-16 bg-[var(--main-bg)] px-4 md:px-6 flex-1 overflow-y-auto">
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
                    >
                        <h1>{job.title}</h1>
                        
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