import React from "react";
import { Link } from "react-router-dom";
import Cover1 from "../images/Rectangle_168.jpg";
import "./HomeCover.css";

const HomeCover = () => {
  return (
    <>
      <div className="relative rounded-b-md overflow-hidden hidden lg:block md:block">
        <img className="lg:block hidden" src={Cover1} alt="" />
        <div className="absolute inset-0 bg-black/10 bg-gradient-to-t"></div>
        <div className="absolute top-[30%] w-full">
          <div className="container space-y-7 mx-auto">
            <h1 className="text-xl font-Josefin font-semibold capitalize text-[#121212]">
              FASHION GUIDE
            </h1>
            <h1
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="-ml-1.5 text-7xl font-Josefin font-semibold capitalize text-[#121212]"
            >
              Denim Perfect
            </h1>

            <p
              className="text-[18px] text-slate-500 font-Poppins leading-10 pb-12"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1000"
            >
              Shop the latest clothing, shoes, and handbags from top fashion
              <br />
              brands, style icons, and celebrities.
            </p>
            <Link to="/shop">
              <h1
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
                className="group relative inline-flex items-center overflow-hidden rounded bg-[#333E48] px-8 py-3 text-white focus:outline-none focus:ring active:bg-slate-600 lg:mt-16 mt-5"
              >
                <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span className="text-[13px] uppercase tracking-widest font-Libre font-medium transition-all group-hover:mr-4">
                  Shop Now
                </span>
              </h1>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="relative rounded-b-md overflow-hidden lg:hidden md:hidden"
        id="gradientOverlay"
      >
        <img
          id="gradientOverlay"
          className="lg:hidden block"
          src="https://res.cloudinary.com/dr4o1qswz/image/upload/v1674572276/Owner%20Img/Rectangle_168.ebf53198a64140e753b5_dziatr.jpg"
          alt=""
        />

        <div className="absolute inset-0 bg-black/10 bg-gradient-to-t"></div>
        <div className="absolute bottom-12 w-full pl-5 z-10">
          <div className="container space-y-3 mx-auto">
            <h1
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className="text-[17px] font-Josefin font-semibold capitalize text-[#121212] tracking-widest"
            >
              FASHION GUIDE
            </h1>
            <h1
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className="-ml-0.5 text-5xl font-Josefin font-semibold capitalize text-[#121212]"
            >
              Denim Perfect
            </h1>

            <p
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className="text-17px] text-[#121212] px-1 pb-5"
            >
              Shop the latest clothing, shoes, and handbags from top fashion{" "}
              brands, style icons, and celebrities.
            </p>
            <Link to="/shop">
              <h1
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
                className="group relative inline-flex items-center overflow-hidden rounded bg-[#333E48] px-8 py-3 text-white focus:outline-none focus:ring active:bg-slate-600 lg:mt-16 mt-5"
              >
                <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span className="text-[13px] uppercase tracking-widest font-Libre font-medium transition-all group-hover:mr-4">
                  Shop Now
                </span>
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCover;
