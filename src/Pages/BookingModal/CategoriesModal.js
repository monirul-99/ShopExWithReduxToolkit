import React from "react";
import { IconContext } from "react-icons";
import { RiHeart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Slider from "./Slider";

const BookingModal = ({ modalData, setModalOpenClose }) => {
  const { title, status, img, price, describe, OriginalPrice, _id } = modalData;

  return (
    <>
      {OriginalPrice && (
        <section className="">
          <input
            type="checkbox"
            id="my-modal-3"
            className="modal-toggle font-Ubuntu "
          />
          <div className="modal capitalize font-Ubuntu">
            <div className="w-[900px] h-[500px] relative border grid grid-cols-1 lg:grid-cols-2 lg:gap-5 lg:p-5 justify-center rounded-sm bg-[#DFE4EA] lg:shadow-2xl">
              <div>
                <Slider img={img} />
                <label
                  htmlhtmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2 z-10"
                >
                  ✕
                </label>
              </div>

              <div className="pl-5 font-Libre bg-[#DFE4EA] lg:space-y-4 space-y-2">
                <p className="bg-[#55C1A7] w-20 text-white text-center text-xs py-1 pt-1.5">
                  {status ? "In Stock" : "Out Stock"}
                </p>

                {title.length < 8 && (
                  <h1 className="lg:text-[28px] text-xl font-bold text-[#121212] lg:mt-4 mt-2 lg:mb-2 mb-1">
                    Nice {title}
                  </h1>
                )}
                {title.length > 8 && (
                  <h1 className="lg:text-[28px] text-xl font-bold text-[#121212] lg:mt-4 mt-2 lg:mb-2 mb-1">
                    {title}
                  </h1>
                )}
                <h2 className="font-Libre lg:text-[20px] text-slate-900 font-semibold">
                  ${price}
                </h2>

                <div className="py-4 space-y-2 hidden lg:block md:block text-slate-900">
                  <p>
                    available : <span>In Stock</span>
                  </p>
                  <p>
                    Brand : <span>Unknown</span>
                  </p>
                  <p>
                    Tags : <span>Dress</span>
                  </p>
                </div>

                <Link to={`/categories-search/${_id}`}>
                  <p className="underline text-blue-400">More Details</p>
                </Link>

                <p className="text-sm mt-2 mb-3 font-Libre text-slate-900">
                  {describe.slice(0, 99)}. . .
                </p>

                <aside
                  // onClick={() => wishlistBooking(modalData)}
                  className="flex items-center space-x-2 mb-3 cursor-pointer text-slate-900"
                >
                  <IconContext.Provider value={{ size: 21, color: "#ABADAF" }}>
                    <RiHeart2Line />
                  </IconContext.Provider>

                  <p>Add To Wishlist</p>
                </aside>

                <button
                  // onClick={() => shoppingBooking(modalData)}
                  className="py-3 mb-5 text-[17px] w-full max-w-xs text-center bg-black text-white"
                >
                  Add To Carts
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
      {!OriginalPrice && (
        <section className="">
          <input
            type="checkbox"
            id="my-modal-3"
            className="modal-toggle font-Ubuntu "
          />
          <div className="modal capitalize font-Ubuntu">
            <div className="w-[900px] h-[500px] relative border grid grid-cols-1 lg:grid-cols-2 lg:gap-5 lg:p-5 justify-center rounded-sm bg-[#F7F7F7] lg:shadow-2xl">
              <div>
                <Slider img={img} />
                <label
                  htmlhtmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2 z-10"
                >
                  ✕
                </label>
              </div>

              <div className="pl-5 font-Libre bg-[#F7F7F7] lg:space-y-4 space-y-2">
                <p className="bg-[#55C1A7] w-20 text-white text-center text-xs py-1 pt-1.5">
                  {status ? "In Stock" : "Out Stock"}
                </p>
                <h1 className="lg:text-[28px] text-xl font-bold text-[#121212] lg:mt-4 mt-1 lg:mb-2 mb-1">
                  {title}
                </h1>
                <h2 className="font-Libre lg:text-[20px]">${price}</h2>

                <div className="py-3 hidden lg:block md:block space-y-3">
                  <p>
                    available : <span>In Stock</span>
                  </p>
                  <p>
                    Brand : <span>Unknown</span>
                  </p>
                  <p>
                    Tags : <span>Dress</span>
                  </p>
                </div>
                <Link to={`/categories-search/${_id}`}>
                  <p className="underline text-blue-400">More Details</p>
                </Link>

                <p className="text-sm mt-2 mb-3 font-Libre">
                  {describe.slice(0, 99)}. . .
                </p>

                <aside
                  onClick={() => {
                    // wishlistBooking(modalData);
                  }}
                  className="flex items-center space-x-2 mb-3 cursor-pointer"
                >
                  <IconContext.Provider value={{ size: 21, color: "#ABADAF" }}>
                    <RiHeart2Line />
                  </IconContext.Provider>

                  <p>Add To Wishlist</p>
                </aside>

                <button
                  // onClick={() => shoppingBooking(modalData)}
                  className="py-3 mb-5 text-[17px] w-full max-w-xs text-center bg-black text-white"
                >
                  Add To Carts
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BookingModal;
