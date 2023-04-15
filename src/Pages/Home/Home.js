import React from "react";
import HomeCover from "./HomeCover";
import FourCate from "../FourCate/FourCate";
import BestSeller from "../TwoParts/BestSeller";
import CommentsCard from "../ValuableComments/ValuableComments";
import Blogs from "../Blogs/Blogs";
import Subscription from "../Subscription/Subscription";

const Home = () => {
  return (
    <>
      <div className="">
        <HomeCover />

        <FourCate />
        <BestSeller />
        <div className="bg-[#F2F3F5]">
          <div className="lg:w-[60%] mx-auto font-Poppins py-16 px-3 lg:px-0">
            <div className="mb-16">
              <h1 className="text-3xl text-black tracking-wide font-Josefin">
                What Our{" "}
                <span className="text-blue-600 font-semibold">Customers</span>{" "}
                <br /> Are Saying . . .
              </h1>
            </div>
            <div className="">
              <CommentsCard />
            </div>
          </div>
        </div>

        <div className="lg:w-[60%] mx-auto lg:py-28 mb-14 lg:mb-0">
          <h1 className="text-3xl text-black tracking-wide font-Josefin py-5 px-3 lg:px-0 md:px-0">
            Limited Time Offer
            <span className="text-blue-600"> Save Big on Clothes!</span>
          </h1>
          <Subscription />
        </div>

        <Blogs />
      </div>
    </>
  );
};

export default Home;
