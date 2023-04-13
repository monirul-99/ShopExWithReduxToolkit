import React from "react";
import { Link } from "react-router-dom";
import "./FourCate.css";

const FourCate = () => {
  return (
    <section className="bg-white mt-7">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto px-3">
        <Link
          data-aos="fade-up"
          data-aos-duration="1200"
          to="/all-categories/1"
          className="relative item duration-300 hover:rounded-md visibleHead"
        >
          <img
            className="w-full duration-300 active:scale-95 hover:rounded-md"
            src="https://cdn.shopify.com/s/files/1/1199/6378/files/ban-2_300x300.jpg?v=1665651859"
            alt=""
          />
          <div className="absolute top-[65%] -right-[5%] w-full z-50 btnX visibleOption">
            <h1 className="text-white lg:text-xl capitalize font-Josefin font-bold">
              Collection <span className="uppercase">i</span>
            </h1>
          </div>
        </Link>

        <Link
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1200"
          to="/all-categories/2"
          className="relative item duration-300 hover:rounded-md visibleHead"
        >
          <img
            className="w-full duration-300 active:scale-95 hover:rounded-md"
            src="https://cdn.shopify.com/s/files/1/1199/6378/files/ban-1_300x300.jpg?v=1665651859"
            alt=""
          />
          <div className="absolute top-[65%] -right-[5%] z-50 btnX visibleOption w-full">
            <h1 className="text-white lg:text-xl capitalize font-Josefin font-bold">
              Collection <span className="uppercase">ii</span>
            </h1>
          </div>
        </Link>
        <Link
          data-aos="fade-up"
          data-aos-duration="1200"
          to="/all-categories/3"
          className="relative item duration-300 hover:rounded-md visibleHead"
        >
          <img
            className="w-full duration-300 active:scale-95 hover:rounded-md"
            src="https://cdn.shopify.com/s/files/1/1199/6378/files/ban-4_300x300.jpg?v=1665651859"
            alt=""
          />
          <div className="absolute top-[65%] -right-[5%] z-50 w-full btnX visibleOption">
            <h1 className="text-white lg:text-xl capitalize font-Josefin font-bold">
              Collection <span className="uppercase">iii</span>
            </h1>
          </div>
        </Link>
        <Link
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1200"
          to="/all-categories/4"
          className="relative item duration-300 hover:rounded-md visibleHead"
        >
          <img
            className="w-full duration-300 active:scale-95 hover:rounded-md"
            src="https://cdn.shopify.com/s/files/1/1199/6378/files/ban-3_300x300.jpg?v=1665651859"
            alt=""
          />
          <div className="absolute top-[65%] -right-[5%] w-full z-50 btnX visibleOption">
            <h1 className="text-white lg:text-xl capitalize font-Josefin font-bold">
              Collection <span className="uppercase">iv</span>
            </h1>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FourCate;
