import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyReview = ({ r }) => {
    const { name, review, photo, _id } = r;
    function handleDelete(id) {
        fetch(`http://localhost:5000/reviews/${id}`, {
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
            <div class="m-10 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="flex justify-end px-4 pt-4">


                </div>
                <div class="flex flex-col items-center pb-10">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={photo} alt="Bonnie" />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Review  : {review}</p>
                    <div class="flex mt-4 space-x-3 md:mt-6">

                    </div>
                    <Link to={`/edit/${_id}`}><button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit</button></Link><br />
                    <button onClick={() => handleDelete(_id)} type="button" class="text-white bg-gradient-to-br from-purple-600 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                </div>
            </div>
        </div >
    );
};

export default MyReview;