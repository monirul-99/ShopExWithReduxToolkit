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
          <div className="container mx-auto font-Poppins py-16 px-3 lg:px-0">
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

        <div className="container mx-auto py-28">
          <Subscription />
        </div>

        <Blogs />
      </div>
    </>
  );
};

export default Home;
