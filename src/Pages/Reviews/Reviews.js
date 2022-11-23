import React, { useEffect, useState } from 'react';
import Review from './Review';




const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://a-11-server-lyart.vercel.app/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)

            })
    }, [])

    return (
        <div className='grid lg:grid-cols-3 gap-10'>


            {reviews.map((rev, i) => <Review key={i} rev={rev}></Review>)}
        </div>
    );
};

export default Reviews;