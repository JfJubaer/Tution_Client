import React from 'react';

const Success = () => {
    const students = [
        {
            name: 'Sunjid',
            bio: 'Cse,Buet'
        },
        {
            name: 'Oishee',
            bio: 'EEE,Buet'
        },
        {
            name: 'Jubaer',
            bio: 'Me,Buet'
        },
    ]
    return (
        <section className="bg-gray-600 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">Our Successful Students : </h2>


                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {
                        students.map((st, i) =>

                            <div key={i}
                                className="block bg-gray-900 rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"

                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 text-pink-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    />
                                </svg>

                                <h2 className="mt-4 text-xl font-bold text-white">{st.name}</h2>

                                <p className="mt-1 text-sm text-gray-300">
                                    {st.bio}
                                </p>
                                <p className="mt-1 text-sm text-gray-300">
                                    Review :  Some of the best online learning platforms include Coursera, Skillshare, Udemy, Codecademy, Edx, Pluralsight, Future Learn, and Moodle. Apart from online learning platforms, we also have online course platforms like LearnWorlds, Teachable, Thinkific, Kajabi, and Podia.
                                </p>
                            </div>

                        )
                    }




                </div>


            </div>
        </section>

    );
};

export default Success;