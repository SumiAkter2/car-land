import React from 'react';
import'./CardItems.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardItems = (props) => {
    const { name, picture, price,description,quantity } = props.item;
    return (
        <div>
            <div>
               
            <div className="col container items">
                    <div className="card  h-100 border-0 " >
                            <img  src={picture} className="card-img-top " data-aos="flip-left" alt="..."/>
                                <div className="card-body ">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{description}</p>
                               <h5>{price}</h5>
                               <p>Quantity: {quantity}</p>
                                </div>
                                <div className="card-footer border-0">
                                   <button className='btn btn-primary'>Submit</button>
                                </div> 
                           </div>
                           </div>
        </div>
                        
           
        </div>
    );
};

export default CardItems;