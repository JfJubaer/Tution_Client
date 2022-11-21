import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Adreview from '../Reviews/Adreview';

const ServiceDetails = () => {
    const { title, price, details, Ratings, image } = useLoaderData();

    return (

        <div className='container mx-auto my-10'>

            <img
                alt="Home"
                src={image}
                class="h-56 w-full rounded-md object-cover"
            />

            <div class="mt-2">
                <dl>
                    <div>
                        <dt class="sr-only">Price</dt>

                        <dd class="text-sm text-indigo-400">${price}</dd>
                    </div>

                    <div>
                        <dt class="sr-only">Address</dt>

                        <dd class="font-medium  text-indigo-600">{title}</dd>
                    </div>
                    <div>
                        <p>{details}</p>
                    </div>
                </dl>

                <div className='mt-3 flex '>
                    <div className=' flex justify-evenly items-center text-indigo-400'>Ratings : {Ratings}  <FaStar /></div>

                </div>

                <br />

            </div>

            <br />
            <br />

            <Adreview></Adreview>
        </div>

    );
};

export default ServiceDetails;