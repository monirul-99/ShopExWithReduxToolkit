import React from "react";
import { IconContext } from "react-icons";
import { RiCloseFill } from "react-icons/ri";
import "./Orders.css";
import { useDispatch, useSelector } from "react-redux";
import {
  quantityDecrease,
  quantityIncrease,
} from "../../Features/Auth/AuthSlice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

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
        <div class="flex flex-col mt-6">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr className="text-black">
                      <th
                        scope="col"
                        class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right"
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Products</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right"
                      >
                        <span>Quantity</span>
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right"
                      >
                        Actions
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right"
                      >
                        <span>Total Price</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    {cart?.map((item, inx) => (
                      <tr>
                        <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div class="inline-flex items-center gap-x-3">
                            <div class="flex items-center gap-x-2">
                              <img
                                class="object-cover w-16 h-16 rounded-full"
                                src={item?.image}
                                alt=""
                              />
                              <div>
                                <h2 class="font-medium text-gray-800">
                                  {item?.title}
                                </h2>
                                <p class="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  @no_brand
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => dispatch(quantityDecrease())}
                              className={`duration-300 bg-gray-200/80 hover:bg-gray-300/95 p-2 rounded-sm ${
                                modalData.quantity === 0
                                  ? "cursor-not-allowed"
                                  : ""
                              }`}
                            >
                              <AiOutlineMinus color="gray " size={20} />
                            </button>

                            <h1>{item?.quantity}</h1>

                            <button
                              onClick={() => dispatch(quantityIncrease())}
                              className="duration-300 bg-gray-200/80 hover:bg-gray-300/95 p-2 rounded-sm"
                            >
                              <AiOutlinePlus color="gray " size={20} />
                            </button>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-sm whitespace-nowrap">
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
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap text-center">
                          {item?.price * item?.quantity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t  text-black px-10 space-y-3">
          <aside className="flex justify-between pt-3">
            <h3>Sub Total</h3>
            <h3>{sum}</h3>
          </aside>

          <aside className="flex justify-between">
            <h3>Shipping</h3>
            <h3>Free</h3>
          </aside>
        </div>

        <div class="flex items-center justify-between mt-6">
          <Link
            to="/shop"
            class="flex items-center px-5 py-2 text-sm text-black capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span className="">Continue Shopping</span>
          </Link>

          <aside className="w-36 border flex items-center px-5 py-2 text-sm text-black capitalize transition-colors duration-200 bg-white rounded-md gap-x-2 hover:bg-gray-100">
            <h3>Total</h3>
            <h3>{sum}</h3>
          </aside>
        </div>
      </section>
    </>
  );
};

export default PaymentOrders;
