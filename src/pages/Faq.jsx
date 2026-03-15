import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Nav';
import Footer from '../components/Foote';

const GenaralSettings = () => {
  return <>
    <div className="content-container">
        {/* <nav>
            <Navbar/>
        </nav> */}
        <main 
            className="
                min-h-[calc(100% - 60px)]
            "
        >
         <h1>
            Frequent Asked Questions
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

export default Faq;