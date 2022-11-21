import React, { useEffect, useState } from 'react';
import useTitle from '../../Title/useTitle';
import Banner from './Banner';
import Bio from './Bio';
import Success from './Success';
import Service from '../Services/Service';
import { Link } from 'react-router-dom';


const Home = () => {
    useTitle('Home');
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div >
            <Banner></Banner>
            <div className='grid lg:grid-cols-3 container mx-auto gap-10 my-20'>
                {courses.slice(0, 3).map((course, i) =>
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
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Show All
                        </button>
                    </Link>
                </div>



            </div>
            <Success></Success>
            <Bio></Bio>
        </div>
    );
};

export default Home;