import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const ChefeCard = ({ card }) => {
  // eslint-disable-next-line react/prop-types
  const { chefe_image, year_of_experience, total_recefie, likes, name, _id } =
    card;
  // console.log("card :>> ", card);
  return (
    <div className="  w-full ">
      <div className=" bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className=" flex justify-center">
          <div className="my-10 flex flex-col items-center">
            <LazyLoadImage
              effect="blur"
              className="w-36 h-36 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 "
              src={
                chefe_image ||
                "https://savory.qodeinteractive.com/wp-content/uploads/2016/10/left-menu-team4.jpg"
              }
              alt="slide image"
            />
            <h5 className="mb-2 mt-5 text-xl font-medium text-gray-900 dark:text-white">
              {name}
            </h5>
            <p className=" text-gray-500 dark:text-gray-400">
              Recefies : {total_recefie}
            </p>
            <p className=" text-gray-500 dark:text-gray-400">
              Years of experience : {year_of_experience} Years
            </p>
            <p className=" text-gray-500 dark:text-gray-400">
              Numbers of recipes : {likes} K
            </p>
            <p className=" text-gray-500 dark:text-gray-400">Likes : 5M</p>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <Link
                // to="contact"
                // to={`/home/${total_recefie}`}
                to={"home/" + _id}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View Recipes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefeCard;
