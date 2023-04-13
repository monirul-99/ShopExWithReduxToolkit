import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { coverImg, title, items, productsId } = category;
  return (
    <Link to={`/all-categories/${productsId}`}>
      <div className="border w-80 shadow-lg">
        <div className="">
          <img className="w-full" src={coverImg} alt="" />
        </div>
        <div className="flex flex-col mx-auto font-Babes py-9 text-[19px]">
          <h1 className="text-center tracking-wider">{title}</h1>
          <h1 className="text-center tracking-widest">
            Available Products : {items} items
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
