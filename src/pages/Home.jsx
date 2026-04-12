import React, { useuseEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Nav';
import Footer from '../components/Foote';
import SkeletonBlock from "@/components/skeletons/JobZipaSkeleton";
import  JobsSkeleton  from '@/pages/loading-blocks/JobPostLoadinBlock'


const Home = () => {
  const [ blockSkeleton , setBlockSkeleton ] = useState(true);
 
 
  return (
    <div className="w-fulll flex gap-2" >
      {
        blockSkeleton 
        ?  <JobsSkeleton />
        :  <main
              className="
                min-h-[calc(100vh-130px)]
              "
            >
              <h1>Jobs</h1>
            </main>
      }
      <aside className="hidden lg:flex gap-3 flex-col ">
          <div className=' mt-4 flex-col  flex gap-2'>
            <SkeletonBlock className="w-20 h-6 "/>
            <SkeletonBlock className="w-full h-[150px]"/>
          </div>
          <div className='flex gap-2'>
            <div className=''>
              <SkeletonBlock className="w-[100px] h-[100px]"/>
            </div>
            <div className='flex-1 flex flex-col gap-2'>
              <SkeletonBlock className="h-5 flex-1"/>
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