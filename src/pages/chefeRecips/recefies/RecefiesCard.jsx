/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React, { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import LazyLoad from "react-lazy-load";
const RecefiesCard = ({ recipe }) => {
  const [rate, setRate] = useState();
  const [mark, setMark] = useState(false);
  const { recipe_name, recipe_image, rating, cooking_method, ingredients, id } =
    recipe;
  // console.log('recipe :>> ', recipe);
  return (
    <div className="  w-full ">
      <div className=" bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className=" flex justify-center">
          <div className="my-10 flex flex-col items-center">
            <LazyLoad threshold={0.95}>
              <img
                //   className="border "
                className="w-48 h-48 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 "
                src={
                  recipe_image ||
                  "https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2019/01/shop-1.png"
                }
              />
            </LazyLoad>
            <h5 className="mb-2 my-5 text-xl  font-medium text-gray-900 dark:text-white">
              {recipe_name}
            </h5>

            <ul className=" my-5 text-gray-500 dark:text-gray-400">
              {ingredients?.map((ingredient, ind) => (
                <li key={ind}>{ingredient}</li>
              ))}
            </ul>

            <p className=" text-gray-500 dark:text-gray-400">
              Numbers of recipes :{Math.floor(Math.random() * 10)}
            </p>
            <div className=" my-3 text-gray-500 text-center  dark:text-gray-400">
              <p>Cooking Method:</p>
              <p className="pt-1">{cooking_method.slice(0, 50)}</p>
            </div>
            <Rating
              style={{ maxWidth: 180 }}
              value={Math.round(rating)}
              onChange={setRate}
            />

            <div className="flex mt-4 space-x-3 md:mt-6">
              {mark ? (
                <button
                  disabled
                  onClick={() => {
                    toast.success("Favorite Item Selected 💖");
                    setMark(true);
                  }}
                  className={`inline-flex items-center px-4 py-2  text-sm font-medium text-center   bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
                    mark ? "text-yellow-300 " : "text-white"
                  }`}
                >
                  <span className="pr-3"> Favorite</span>
                  <FaBookmark />
                </button>
              ) : (
                <button
                  onClick={() => {
                    toast.success("Favorite Item Selected 💖");
                    setMark(true);
                  }}
                  className={`inline-flex items-center px-4 py-2  text-sm font-medium text-center   bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
                    mark ? "text-yellow-300 " : "text-white"
                  }`}
                >
                  <span className="pr-3"> Favorite</span>
                  <FaBookmark />
                </button>
              )}
              <Toaster />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecefiesCard;
