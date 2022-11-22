import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Title/useTitle';
import MyReview from './MyReview';

const MyReviews = () => {
    useTitle("My Reviews");
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user])
    return (
        <div>
            {reviews.length === 0 && <h2 className='p-10'>No reviews</h2>}
            {reviews?.map((i, r) => <MyReview key={i} r={r}></MyReview>)}
        </div>
    );
};

export default MyReviews;