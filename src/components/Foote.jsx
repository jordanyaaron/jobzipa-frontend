import React from "react";
// import {} from 'react' 
import JobzipaLogo from '../assets/logos/jobzipa.png';
import { Link } from 'react-router-dom';

import storybookLogo from '../assets/logos/jobzipa.png';
function Footer() {
    return(
            <footer className="
                bg-[var(--main-bg)]
                p-5 pt-[30px]
                -mt-[2px]
                -mb-5
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
    );
}

export default Footer