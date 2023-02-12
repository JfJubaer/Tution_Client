import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Edit = () => {

    const { name, review, _id } = useLoaderData();

    const handleEdit = (event) => {

        event.preventDefault();
        const form = event.target;
        const rvw = form.rvw.value;

        const Service = {
            review: rvw,
        };
        console.log(Service);
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(Service),
        })
            .then((res) => res.json())
            .then((data) =>
                toast.success("Successfully Updated")
            );
        form.reset();
    };


    return (
        <div>
            <form onSubmit={handleEdit} action="">
                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                <input name='rvw' id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={review}
                    required
                ></input>
                <br />
                <input
                    name='name'
                    type="text"
                    defaultValue={name}
                    readOnly
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Enter name"
                    required
                />
                <br /><br />
                <button type='submit' className=" w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className=" w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Update review
                    </span>
                </button>
            </form>
        </div>
    );
};

export default Edit;