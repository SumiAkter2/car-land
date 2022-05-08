import React from 'react';
import ProgressChart from '../ProgressChart/ProgressChart';
import './About.css'


const About = () => {
    return (
        <div className='my-5 container about-div'>
           
            <div className="row ">
                <div className="col-lg-6 col-sm-12">
                    <h1>What Are We</h1>
                    <div className="accordion " id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatum accusantium voluptates, quaerat voluptas tempore ut tempora, qui suscipit error veritatis. Voluptatem deserunt ipsa non optio! Ipsam deleniti maxime pariatur.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
        <strong>This is the second item's accordion Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aliquid dolor beatae alias quas culpa reiciendis expedita deserunt sint quidem.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
       It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <ProgressChart></ProgressChart>
                </div>
            </div>
        </div>
    );
};

export default About;