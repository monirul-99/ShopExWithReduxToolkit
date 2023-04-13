import React from "react";
import Model from "../images/l Cover.png";

const Bonus = () => {
  return (
    <>
      <div className="bg-white text-black px-5 pt-12 pb-28">
        <div className="font-Babes text-4xl tracking-wide border-l-4 border-red-400 ">
          <h1 className="px-3 text-[21px]">winter special clothes</h1>
          <h1 className="px-3">
            Discount For{" "}
            <span className="text-red-400 tracking-widest">You </span>
          </h1>
        </div>
      </div>
      <div className="relative bg-[#A2C8D9] py-16 grid lg:grid-cols-12 justify-between items-center">
        <div className="font-Ubuntu text-black grid col-span-5 justify-center space-y-3">
          <h1 className="text-5xl uppercase font-semibold w-full">
            Up To 50% Off
          </h1>
          <h1 className="text-2xl text-center">winter Sale</h1>
          <a
            className="w-40 mx-auto inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            href="/shop"
          >
            <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent text-center">
              Shop Now
            </span>
          </a>
        </div>
        <div className="grid col-span-7 ">
          <img
            className="absolute bottom-0 w-[85%] left-60 hidden lg:block"
            src={Model}
            alt=""
          />
        </div>
      </div>

      <div className="h-20 bg-white"></div>
    </>
  );
};

export default Bonus;
