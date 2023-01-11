import React from "react";
import "./CardItems.css";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const CardItems = (props) => {
  const { name, picture, price, _id, description, quantity, suppliername } =
    props.product;

  const navigate = useNavigate();

  const handleToProduct = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="col container items">
      <div className="border-primary border-bottom  h-100 border-0 ">
        <img
          src={picture}
          className="card-img-top "
          data-aos="zoom-in"
          alt="car-img"
        />
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <small>{description}</small>
          </p>
          <div className="d-flex justify-content-between">
            <h5>{price}</h5>
            <h5>Quantity: {quantity}</h5>
          </div>

          <p>supplier Name: {suppliername}</p>
        </div>
        <div className="card-footer border-0 m-3 w-100">
          <button
            onClick={() => handleToProduct(_id)}
            className="btn btn-primary"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
