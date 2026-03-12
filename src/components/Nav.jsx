import React from "react";
import homeIcon from '../assets/icons/home.png';
import bookmarkIcon from '../assets/icons/bookmark.png';
import notificationIcon from '../assets/icons/notification.png';
import loginIcon from '../assets/icons/logout.png';
import lIcon from '../assets/logos/jobzipa.png';

import { Link } from 'react-router-dom';

function Navbar(props) {
    return(
        <ul>
            <li><Link to="/" className='nav-link'><img src={homeIcon} alt="" /><span>Home</span></Link></li>
            <li><Link to="/about" className='nav-link'><img src={bookmarkIcon} alt="" /><span>Bookmark</span></Link></li>
            <li><Link to="/contact" className='nav-link'><img src={notificationIcon} alt="" /><span>Notification</span></Link></li>
            <li><Link to="/faq" className='nav-link'><img src={loginIcon} alt="" /><span>Faq</span></Link></li>
            <li><Link to="/alogin" className='nav-link'><img src={loginIcon} alt="" /><span>Login</span></Link></li>
        </ul>
    );
}



export default Navbar