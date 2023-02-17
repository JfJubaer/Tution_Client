import React from 'react';
import { FaPeopleCarry } from 'react-icons/fa';

const GaurdiansReview = () => {
    return (
        <div>
            <div className=" lg:flex mx-auto my-10 ">
                <details
                    className="group h-52 border-l-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                    open
                >
                    <summary className="flex items-center justify-between cursor-pointer">
                        <h2 className="text-lg font-medium text-gray-900">
                            <FaPeopleCarry /> In Mr Alamgir's thought :
                        </h2>

                        <span
                            className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Some of the best online learning platforms include Coursera, Skillshare, Udemy, Codecademy, Edx, Pluralsight, Future Learn, and Moodle.
                    </p>
                </details>

                <details
                    className="group h-52 lg:ml-5 border-l-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                    open
                >
                    <summary className="flex items-center justify-between cursor-pointer">
                        <h2 className="text-lg font-medium text-gray-900">
                            <FaPeopleCarry /> In Mr Jabed's thought :
                        </h2>

                        <span
                            className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Some of the best online learning platforms include Coursera, Skillshare, Udemy, Codecademy, Edx, Pluralsight, Future Learn, and Moodle.
                    </p>
                </details>
            </div>

        </div>
    );
};

export default GaurdiansReview;