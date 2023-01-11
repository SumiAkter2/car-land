import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CardItems from "../CardItems/CardItems";
import "./Services.css";

const Services = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const url = `https://car-land-server-production.up.railway.app/product`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
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
      <section></section>
      <div className="container overflow-hidden">
        <div className="row ">
          <div className="col-12">
            <p
              className="p-5  my-4 fs-3 shadow-lg  rounded-3 border-bottom text-center bg-light fs-bold text-xl"
              data-aos="zoom-in"
            >
              Discover Your Favorite Luxury Car
            </p>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2  row-cols-lg-4  g-4 container mx-auto">
        {products.slice(0, 4).map((product) => (
          <CardItems key={product._id} product={product}></CardItems>
        ))}
      </div>
      <div
        onClick={() => navigate("/products")}
        className=" d-flex justify-content-center my-5"
      >
        <Button
          className=" bg-light font-bold text-dark "
          variant="outline-primary"
        >
          Manage Inventory
        </Button>
      </div>
    </div>
  );
};

export default Services;
