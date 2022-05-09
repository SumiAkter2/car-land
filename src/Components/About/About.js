import React from 'react';
import { Accordion } from 'react-bootstrap';
import ProgressChart from '../ProgressChart/ProgressChart';
import './About.css'


const About = () => {
    return (
        <div className='my-5 container about-div contact'>
           
            <div className="row ">
                <div className="col-lg-6 col-sm-12">
                    <h1>What Are We</h1>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header>What is the Road Price of the car?</Accordion.Header>
    <Accordion.Body>
    It matters simply because this is the amount you will have to pay to buy the car. This cost consists of the car’s price, along with the price of any accessories you have opted for, registration, insurance, extended warranty and handling charges.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What Is Covered Under Warranty?
</Accordion.Header>
    <Accordion.Body>
    Its very easy to say that it was 10 years Warranty.It will have to pay to buy the car. This cost consists of the car’s price, along with the price of any accessories you have opted for, registration, insurance, extended warranty.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Where Is The Nearest Service Centre ?

</Accordion.Header>
    <Accordion.Body>
    A lot of dealerships also double as service centres. However, in some cases, the dealership is separate from the service centre. In such a case, you should ask for the nearest service centre.
    </Accordion.Body>
 </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Has The Car Been Used As A Demo Car?


</Accordion.Header>
    <Accordion.Body>
    Sometimes, dealerships have to resort to selling demo cars due to a shortage of supply from the manufacturer. These cars, usually kept in mint condition, may suffer from issues ranging from exterior damage to mechanical issues.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <ProgressChart></ProgressChart>
                </div>
            </div>
        </div>
    );
};

export default About;