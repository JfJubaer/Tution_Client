import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51MbPCuFJhUO1VhGGmIibaulG90q14OORD9zroa3X5HInVuv9Am8LuNiaGsoxx2qfCypWShiozicwK6PWTrznwc1j00MmxoTqf0');

const Payment = () => {
    const items = useLoaderData();
    const prices = items.map(i => i.price);
    const total = prices.reduce(function (a, b) { return a + b; }, 0);
    return (
        <div className='m-10 text-center'>
            <h2 >Pay  now {total}$</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm total={total} />
            </Elements>
        </div>
    );
};

export default Payment;