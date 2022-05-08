import { faBank, faCar, faDollar, faHardDrive, faLightbulb, faMoneyCheck, faTools, faTractor, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Features.css'


const Features = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center my-5'>Our Features</h1>
            <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="col">
                    <div className="card  feature-div text-center bg-primary" data-aos="fade-right"
     data-aos-duration="1000">
                        <h4 className='mt-4'><FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon></h4>
                        <h4 >Latest Technology</h4>
                        <div className="card-body">
                            <p className="card-title">We provide latest technology in our car like Advanced Driver Assistance Systems,
                                Automatic Emergency Braking,
                                Connected Mobile Apps/Digital Key,
                                Teen Driver Tech.</p>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card  feature-div text-center bg-success" data-aos="fade-down"
     data-aos-duration="1000">
                        <h4 className='mt-4'><FontAwesomeIcon icon={faTruckFast}></FontAwesomeIcon></h4>
                        <h4 >Quick Delivery</h4>
                        <div className="card-body">
                            <p className="card-title">We provide quick delivery within 3 days to our customers.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card   feature-div  text-center bg-danger" data-aos="fade-left"
     data-aos-duration="1000">
                        <h4 className='mt-4'><FontAwesomeIcon icon={faTools}></FontAwesomeIcon></h4>
                        <h4 >Repairing Benefit</h4>
                        <div className="card-body">
                            <p className="card-title">We provide latest technology in our car like Advanced Driver Assistance Systems,
                                Automatic Emergency Braking,
                                Connected Mobile Apps/Digital Key.
    </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card   feature-div text-center bg-warning" data-aos="fade-right"
     data-aos-duration="1000">
                        <h4 className='mt-4' ><FontAwesomeIcon icon={faDollar}></FontAwesomeIcon></h4>
                        <h4 >Reasonable Price</h4>
                        <div className="card-body ">
                            <p className="card-title">We provide latest technology in our car like Advanced Driver Assistance Systems,
                                Automatic Emergency Braking,
                                Connected Mobile  Teen Driver Tech.
                               </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card   feature-div text-center bg-color" data-aos="fade-up"
     data-aos-duration="1000">
                        <h4 className='mt-4' ><FontAwesomeIcon icon={faCar}></FontAwesomeIcon></h4>
                        <h4 >Free Driving Trial</h4>
                        <div className="card-body ">
                            <p className="card-title ">We provide latest technology in our car like Advanced Driver Assistance Systems,
                                Automatic Emergency Braking,
                                Connected Mobile Apps/Digital Key,
                                Teen Driver Tech.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card   feature-div text-center bg-info" data-aos="fade-left"
     data-aos-duration="1000">
                        <h4 className='mt-4'><FontAwesomeIcon icon={faBank}></FontAwesomeIcon></h4>
                        <h4 >Low Interest Loan</h4>
                        <div className="card-body ">
                            <p className="card-title">We provide latest technology in our car like Advanced Driver Assistance Systems,
                                Automatic Emergency Braking,
                                Connected Mobile Apps/Digital Key,
                                Teen Driver Tech.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Features;