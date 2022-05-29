import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
// import './ProductDetail.css'

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://protected-sea-84820.herokuapp.com/product/${productId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId, product]);

    // quantity operations     
    const handleDelivered = (e) => {
        // console.log('hello');
        e.preventDefault();
        let quantity = product?.quantity;
        quantity = parseInt(quantity) - 1;

        // console.log(quantity);
        const url = `https://protected-sea-84820.herokuapp.com/quantity/${productId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ quantity }),
        })
            .then((res) => res.json())
            .then((data) => {
                setProduct({ ...data, quantity: quantity });
                toast("Successfully Delivered");
            });
    };

    //Add quantity
    const handleUpdateQuantity = (e) => {
        e.preventDefault();
        let quantity = product?.quantity;
        const addQuantity = parseInt(e.target.quantity.value);
        if (quantity < 0) {
            return alert("Quantity can not be less then zero");
        }
        if (addQuantity > 0) {
            quantity = parseInt(quantity) + addQuantity;
            const updateInventory = { quantity };
            console.log(updateInventory);
            const url = `https://protected-sea-84820.herokuapp.com/quantity/${productId}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updateInventory),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    toast("quantity Updated");
                    e.target.reset();
                });
        } else {
            alert("Please insert positive number of quantity");
            e.target.reset();
            return;
        }
    };




    return (
        <div>
            {/* className="container" */}
            <div className='d-flex px-5 my-4 mx-auto'>
                <img src={product.picture} style={{ 'width': '250px' }}
                    alt="" />
                <div className='fs-5 ps-4 '>
                    <p className='fs-4'>{product.description} </p>
                    <p>{product.name} </p>
                    <p>{product.price} </p>
                    <p>
                        <small>Quantity: <strong>{product.quantity}</strong></small>
                    </p>
                    <p>
                        <small>Seller : {product.suppliername}</small>
                    </p>
                    <form onSubmit={handleUpdateQuantity} className="mb-3 d-flex ">
                        <input
                            className=""
                            type="number"
                            name="quantity"
                            placeholder="Your Quantity"
                        />
                        <button type="submit" className="add-btn">
                            Add
                        </button>
                    </form>
                    <button
                        onClick={handleDelivered}
                        className="btn-update text-decoration-none "
                    >
                        Delivered
                    </button>

                </div>

            </div>
            <div className='ms-5'>
                <Link to='/products ' className='mx-auto bg-light font-bold text-dark ' >
                    <Button className='mx-auto bg-light font-bold text-dark ' variant="outline-primary">Manage Inventory</Button></Link>
            </div>


        </div>




    );
};

export default ProductDetail;