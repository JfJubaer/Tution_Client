import React, { useEffect, useState } from 'react';
import Review from './Review';




const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data)
            })
    }, [])

    return (
        <div className='grid lg:grid-cols-3 gap-10'>

            {reviews.map((i, rev) => <Review key={i} rev={rev}></Review>)}
        </div>
    );
};

export default Reviews;