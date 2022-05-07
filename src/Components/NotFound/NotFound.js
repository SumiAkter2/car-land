
import React from 'react';
import Navbar from '../Navbar/Navbar';
import './NotFound.css';


const NotFound = () => {
    return (
      <div>
          <Navbar></Navbar>
            <div className='notfound-div'>
        </div>
        <div className='notfound-text'>
               <h1>404 </h1>
           <h1>Sorry not found !!!</h1>
          
         <img className='emoji' src="sad emoji.png" alt="" />
 
     
           </div>
      </div>
    );
};

export default NotFound;