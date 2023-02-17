import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Title/useTitle';
import MyReview from './MyReview';

const MyReviews = () => {
    useTitle("My Reviews");
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    // console.log(reviews);
    useEffect(() => {
        fetch(`https://a-11-server-jfjubaer.vercel.app/myreviews/${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user])
    return (
        <div className='grid lg:grid-cols-3'>
            {reviews.length === 0 && <h2 className='p-10'>No reviews</h2>}
            {reviews?.map((r, i) => <MyReview key={i} r={r}></MyReview>)}
        </div>
    );
};

export default MyReviews;