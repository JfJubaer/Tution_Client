import React from 'react';
import { Link } from 'react-router-dom';

const Bio = () => {
    return (
        <section className="bg-gray-400 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div
                        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                    >
                        <img
                            alt="Party"
                            src="https://cdn.elearningindustry.com/wp-content/uploads/2019/10/professional-development-tools-for-teachers.jpg"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Our Honorable Teacher : <br />
                            Ratul Master
                        </h2>

                        <p className="mt-4 text-white">
                            College : Notredam <br />
                            Varsity : Buet <br />
                            Department : Cse <br />
                            Teacher's Objective :  Some of the best online learning platforms include Coursera, Skillshare, Udemy, Codecademy, Edx, Pluralsight, Future Learn, and Moodle. Apart from online learning platforms, we also have online course platforms like LearnWorlds, Teachable, Thinkific, Kajabi, and Podia.

                        </p>

                        <Link
                            to='/services'
                            className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        >
                            <span className="text-sm font-medium"> Get Started </span>

                            <svg
                                className="ml-3 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Bio;