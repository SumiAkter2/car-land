import React from 'react';
import ExecutiveTeam from '../ExecutiveTeam/ExecutiveTeam';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Services></Services>
            <ExecutiveTeam></ExecutiveTeam>
        </div>
    );
};

export default Home;