import React from 'react';
import About from '../About/About';

import ExecutiveTeam from '../ExecutiveTeam/ExecutiveTeam';

import Navbar from '../Navbar/Navbar';
// import ProgressChart from '../ProgressChart/ProgressChart';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Services></Services>
            <ExecutiveTeam></ExecutiveTeam>
         {/* <ProgressChart></ProgressChart> */}
         <About></About>
        </div>
    );
};

export default Home;