import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Nav';
import Footer from '../components/Foote';

const Home = () => {
  return <>
    <div className="content-container">
        {/* <nav>
            <Navbar/>
        </nav> */}
        <main>
         
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