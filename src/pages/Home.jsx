import React, { useuseEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Nav';
import Footer from '../components/Foote';
import JobsSkeleton from '@/pages/loading-blocks/'

const Home = () => {
  const [ blockSkeleton , setBlockSkeleton ] = useState(true);
 
  if (blockSkeleton

  ){
    return (
       <JobsSkeleton />
    );
  }
  return <>
    <div className="content-container">
        {/* <nav>
            <Navbar/>
        </nav> */}
        <main
          className="
            min-h-[calc(100vh-130px)]
          "
        >
         <h1>
            Jobs
         </h1>
        </main>
        <aside>
            <div className='ad-section'></div>
            <div className='ad-section'></div>
            <Footer/>
        </aside>
    </div>
  </>
};

export default Home;