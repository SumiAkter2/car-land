import React from 'react';
import { Table } from 'react-bootstrap';
import CardItems from '../CardItems/CardItems';
import UseItems from '../Hooks/UseItems';
import ProductDetails from '../ProductDetails/ProductDetails';

const Shop = () => {
    const [items] = UseItems();
    return (
        <div className='container contact'>
            <h1 className='text-center my-5'>Our Collection</h1>

            {/* <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4 container mx-auto"> */}
            <Table striped bordered hover variant="dark">
           <tbody>
                    {
                        items.map(item => <ProductDetails
                            key={item._id}
                            item={item}

                        ></ProductDetails>)
                    }
               </tbody>
         </Table>
        </div>

        // </div>
    );
};

export default Shop;