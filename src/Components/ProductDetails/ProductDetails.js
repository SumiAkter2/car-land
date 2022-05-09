import { faAdd, faCartPlus, faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Table } from 'react-bootstrap';

const ProductDetails = (props) => {
    const { name, picture, price, description, quantity, suppliername } = props.item;
    return (
        <div className='container '>
            <Table striped bordered hover variant="dark">
            <tbody>
                
                    <tr>
                       
                        <th>Product Name</th>
                        <th>Supplier Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
               

                <tr >

                    <td>{name}</td>
                    <td>{suppliername}</td>
                    <td>{price}</td>
                    <td>{quantity}</td>
                    <td><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></td>
                    <td><FontAwesomeIcon icon={faInfo}></FontAwesomeIcon></td>
                   

                </tr>
               
            </tbody>
        </Table>
        </div >
    );
};

export default ProductDetails;