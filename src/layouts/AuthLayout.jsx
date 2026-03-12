import { Outlet } from "react-router-dom";
import DeviceSize from "../components/DeviceSize";
import "../css/Auth.css";
import "../css/Home.css";
// import "../css/Header.css";
import "../css/DeviceSize.css";// Importing Components
// import Navbar from '../components/Navbar';
import Header from "../components/Header";
import Footer from "../components/Foote";

// images
import JobzipaLogo from '../assets/logos/jobzipa.png';


const AuthLayout = () => (
    <div className="min-h-screen bg-gray-300 dark:bg-gray-900 transition-colors duration-300">
        {/* <Header/> */}
        <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 z-50">
        <div className="max-w-0xl mx-auto flex items-center justify-between px-4 md:px-6 h-[68px]">
            
            {/* Logo */}
            <div className="flex items-center">
            <img src={JobzipaLogo} alt="Logo" className="h-14 md:h-16" />
            </div>
        </div>
        </header>
        <div className="
            absolute
            top-[70px]
            w-full
            h-[calc(100vh-70px)]
            pt-0
        ">
            <Outlet />
            <Footer/>
        </div>
        
        <DeviceSize/>
        {/* 
        <Navbar/>
        <Outlet />
        <Footer /> */}
    </div>
);

export default AuthLayout;