import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faContactBook,
  faGlobe,
  faMailBulk,
  faPhone,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Contact.css";
import Spinner from "../Spinner/Spinner";
const Contact = () => {
  return (
    <div>
      <div className="my-5 contact">
        <h1 className="my-5 ps-2 text-center">
          <FontAwesomeIcon icon={faContactBook}></FontAwesomeIcon> Contact Us
        </h1>

        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 g-lg-3 mx-auto">
            <div
              className="col "
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="p-3 border bg-light text-center">
                <h4 className="d-flex justify-content-center">
                  <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>ShowRoom
                </h4>
                <address>0/2 street road,US</address>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="p-3 border bg-light text-center">
                <h4 className="d-flex justify-content-center">
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>Phone
                </h4>
                <p>980-45-678</p>
              </div>
            </div>
            <div
              className="col"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="p-3 border bg-light text-center">
                <h4 className="d-flex justify-content-center text-center">
                  <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>Web
                </h4>
                <p className="text-danger">www.thecarland.com</p>
              </div>
            </div>

            <div
              className="col"
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="p-3 border bg-light text-center">
                <h4 className="d-flex justify-content-center text-center">
                  <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>Email
                </h4>
                <p className="text-danger">thecarland@gamil.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
