import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Reviews from '../Reviews/Reviews';
import Adreview from '../Reviews/Adreview';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const ServiceDetails = () => {
    const { title, price, details, Ratings, image } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleAddtoCart = () => {
        const item = {
            title,
            price,
            image,
            user: user.email
        }
        fetch('https://a-11-server-jfjubaer.vercel.app/cart', {
            method: 'post',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('item added')
            })
    }

    return (

        <div className='container mx-auto my-10'>

            <PhotoProvider>
                <PhotoView
                    src={image}
                >
                    <img
                        alt="Home"
                        src={image}
                        className="h-56 w-full rounded-md object-cover"
                    />
                </PhotoView>
            </PhotoProvider>

            <div className="mt-2">
                <dl>
                    <div>
                        <dt className="sr-only">Price</dt>

                        <dd className="text-sm text-indigo-400">${price}</dd>
                    </div>

                    <div>
                        <dt className="sr-only">Address</dt>

                        <dd className="font-medium  text-indigo-600">{title}</dd>
                    </div>
                    <div>
                        <p>{details}</p>
                    </div>
                </dl>

                <div className='mt-3 flex '>
                    <div className=' flex justify-evenly items-center text-indigo-400'>Ratings : {Ratings}  <FaStar /></div>

                </div><br />
                <button onClick={handleAddtoCart}
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 lg:mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br  from-red-600 to-red-500 group-hover:from-red-600  group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" >
                    <span className=" w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Add to cart
                    </span>
                </button>
                <br />

            </div>

            <br />
            <br />

            {user ? <Adreview title={title}></Adreview> :
                <Link to='/login'>
                    <button className=" w-full relative inline-flex items-center justify-center p-0.5 mb-2 lg:mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className=" w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Login to add review
                        </span>
                    </button>
                </Link>
            }
            <br /><br />
            <h2 className='text-5xl text-indigo-700 text-center mt-10 font-extrabold'>Our students Review</h2>
            <Reviews title={title}></Reviews>

        </div>

    );
};

export default ServiceDetails;