import React from 'react';
import './CardItems.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const CardItems = (props) => {
    const { name, picture, price, description, quantity,suppliername} = props.item;
    const handleToCart = () => {
        console.log('allah');
    }
    return (
        <div>
            <div>

                <div className="col container items">
                    <div className="card  h-100 border-0 " >
                        <img src={picture} className="card-img-top " data-aos="flip-left" alt="..." />
                        <div className="card-body ">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <h5>{price}</h5>
                            <p>Quantity: {quantity}</p>
                            <p>supplier Name: {suppliername}</p>
                        </div>
                        <div className="card-footer border-0">
                            <Link to='/login' ><button onClick={handleToCart} className='btn btn-primary'> Update </button> </Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CardItems;