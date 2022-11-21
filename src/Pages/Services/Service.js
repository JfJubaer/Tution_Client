import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Service = ({ course }) => {
    const { _id, title, price, details, Ratings, image } = course;

    return (
        <div class="block rounded-lg p-4 shadow-xl">
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
                    <div className=' flex justify-evenly items-center text-indigo-400'>Ratings : {Ratings}  <FaStar /></div>

                </div>

                <br />
                <Link to={`/details/${_id}`}>
                    <button class=" w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span class=" w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Details
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    )
};

export default Service;