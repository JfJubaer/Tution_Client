import React, { useEffect, useState } from 'react';
import Review from './Review';




const Reviews = ({ title }) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${title}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)

            })
    }, [title])

    return (
        <div className='grid lg:grid-cols-3 gap-10'>


            {reviews.map((rev, i) => <Review key={i} rev={rev}></Review>)}
        </div>
    );
};

export default Reviews;