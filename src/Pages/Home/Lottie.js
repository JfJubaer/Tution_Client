import React from 'react';
import "@lottiefiles/lottie-player";
import { Link } from 'react-router-dom';

const Lottie = () => {
    return (
        <div className='w-auto mx-auto mb-10' >
            <header className="bg-white dark:bg-gray-900">
                <nav className="">
                    <div className="container flex items-center justify-between px-6 py-3 mx-auto">



                    </div>
                </nav>

                <div className="container px-6 py-16 mx-auto">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Subscribe To The <span className="text-blue-500">Tution-point</span></h1>

                                <p className="mt-3 text-gray-600 dark:text-gray-400">be the first to knows when our <span className="font-medium text-blue-500">Brand</span> is live</p>

                                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                                    <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />

                                    <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        <Link to={'/enroll'}>Subscribe</Link>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <lottie-player
                                autoplay
                                loop
                                mode="normal"
                                src="https://assets1.lottiefiles.com/packages/lf20_awP420Zf8l.json"
                            >
                            </lottie-player>
                        </div>
                    </div>
                </div>
            </header>


            <h3 className='text-5xl text-center font-extrabold text-indigo-700'>
                No need to run for coaching anymore <br />
                Services are now at your hands
            </h3>

        </div >
    );
};

export default Lottie;