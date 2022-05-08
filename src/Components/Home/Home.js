import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';

import ExecutiveTeam from '../ExecutiveTeam/ExecutiveTeam';
import Features from '../Features/Features';
import LogIn from '../LogIn/LogIn';

import Navbar from '../Navbar/Navbar';
// import ProgressChart from '../ProgressChart/ProgressChart';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Services></Services>
            <ExecutiveTeam></ExecutiveTeam>
         <About></About>
         <Features></Features>
         <Contact></Contact>
       
        </div>
    );
};

export default Home;