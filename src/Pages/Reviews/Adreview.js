import React from 'react';

const Adreview = () => {
    return (
        <div>
            <div>

                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex justify-end px-4 pt-4">


                    </div>
                    <div class="flex flex-col items-center pb-10">
                        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="" alt="Bonnie" />
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <p class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</p>
                        <div class="flex mt-4 space-x-3 md:mt-6">

                        </div>
                    </div>
                </div>

            </div>

            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            <button>
                add Review
            </button>

        </div>
    );
};

export default Adreview;