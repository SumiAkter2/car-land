import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import Inventory from "./Inventory";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://car-land-server-production.up.railway.app/product`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
    //'https://car-land-server-production.up.railway.app/products
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://car-land-server-production.up.railway.app/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((item) => item._id !== id);
          setProducts(remaining);
        });
    }
  };
  return (
    <div className="container ">
      <h1 className=" my-5">Our Collection</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <Inventory
              key={p._id}
              p={p}
              handleDelete={handleDelete}
            ></Inventory>
          ))}
        </tbody>
      </Table>
    </div>

    // </div>
  );
};

export default Shop;
