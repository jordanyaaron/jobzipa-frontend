import React from "react";
import { Outlet } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import JobzipaLogo from '../assets/logos/jobzipa.png';
import DeviceSize from "../components/DeviceSize";
// import "../css/Post.css";
// import "../css/QuillEditor.css";
// import "../css/Cropper.css";
import "../css/DeviceSize.css"; // CSS file
import Footer from "../components/Foote";

const PostLayout = ({ darkMode, setDarkMode }) => (
    <Outlet />
)

export default PostLayout;