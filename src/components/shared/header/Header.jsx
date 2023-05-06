import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Button, Spinner } from "flowbite-react";
import "./Header.css";
const Header = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [isUserOpen, setIsUserOpen] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  // console.log('loading :>> ', loading);

  const navigate = useNavigate();
  const location = useLocation();
  // console.log("login page location", location);
  const from = location.state?.from?.pathname ;
  // const from = location?.pathname;
  console.log("from :>> ", location);
  useEffect(() => {
    // console.log("from :>> ", from);
    if (from) {
      navigate(from, { replace: true });
    }
  }, [user]);

  if (!loading) {
    return (
      <div className="">
        <div className="absolute top-0 left-0  ">
          <Button>
            <Spinner aria-label="Spinner button example" />
            <span className="pl-3">Loading...</span>
          </Button>
        </div>
      </div>
    );
  }

  const handleLogOut = () => {
    setIsUserOpen(!isUserOpen);
    logOut()
      .then(() => {
        // Sign-out successful.
        console.log("log out successful.");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // console.log("user :>> ", user);
  // console.log(displayName,email,photoURL);
  return (
    <div className="mb-12 ">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 py-5 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 border ">
          <Link to="/" className="flex items-center">
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
              Chefe Hunter
            </span>
          </Link>

          <div className="flex relative items-center md:order-2">
            {user ? (
              <button
                onMouseOver={() => setIsUserOpen(!isUserOpen)}
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src={user?.photoURL}
                  alt="user photo"
                />
              </button>
            ) : (
              <Link
                to="login"
                className="block  py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Sign in
              </Link>
            )}
            {/* <!-- Dropdown menu --> */}
            {/* user */}
            <div
              className={`z-50  absolute top-7 sm:top-5 right-14 sm:right-7 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
                isUserOpen && "hidden"
              }`}
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  {user?.displayName || "don't have name"}
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  {user?.email}
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Dashboard
                  </p>
                </li>
                <li>
                  <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Settings
                  </p>
                </li>
                <li>
                  <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Earnings
                  </p>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    {user && <span>Sign out</span>}
                  </button>
                </li>
              </ul>
            </div>

            {/* menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex  items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* nav link */}

          <div
            className={`items-center  justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen && "hidden"
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="blogs"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
