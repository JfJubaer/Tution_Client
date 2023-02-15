import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyReview = ({ r }) => {
    const { name, review, photo, _id } = r;
    function handleDelete() {
        fetch(`https://a-11-server-jfjubaer.vercel.app/reviews/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success("Review Deleted");
                }
            });
    }
    return (
        <div>
            <div className="lg:m-10 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">


                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={photo} alt="Bonnie" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Review  : {review}</p>
                    <div className="flex mt-4 space-x-3 md:mt-6">

                    </div>
                    <Link to={`/edit/${_id}`}><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit</button></Link><br />
                    <button onClick={handleDelete} type="button" className="text-white bg-gradient-to-br from-purple-600 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                </div>
            </div>
        </div >
    );
};

export default MyReview;