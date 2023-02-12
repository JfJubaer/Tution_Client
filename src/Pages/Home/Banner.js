import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <section className="bg-gray-400 text-white h-96">
            <div
                className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center"
            >
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                    >
                        “Opportunities don't happen,

                        <span className="sm:block">you create them.” </span>
                    </h1>



                    <div className="mt-8 flex  justify-center gap-4">
                        <Link
                            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            to="/services"
                        >
                            Get Started
                        </Link>

                        <Link
                            className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            to="/blogs"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Banner;