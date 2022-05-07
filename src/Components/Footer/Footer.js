import React from 'react';

const Footer = () => {
    const getYear = () => {
        return new Date().getFullYear();
    }

    return (
        <div className='pt-5 bg-dark'>
            <div className="card-group">
                <div className="card border-0 bg-dark text-white">

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
                <div className="card border-0 bg-dark text-white">

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
            <div className="card border-0 bg-dark text-white">

                <div className="card-body">
                    <h5 className="card-title">OUR SELSMAN</h5>
                    <ul className="card-text">
                        <li>Mr. Javed</li>
                        <li>Mr. Javeds</li>
                        <li>Mr. Javed</li>
                        <li>Mr. Javed</li>
                        <li>Mr. Javeded</li>
                        <li>Mr. Javed</li>
                        <li>Mr. Javed</li>
                        <li>Mr. Javedg</li>
                        <li>Mr. Javed</li>
                        <li>Mr. Javedss</li>
                    </ul>

</div>
                </div>
            </div>
            <div className='text-white py-3 text-center'>
                <p>ALL RIGHTS RESERVED &copy; {getYear()}</p>
            </div>
        </div>
    );
};

export default Footer;