import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return <div>
      <h1>This Page not found</h1>
      <Link to="/">Go Back Home</Link>
  </div>
};

export default NotFound;