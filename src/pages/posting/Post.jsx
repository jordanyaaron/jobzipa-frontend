import React from 'react';
import { Link } from 'react-router-dom';
import AdminPost from './Admin';
import GeustPost from './Geust';
import TypicalPost from './Typical';
import Posting from './Posting';

const PostJob = () => {
  const userRole = 'd'
//   localStorage.getItem("role");
  if (userRole == 'd') {
    return <AdminPost/>
  }
  if (userRole == 'user') {
    return <TypicalPost/>
  }
    return <GeustPost/>
 
};

export default PostJob;