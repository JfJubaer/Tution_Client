
import toast from 'react-hot-toast';

import useTitle from '../../Title/useTitle';

const Adservice = () => {

    useTitle("Add-Service");
    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const info = form.info.value;
        const rate = form.rate.value;
        const pic = form.pic.value;

        const Service = {
            title: name,
            details: info,
            Ratings: rate,
            image: pic,
            price

        };
        console.log(Service);
        fetch("http://localhost:5000/services", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(Service),
        })
            .then((res) => res.json())
            .then((data) =>
                toast.success("Successfully added service to the homepage")
            );
        form.reset();
    };



    return (
        <div>
            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Add new Service!</h1>


                    </div>

                    <form onSubmit={handleAddService} action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                        <div>
                            <label for="text" className="sr-only">Title</label>

                            <div className="relative">
                                <input
                                    name='name'
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter title"
                                    required
                                />

                            </div>
                        </div>
                        <div>
                            <label for="text" className="sr-only">Title</label>

                            <div className="relative">
                                <input
                                    type="text"
                                    name='pic'
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter Photo Url"
                                    required
                                />

                            </div>
                        </div>
                        <div>
                            <label for="text" className="sr-only">details</label>

                            <div className="relative">
                                <textarea id="message" name='info' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter details"
                                    required
                                ></textarea>

                            </div>
                        </div>

                        <div>
                            <label for="text" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    type="text"
                                    name='rate'
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter ratings"
                                    required
                                />

                            </div>
                        </div>
                        <div>
                            <label for="text" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    type="text"
                                    name='price'
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter price"
                                    required
                                />

                            </div>
                        </div>





                        <div className="flex items-center justify-between">


                            <button
                                type="submit"
                                className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                            >
                                Add service
                            </button>
                        </div>
                    </form>
                </div>

                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                        alt="Welcome"
                        src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section>

        </div>
    );
};

export default Adservice;