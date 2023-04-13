import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/categories-three-card")
      .then((res) => setCategoriesData(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="px-5 bg-white text-black pt-10 py-12">
      <div className="font-Babes text-4xl tracking-wide border-l-4 border-red-400">
        <h1 className="px-3">Discover</h1>
        <h1 className="px-3">
          Our <span className="text-red-400 tracking-widest">Categories</span>
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 justify-center gap-10 lg:w-[75%] mx-auto mt-10 py-16">
        {categoriesData.map((category, inx) => (
          <CategoryCard key={inx} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
