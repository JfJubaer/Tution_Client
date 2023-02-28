import React, { useEffect, useState } from 'react';
import useTitle from '../../Title/useTitle';
import Banner from './Banner';
import Bio from './Bio';
import Success from './Success';
import Service from '../Services/Service';
import { Link } from 'react-router-dom';
import Lottie from './Lottie';
import GaurdiansReview from './GaurdiansReview';
import Gaol from './Gaol';
import Blogg from './Blogg';



const Home = () => {
    useTitle('Home');
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch(`https://a-11-server-jfjubaer.vercel.app/services`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div >
            <Banner></Banner>
            <h2 className='text-5xl text-indigo-700 text-center mt-10 font-extrabold'>Explore our latest courses</h2>
            <div className='grid lg:grid-cols-3 container mx-auto gap-10 mt-5'>
                {courses?.slice(0, 3).map((course, i) =>
                    <Service
                        course={course}
                        key={i}
                    >
                    </Service>
                )}
                <br />
                <br />
                <div className='mx-auto'>
                    <Link to='/services'>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Show All
                        </button>
                    </Link>
                </div>
            </div>
            <Lottie></Lottie>
            <Success></Success>
            <Bio></Bio>
            <h2 className='text-5xl text-indigo-700 text-center mt-10 font-extrabold'>See what our parents thoughts about us</h2>
            <GaurdiansReview></GaurdiansReview>
            <Gaol></Gaol>
            <Blogg></Blogg>

        </div>
    );
};

export default Home;