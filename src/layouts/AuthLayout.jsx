import { Outlet } from "react-router-dom";
import "../css/Auth.css";
import "../css/Home.css";
// import "../css/Header.css";
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
            <img src={JobzipaLogo} alt="Logo" className="h-9" />
            </div>
        </div>
        </header>
        <div className="
            absolute
            top-[70px]
            w-full
            h-[calc(100vh-100px)]
            pt-0
        ">
            <Outlet />
            <footer className="
                bg-white dark:bg-gray-800 z-50
                p-5 pt-[30px] pb-[30px]
                -mt-[2px]
                -mb-6
                h-[60px]
                flex flex-col items-center justify-center
                text-center
            ">

                <p className="text-[var(--placeholder)] text-xs">
                <a href="#" className="no-underline text-[var(--placeholder)]  ml-1 hover:underline">About Us</a> |
                <a href="#" className="no-underline text-[var(--placeholder)]  ml-1 hover:underline">Contact Us</a> |
                <a href="#" className="no-underline text-[var(--placeholder)]  ml-1 hover:underline">Terms & Conditions</a> |
                <a href="#" className="no-underline text-[var(--placeholder)]  ml-1 hover:underline">Privacy & Cookies Policies</a>
                </p>

                <p className="text-[var(--placeholder)]  text-xs mt-1">
                    JobZipa Inc &copy; {new Date().getFullYear()}. All Rights Reserved
                </p>

            </footer>
        </div>
    </div>
);

export default AuthLayout;