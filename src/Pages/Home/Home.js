import React from 'react';
import useTitle from '../../Title/useTitle';


const Home = () => {
    useTitle('Home');
    return (
        <div>
            <h2 className='text-center font-bold'>This is home</h2>
        </div>
    );
};

export default Home;