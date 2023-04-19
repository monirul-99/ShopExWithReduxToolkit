import React from "react";
import { IconContext } from "react-icons";
import { RiCloseFill } from "react-icons/ri";
import "./Orders.css";
import { useDispatch, useSelector } from "react-redux";
import {
  cartQuantityDecrease,
  cartQuantityIncrease,
  quantityDecrease,
} from "../../Features/Auth/AuthSlice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./Orders.css";

const PaymentOrders = () => {
  const dispatch = useDispatch();
  const { cart, modalData } = useSelector((state) => state.Auth);

  const sum = cart.reduce(
    (total, newTotal) => total + newTotal.price * newTotal.quantity,
    0
  );

  return (
    <>
      <section class="container mx-auto font-Poppins">
        <div className="w-full grid grid-cols-5 py-5">
          <aside class="grid col-span-1 border pl-5 items-center py-4 font-Libre text-black">
            Products Info
          </aside>
          <aside class="grid col-span-1 border justify-center items-center py-4 font-Libre text-black">
            Product Stock
          </aside>
          <aside class="grid col-span-1 border justify-center items-center py-4 font-Libre text-black">
            Custom Quantity
          </aside>
          <aside class="grid col-span-1 border justify-center items-center py-4 font-Libre text-black">
            Remove Actions
          </aside>
          <aside class="grid col-span-1 border justify-center items-center py-4 font-Libre text-black">
            Product Price
          </aside>
        </div>
        {cart?.map((item, inx) => (
          <div>
            <div className="w-full grid grid-cols-5 py-5">
              <aside class="grid col-span-1 p-1">
                <div class="inline-flex items-center gap-x-3">
                  <div class="flex items-center gap-x-2">
                    <img
                      class="object-cover w-16 h-16 rounded-full"
                      src={item?.image}
                      alt=""
                    />
                    <div className="hidden lg:block">
                      <h2 class="font-medium text-gray-800 font-Libre">
                        {item?.title}
                      </h2>

                      <p className="font-Poppins text-sm">@no_brand</p>
                    </div>
                  </div>
                </div>
              </aside>
              <aside class="grid col-span-1 justify-center p-1">
                <aside class="flex items-center space-x-3">
                  <p className="text-black">Available</p>{" "}
                  <p className="font-Poppins font-semibold">
                    {item?.productQuantity}
                  </p>
                </aside>
              </aside>
              <aside class="grid col-span-1 justify-center p-1">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => dispatch(cartQuantityDecrease(item._id))}
                    className={`duration-300 bg-[#F6F6F6] hover:bg-gray-300/95 p-2 rounded-sm ${
                      item.quantity === 0 ? "cursor-not-allowed" : ""
                    }`}
                  >
                    <AiOutlineMinus color="gray " size={20} />
                  </button>

                  <h1>{item?.quantity}</h1>

                  <button
                    onClick={() => dispatch(cartQuantityIncrease(item._id))}
                    className="duration-300 bg-[#001646]/80 hover:bg-[#001646]/95 p-2 rounded-sm"
                  >
                    <AiOutlinePlus color="white" size={20} />
                  </button>
                </div>
              </aside>
              <aside class="grid col-span-1 justify-center p-1">
                <div class="flex items-center gap-x-6">
                  <button class="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </aside>
              <aside class="grid col-span-1 justify-center items-center p-1">
                ${item?.price * item?.quantity}
              </aside>
            </div>
            <p className="h-0.5 bg-gradient-to-r from-white via-slate-800/25 to-white"></p>
          </div>
        ))}

        <div className="w-full mt-10 flex justify-between gap-10 mb-10">
          <aside className="border w-full h-20 flex justify-between items-center px-5 border-gray-300">
            <h1 className="font-Libre text-black">Discount</h1>
            <h1 className="font-semibold text-black">$11</h1>
          </aside>
          <aside className="border w-full h-20 flex justify-between items-center px-5 border-gray-300">
            <h1 className="font-Libre text-black">Delivery</h1>
            <h1 className="font-semibold text-black">$05</h1>
          </aside>
          <aside className="border w-full h-20 flex justify-between items-center px-5 border-gray-300">
            <h1 className="font-Libre text-black">Subtotal</h1>
            <h1 className="font-semibold text-black">${sum}</h1>
          </aside>
          <aside className="border w-full h-20 flex justify-between items-center px-5 border-gray-300">
            <h1 className="font-Libre text-black">Total</h1>
            <h1 className="font-semibold text-black">${sum + 5 + 11}</h1>
          </aside>
        </div>

        <div className="mb-10">
          <p className="text-sm text-black/70">
            If you have a promotion code, please enter it here:
          </p>
          <aside className="flex items-center gap-2 py-5">
            <input
              type="text"
              placeholder="Please enter promo code"
              className="w-full font-light border outline-none bg-white py-4 pl-2"
            />
            <aside className="w-full flex gap-5 justify-end">
              <button className="bg-[#001646] px-5 py-[17px] text-white w-full">
                Apply Discount
              </button>
              <button className="bg-[#001646] px-5 py-[17px] text-white w-full">
                Checkout
              </button>
            </aside>
          </aside>
        </div>
      </section>
    </>
  );
};

export default PaymentOrders;
