import React from 'react';

import ExecutiveTeam from '../ExecutiveTeam/ExecutiveTeam';
import FeedBack from '../FeedBack/FeedBack';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Services></Services>
            <ExecutiveTeam></ExecutiveTeam>
            {/* <FeedBack></FeedBack> */}
        </div>
    );
};

export default Home;