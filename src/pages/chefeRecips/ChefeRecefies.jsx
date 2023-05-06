import React from "react";
import RecefiesBanner from "./recefies/RecefiesBanner";
import RecefiesCard from "./recefies/RecefiesCard";
import { useLoaderData, useParams } from "react-router-dom";
const ChefeRecefies = () => {
  const data = useLoaderData();
  // console.log("data :>> ", data);
  // const id = useParams();
  // console.log("id :>> ", id);
  return (
    <div>
      <RecefiesBanner data={data}></RecefiesBanner>
      <section className="bg-white border-gray-200 dark:bg-gray-900 ">
        <div className="text-center p-12  ">
          <h1 className="text-4xl font-semibold">Recefies</h1>
          <p className="text-2xl">Select your Favorite Items</p>
        </div>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7   items-center justify-center p-4">
          {data.recipes.map((recipe) => (
            <RecefiesCard key={recipe.id} recipe={recipe}></RecefiesCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChefeRecefies;
