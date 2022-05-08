import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import CardItems from '../CardItems/CardItems';
import UseItems from '../Hooks/UseItems';
import './Services.css'

const Services = () => {
    const [items] = UseItems();
    useEffect(()=>{
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        })
    })
    return (
        <div>
            <div className="container overflow-hidden">
                <div className="row ">
                    <div className="col-12">
                        <p className="pt-5 pb-4 my-4 fs-3 shadow-lg  rounded-3 border-bottom text-center bg-light" data-aos="zoom-in">Discover Your Favorite Luxury Car</p>
                    </div>
                </div>
            </div>


            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4 container mx-auto">

                {
                    items.slice(0, 6).map(item => <CardItems
                        key={item._id}
                        item={item}

                    ></CardItems>)
                }
            </div>
        </div>

    );
};

export default Services;