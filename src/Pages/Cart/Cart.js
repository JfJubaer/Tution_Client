import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51MbPCuFJhUO1VhGGmIibaulG90q14OORD9zroa3X5HInVuv9Am8LuNiaGsoxx2qfCypWShiozicwK6PWTrznwc1j00MmxoTqf0');

const Cart = () => {
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

    if (total === 0) {
        return <div>
            <h2 className='text-5xl text-center text-red-500 my-20'>Nothing here buy some courses</h2>
        </div>
    }
    return (
        <div className="relative lg:container mx-auto my-20 overflow-x-auto shadow-md sm:rounded-lg">
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
            <p className='p-3 text-center text-xl'>total : {total} $   </p>
            <div className='lg:px-5 text-center'>
                <h2 className='text-5xl text-red-500 my-10'>Pay here</h2>
                <Elements stripe={stripePromise}>
                    <CheckoutForm total={total} />
                </Elements>
            </div>
        </div>
    );
};

export default Cart;