import React from "react";
// import './ShowMyItems.css'

const ShowMyitems = ({ item, handleDelete }) => {
  const { _id, name, price, picture, suppliername } = item;

  return (
    <div className="d-flex align-items-center justify-content-start allItem-info mt-4">
      <div className="items-img">
        <img className="w-25" src={picture} alt="" srcset="" />
      </div>
      <div>
        <h5 className="fw-bold">{name}</h5>
        <div className="d-flex align-items-center justify-content-center">
          <h5> $ {price}</h5>
          <button onClick={() => handleDelete(_id)}>Delete</button>
        </div>
        <h5>{suppliername}</h5>
      </div>
    </div>
  );
};

export default ShowMyitems;
