import { Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import useTitle from '../../Title/useTitle';

import Service from './Service';

const Services = () => {
    useTitle("Services");
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch(`https://a-11-server-lyart.vercel.app/services`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    if (!courses) {
        return <Spinner></Spinner>
    }
    return (

        <div className='grid lg:grid-cols-3 container mx-auto gap-10 my-20'>

            {courses?.map((course, i) =>
                <Service
                    course={course}
                    key={i}
                >
                </Service>
            )}

        </div>

    );
};

export default Services;