import React from "react";
import { Link } from 'react-router-dom';

const ErrorPage = () => {

     return (
          <div>
               <h1>this is the error page</h1>
               <button><Link to='/'>Return to Home</Link></button>
          </div>
     )
};

export default ErrorPage;