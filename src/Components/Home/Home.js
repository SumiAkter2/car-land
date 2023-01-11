import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import ExecutiveTeam from "../ExecutiveTeam/ExecutiveTeam";
import Features from "../Features/Features";
import Services from "../Services/Services";


const Home = () => {
  return (
    <div>
    
      <Services></Services>
      <ExecutiveTeam></ExecutiveTeam>
      <About></About>
      <Features></Features>
      <Contact></Contact>
    </div>
  );
};

export default Home;
