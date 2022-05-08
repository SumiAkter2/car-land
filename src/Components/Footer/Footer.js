import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faFaceAngry, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';


const Footer = () => {
    const getYear = () => {
        return new Date().getFullYear();
    }

    return (
        <div className='pt-5 mt-3 bg-dark '>
            <div className="card-group ">
                <div className="card text-center card-1  border-0 bg-dark text-white">

                    <div className="card-body">
                        <h5 className="card-title">ABOUT THE CAR LAND</h5>

                        <ul className="card-text">
                            <li>Our staff</li>
                            <li>
                                Contact us
                            </li>
                            <li>Driving directions</li>
                            <li>Employment opportunities</li>
                        </ul>

                    </div>
                </div>
                <div className="card text-center card-1  border-0 bg-dark text-white">

                    <div className="card-body">
                        <h5 className="card-title"> THE CAR LAND INVENTORY TOOLS</h5>
                        <ul className="card-text">
                            <li>Price reduced used cars</li>
                            <li>
                                Used car finder
                            </li>
                            <li>Used cars under $10,000</li>
                            <li>Used cars over $20,000</li>
                            <li>Featured used cars</li>
                        </ul>

                    </div>
                </div>
                <div className="card  text-center card-1  border-0 bg-dark text-white">

                    <div className="card-body">
                        <h5 className="card-title">OUR SELSMAN</h5>
                        <ul className="card-text">
                            <li>Mr. Javed</li>
                            <li>Mr. Janayed</li>
                            <li>Mr. Minar</li>
                            <li>Mr. korim</li>
                           
                        </ul>

                    </div>
                </div>
            </div>
            {/* <div className='text-white py-3  text-center'> */}

            <div  className="card  text-white py-3  text-center bg-dark" >
                <div  className="row g-0 d-flex align-items-center">
                    <div  className="col-md-4 ">
                        <p>THE CAR LAND</p>
                        <p><small>ALL RIGHTS RESERVED &copy; {getYear()}</small></p>
                    </div>
                    <div  className="col-md-8 ">
                        <div  className="card-body ">
                       <p> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>980-123-45</p>
                        <br />
                        <p >
                        <FontAwesomeIcon icon={faGlobe }> </FontAwesomeIcon>www.thecarland.com
                        </p>

                        </div>
                    </div>
                </div>
            </div>
          
        </div>
        // </div>
    );
};


export default Footer;