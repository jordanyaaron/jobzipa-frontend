import React from "react";
import { useEffect , useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Toaster } from 'react-hot-toast'
import AppRoutes from './routes/AppRoutes'
import './css/QuillEditor.css'
// import './App.css'
import "./index.css";

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
     <Toaster position="top-right" />
      <AppRoutes setDarkMode={ setDarkMode } darkMode={darkMode} />
    </>
  )
}

export default App
