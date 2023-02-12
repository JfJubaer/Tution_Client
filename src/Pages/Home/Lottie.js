import React from 'react';
import "@lottiefiles/lottie-player";

const Lottie = () => {
    return (
        <div className='w-1/2 h-1/2 mx-auto mb-10'>
            <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets1.lottiefiles.com/packages/lf20_awP420Zf8l.json"
            >
            </lottie-player>
            <h3 className='text-5xl text-center font-extrabold text-indigo-700'>
                No need to run for coaching anymore <br />
                Services are now at your hands
            </h3>
        </div >
    );
};

export default Lottie;