import React from 'react';


const Review = ({ rev }) => {
    const { name, review, photo } = rev;

    return (


        <div className="m-10 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4">


            </div>
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={photo} alt="Bonnie" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                <p className="text-sm text-gray-500 dark:text-gray-400">Review  : {review}</p>


            </div>
        </div>


    );
};

export default Review;