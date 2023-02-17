import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaCartArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/depositphotos_63590137-stock-illustration-blue-book-logo-vector.jpg'
import { AuthContext } from '../../Context/AuthProvider';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(() => { });
    toast.error("User logged out");
  };
  return (
    <header aria-label="Site Header" className="bg-white shadow-xl">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="flex items-center mr-5 text-indigo-600" to="/">
              <img src={img1} className='w-14' alt='' />
              <h2 className='text-3xl ml-5 font-mono font-extrabold'>Tution-Point</h2>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to='/'
                  >
                    Home
                  </Link>
                </li>




                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>

                {user
                  &&
                  <>
                    <li>
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75"
                        to='/adservice'
                      >
                        Add service
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75"
                        to='/myreviews'
                      >
                        My Reviews
                      </Link>
                    </li>

                  </>}

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/blogs"
                  >
                    Blog
                  </Link>
                </li>
                {
                  user &&
                  <li>
                    <Link to={`/cart/${user.email}`}>
                      <FaCartArrowDown className='w-6' /></Link>
                  </li>
                }
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {
              user ?
                <>
                  <div>
                    <img className='w-10' src={user?.photoURL} title={user?.displayName} alt='' />

                  </div>

                  <div>
                    <button
                      onClick={handleLogout}
                      className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                      aria-label='Log out'
                      title='Log out'>
                      Log out
                    </button>
                  </div>
                  <div>

                  </div>
                </>
                :
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    to='/login'
                  >
                    Login
                  </Link>

                  <div className="hidden sm:flex">
                    <Link
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600"
                      to='/enroll'
                    >
                      Enroll
                    </Link>
                  </div>
                </div>
            }


            <div className="block md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className='absolute z-20 top-0 left-0 w-full'>
                  <div className='p-5 bg-white border rounded shadow-sm'>
                    <div className='flex items-center justify-between mb-4'>
                      <div>
                        <a
                          href='/'

                          className='inline-flex items-center'>
                          <img
                            className='w-10 h-15'
                            src={img1}
                            alt='tution'
                          />
                          <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                            Tuition-Point
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label='Close Menu'
                          title='Close Menu'
                          className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                          onClick={() => setIsMenuOpen(false)}>
                          <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                            <path
                              fill='currentColor'
                              d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className='space-y-4'>
                        <li>
                          <Link
                            className="text-gray-500 transition hover:text-gray-500/75"
                            to='/'
                          >
                            Home
                          </Link>
                        </li>




                        <li>
                          <Link
                            className="text-gray-500 transition hover:text-gray-500/75"
                            to="/services"
                          >
                            Services
                          </Link>
                        </li>

                        {user
                          &&
                          <>
                            <li>
                              <Link
                                className="text-gray-500 transition hover:text-gray-500/75"
                                to='/adservice'
                              >
                                Add service
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="text-gray-500 transition hover:text-gray-500/75"
                                to='/myreviews'
                              >
                                My Reviews
                              </Link>
                            </li>
                          </>}

                        <li>
                          <Link
                            className="text-gray-500 transition hover:text-gray-500/75"
                            to="/blogs"
                          >
                            Blog
                          </Link>
                        </li>
                        {
                          user &&
                          <li>
                            <Link to={`/cart/:${user.email}`}>
                              <FaCartArrowDown className='w-6' /></Link>
                          </li>
                        }
                      </ul>
                      <br />
                      {
                        user ?
                          <>

                            <div>
                              <Link
                                onClick={handleLogout}
                                to='/'
                                className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                                aria-label='Log out'
                                title='Log out'>
                                Log out
                              </Link>
                            </div>
                            <div>

                            </div>
                          </>
                          :
                          <div className="sm:flex sm:gap-4">
                            <Link
                              className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                              to='/login'
                            >
                              Login
                            </Link>

                            <div className="hidden sm:flex">
                              <Link
                                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600"
                                to='/enroll'
                              >
                                Enroll
                              </Link>
                            </div>
                          </div>
                      }
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>

  );
};

export default NavBar;