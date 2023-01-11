import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardItems from "../CardItems/CardItems";
import "./Services.css";

const Services = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://car-land-server-production.up.railway.app/product`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
    //'https://car-land-server-production.up.railway.app/products
  }, []);

  console.log(products);
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  });
  return (
    <div>
      <section className="container "></section>
      <div className="container overflow-hidden">
        <div className="row ">
          <div className="col-12">
            <p
              className="pt-5 pb-4 my-4 fs-3 shadow-lg  rounded-3 border-bottom text-center bg-light"
              data-aos="zoom-in"
            >
              Discover Your Favorite Luxury Car
            </p>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3  g-4 container mx-auto">
        {products.slice(0, 6).map((product) => (
          <CardItems key={product._id} product={product}></CardItems>
        ))}
        <Link to="/products " className="mx-auto bg-light font-bold text-dark ">
          <Button
            className="mx-auto bg-light font-bold text-dark "
            variant="outline-primary"
          >
            Manage Inventory
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
