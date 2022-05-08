
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import './ExecutiveTeam.css'; 



const ExecutiveTeam = () => {
  
    return (
     <div className='mt-5'>
            <h1 className='text-center text-primary'>Our Team Members</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 container mx-auto my-5">
            
        <div className="col" data-aos="fade-right">
          <div className="card " >
            <img src="businessman1.jpg" className="card-img-top" alt="..."/>
            <div className="card-footer">
       
       </div>
            <div className="card-body bg-color">
              <h5 className="card-title">Mr. Omar Prokash</h5>
              <p className="card-text">CEO</p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-down">
          <div className="card ">
            <img src="businessman3.jpg" className="card-img-top" alt="..."/>
            <div className="card-footer">
       
       </div>
            <div className="card-body bg-color">
              <h5 className="card-title">Maria Kour</h5>
              <p className="card-text">Director</p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-up">
          <div className="card ">
            <img src="businessman2.jpg" className="card-img-top" alt="..."/>
            <div  className="card-footer">
       
       </div>
            <div className="card-body bg-color">
              <h5 className="card-title">Jack Son</h5>
              <p className="card-text">Work Shop Manager</p>
            </div>
          </div>
        </div>
        <div className="col " data-aos="fade-left">
          <div className="card ">
            <img src="businessman4.jpg" className="card-img-top" alt="..."/>
            <div  className="card-footer">
       
       </div>
       
      
            <div className="card-body bg-color">
              <h5 className="card-title">Armerina Nisha</h5>
              <p className="card-text">Work Shop Manager</p>
            </div>
            </div>
      </div>
      </div>
          
     </div>
     
    );
};

export default ExecutiveTeam;