import React, { useEffect, useState } from 'react';
import useTitle from '../../Title/useTitle';
import Service from './Service';

const Services = () => {
    useTitle("Services")
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3 container mx-auto gap-10 my-20'>
            {courses.map((course, i) =>
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