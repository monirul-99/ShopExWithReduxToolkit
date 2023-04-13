import React from "react";
import Cover from "../images/banner.webp";

const BestPrice = () => {
  return (
    <div className="relative">
      <img src={Cover} alt="" />

      <div className="absolute top-[30%] left-[15%]">
        <h1 className="text-[16px] text-[#212B35] font-semibold">
          EXPLORE THE NEW RANGE
        </h1>
        <h1 className="text-6xl text-[#121212] font-semibold mt-3 -ml-1">
          Best price,
        </h1>
        <h1 className="text-6xl text-[#121212] font-semibold mt-3 -ml-1">
          best selection!
        </h1>
        <p className="text-[14px] text-[#797B7E] py-5">
          Get up to 20% off on New Arrivals
        </p>

        <div className="bg-black text-white px-5 py-2 mt-5 w-32  flex items-center justify-center">
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default BestPrice;
