import React from 'react';
import { Link } from 'react-router-dom';
import AdminLogin from './AdminLogin';
// import GeustPost from './Geust';
// import TypicalPost from './Typical';

const Login = () => {
  const userRole = 'admin'
//   localStorage.getItem("role");
  if (userRole == 'admin') {
    return <AdminLogin/>
  }
 
};

export default Login;