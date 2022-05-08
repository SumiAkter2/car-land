import React from 'react';
import CardItems from '../CardItems/CardItems';
import UseItems from '../Hooks/UseItems';

const Shop = () => {
    const [items]=UseItems();
    return (
        <div>
            <h1 className='text-center my-5'>Our Collection</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4 container mx-auto">
               
               {
                   items.map(item => <CardItems
                       key={item._id}
                       item={item}

                   ></CardItems>)
               }
           </div>

        </div>
    );
};

export default Shop;