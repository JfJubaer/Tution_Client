
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

import useTitle from "../../Title/useTitle";




const Enroll = () => {
    useTitle('Enroll');

    const { createUser, updateUserProfile, } = useContext(AuthContext);
    const navigate = useNavigate();




    const handleRegister = (event) => {
        event.preventDefault();
        console.log('clk')
        const form = event.target;

        const email = form.email.value;
        const pass = form.pass.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const profile = {
            displayName: name, photoURL: photoURL
        }
        console.log(email, pass);
        createUser(email, pass)
            .then(result => {
                form.reset();

                toast.success('Successfully Registered');
                handleUpdate(profile);
                navigate('/');

            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleUpdate = (profile) => {
        updateUserProfile(profile)
            .then(() => { })
            .catch((error) => { console.log(error) })
    }

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Get started today
                </h1>

                <form onSubmit={handleRegister} className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl" action="">
                    <p className="text-lg font-medium">Enroll now!!!</p>

                    <div>
                        <label for="email" className="text-sm font-medium">Name</label>

                        <div className="relative mt-1">
                            <input
                                type="text"

                                name="name"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter Name"
                            />

                            <span className="absolute inset-y-0 right-4 inline-flex items-center">

                            </span>
                        </div>
                    </div>
                    <div>
                        <label for="email" className="text-sm font-medium">Photo URL</label>

                        <div className="relative mt-1">
                            <input
                                type="text"

                                name="photoURL"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter Photo URL"
                            />

                            <span className="absolute inset-y-0 right-4 inline-flex items-center">


                            </span>
                        </div>
                    </div>
                    <div>
                        <label for="email" className="text-sm font-medium">Email</label>

                        <div className="relative mt-1">
                            <input
                                type="email"

                                name="email"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />

                            <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label for="password" className="text-sm font-medium">Password</label>

                        <div className="relative mt-1">
                            <input
                                type="password"

                                name="pass"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />

                            <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">Enroll</button>
                </form>
            </div>

        </div>
    );
};

export default Enroll;