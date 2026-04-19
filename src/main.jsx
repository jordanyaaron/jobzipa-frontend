import React from "react";
import { createRoot , ReactDOM} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
)


