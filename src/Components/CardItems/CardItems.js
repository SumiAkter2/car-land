import React from 'react';
import './CardItems.css';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const CardItems = (props) => {
    const { name, picture, price, _id, description, quantity, suppliername } = props.product;

    const navigate = useNavigate();

    const handleToProduct = id => {
        navigate(`/products/${id}`);

    }
    return (
        <div className="col container items">
            <div className="card  h-100 border-0 " >
                <img src={picture} className="card-img-top " data-aos="flip-left" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"> <small>{description}</small> </p>
                    <h5>{price}</h5>
                    <p>Quantity: {quantity}</p>
                    <p>supplier Name: {suppliername}</p>
                </div>
                <div className="card-footer border-0">
                    <button
                        onClick={() => handleToProduct(_id)} className='btn btn-primary'> Update </button>
                </div>
            </div>
        </div>

    );
};

export default CardItems;