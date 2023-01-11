import React from "react";
import { useForm } from "react-hook-form";
// import "./AddItems.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import { FormControl, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    data.email = user?.email;
    console.log(data.email);
    console.log(data);
    const url = `https://car-land-server-production.up.railway.app/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        e.target.reset();
        alert("Added New Item");
        console.log(toast);
      });
  };
  return (
    <div className="container mx-auto">
      <div className="fs-3 fw-bold text-uppercase ">Add Your Product :</div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Product Name"
            required
            {...register("name", { maxLength: 20 })}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Price"
            type="number"
            required
            {...register("price")}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Quantity"
            type="number"
            required
            {...register("quantity")}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Description"
            required
            {...register("description")}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Photo Url"
            type="text"
            required
            {...register("img")}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            p
            placeholder="Supplier Name"
            type="Name"
            required
            {...register("supplier")}
          />
        </InputGroup>

        <Button type="submit" variant="outline-dark">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddItem;
