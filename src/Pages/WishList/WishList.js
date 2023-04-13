import React from "react";
import { IconContext } from "react-icons";
import { FaCartArrowDown } from "react-icons/fa";
import { VscTrash } from "react-icons/vsc";
// import { Link } from "react-router-dom";

const WishList = () => {
  return (
    <div className="hoverFlow h-96">
      <div className="flex flex-col space-y-4">
        <ul className="flex flex-col">
          {/* {wishlistData.map((order, inx) => (
            <li key={inx} className="py-5 border-none">
              <div className="grid grid-cols-12 w-full">
                <div className="grid col-span-4">
                  <img
                    className="flex-shrink-0 object-cover w-16 h-16 outline-none"
                    src={order?.img}
                    alt="Polaroid camera"
                  />
                </div>
                <div className="grid col-span-8 gap-y-3">
                  <h3 className="font-semibold text-[15px] leading-snug capitalize">
                    {order?.title}
                  </h3>

                  <div className="grid grid-cols-3 gap-8 items-center w-full">
                    <p className="text-lg font-semibold ">{order?.price}$</p>
                    <aside
                      className="bg-blue-50 w-9 h-9 rounded-full  flex justify-center items-center"
                      onClick={() => wishlistProductsDelete(order?._id)}
                    >
                      <IconContext.Provider
                        value={{ size: 17, color: "#6361D9" }}
                      >
                        <VscTrash />
                      </IconContext.Provider>
                    </aside>
                    <aside
                      className="bg-blue-50 w-9 h-9 rounded-full flex justify-center items-center"
                      onClick={() => {
                        wishlistProductsDelete(order?._id);
                        shoppingBookingTwo(order);
                      }}
                    >
                      <IconContext.Provider
                        value={{ size: 16, color: "#6361D9" }}
                      >
                        <FaCartArrowDown />
                      </IconContext.Provider>
                    </aside>
                  </div>
                </div>
              </div>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default WishList;
