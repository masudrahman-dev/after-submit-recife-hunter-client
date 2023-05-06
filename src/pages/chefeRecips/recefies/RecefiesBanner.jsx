/* eslint-disable react/prop-types */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const RecefiesBanner = ({ data }) => {
  const {
    about,
    chef_image,
    chefe_image,
    likes,
    name,
    total_recefie,
    year_of_experience,
  } = data;

  // console.log('data :>> ', data);
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <div className="   ">
            <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-7">
              <div>
                <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                  {name}
                </h1>
                <p className="mb-8 text-lg  text-gray-500   dark:text-gray-400">
                  {about}
                </p>
                <div>
                  <p>likes : {likes} K</p>
                  <p>number of recipes : {total_recefie} pics</p>
                  <p>years of experience : {year_of_experience} years</p>
                </div>
              </div>
              <div>
                <LazyLoadImage
                  className="rounded-lg"
                  effect="blur"
                  src={chef_image || chefe_image}
                  alt="slide image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecefiesBanner;
