import React from "react";
import { IconContext } from "react-icons";
import {
  RiEyeLine,
  RiHeart2Line,
  RiHeart3Line,
  RiShoppingCartLine,
} from "react-icons/ri";
import "./BestProducts.css";
import { useDispatch } from "react-redux";
import { modalInfo } from "../../Features/Auth/AuthSlice";

const BestProductsCard = ({ best, openModal, closeModal, isOpen }) => {
  const { title, img, price } = best;
  const dispatch = useDispatch();

  const provideDataToModal = () => {
    dispatch(modalInfo(best));
    console.log("Hello");
  };

  return (
    <>
      <section
        className="border hoverEffect cardHover cursor-pointer"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <aside className="relative bg-white h-[250px] flex flex-col justify-center items-center">
          <img
            className={`object-center duration-300 hover:scale-110 ${
              title === "Simple Summer Dress" ? "w-[110px]" : "w-[170px]"
            }`}
            src={img}
            alt=""
          />
          <div className="absolute top-3 right-3 visibleText duration-300 cursor-pointer">
            <div className="flex flex-row-reverse">
              <div className="px-1">
                <IconContext.Provider value={{ size: 23, color: "#ABADAF" }}>
                  <RiHeart2Line />
                </IconContext.Provider>
              </div>

              <p className="bg-white text-xs px-2 py-1 text-black duration-300 extraCss">
                Add To Wishlist
              </p>
            </div>
          </div>

          <div className="absolute bottom-2 w-full">
            <aside className="flex items-center justify-center space-x-2 visibleCart">
              <div
                // onClick={() => shoppingBookingTwo(product)}
                className="cursor-pointer w-10 h-10 bg-black duration-500 hover:bg-[#797B7E] p-3 rounded-full flex items-center justify-center"
              >
                <IconContext.Provider value={{ size: 20, color: "white" }}>
                  <RiShoppingCartLine />
                </IconContext.Provider>
              </div>
              <label
                onClick={() => {
                  openModal();
                  provideDataToModal();
                }}
                htmlFor="my-modal-3"
                className="cursor-pointer w-10 h-10 bg-black duration-500 hover:bg-[#797B7E] p-3 rounded-full flex items-center justify-center"
              >
                <IconContext.Provider value={{ size: 20, color: "white" }}>
                  <RiEyeLine />
                </IconContext.Provider>
              </label>
            </aside>
          </div>
        </aside>
        <aside className="font-Libre flex flex-col items-center py-4 space-y-1">
          <div className="flex items-center">
            {" "}
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <h1 className="capitalize font-semibold text-[#121212]">{title}</h1>
          <p>${price}</p>
        </aside>
      </section>
    </>
  );
};

export default BestProductsCard;
