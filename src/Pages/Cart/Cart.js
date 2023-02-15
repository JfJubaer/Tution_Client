import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Cart = () => {
    const { user } = useContext(AuthContext);
    const items = useLoaderData();
    const prices = items.map(i => i.price);
    const total = prices.reduce(function (a, b) { return a + b; }, 0);
    const handleDelete = (id) => {
        fetch(`https://a-11-server-jfjubaer.vercel.app/cart/${id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => toast.success('item deleted'))
    }


    return (

        <div className="relative my-20 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only"></span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) =>
                        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.title}
                            </th>
                            <td className="px-6 py-4">
                                <img className='w-12' src={item.image} alt="" />
                            </td>

                            <td className="px-6 py-4">
                                {item.price}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button onClick={() => handleDelete(item._id)} className="font-medium text-red-600 dark:text-blue-500 ">Delete</button>
                            </td>
                        </tr>)}

                </tbody>
            </table>
            <p className='p-3 text-center text-xl'>total : {total} $   <button className='class="inline-block rounded bg-gradient-to-r from-pink-400 via-red-400 to-red-700 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"'>
                <Link to={`/payment/${user.email}`}>Proceed to pay</Link>
            </button></p>




        </div>

    );
};

export default Cart;