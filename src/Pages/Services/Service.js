import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ course }) => {
    const { title, price, details, Ratings, image } = course;

    return (
        <Link to='/details' class="block rounded-lg p-4 shadow-xl">
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
                        <p>{details.slice(0, 100) + '...'}</p>
                    </div>
                </dl>

                <div className='mt-3 flex '>
                    <div className=' text-indigo-400'>Ratings : {Ratings}</div>

                </div>
            </div>
        </Link>
    )
};

export default Service;