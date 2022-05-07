
import React from 'react';
import Navbar from '../Navbar/Navbar';
import './NotFound.css';


const NotFound = () => {
    return (
      <div>
         
            <div className='notfound-div'>
        
        <div className='notfound-text fs-bold'>
               <h1>404 </h1>
           <h1>Sorry not found !!!</h1>
          
         <img className='emoji' src="sad emoji.png" alt="" />
         </div>
     
           </div>
      </div>
    );
};

export default NotFound;