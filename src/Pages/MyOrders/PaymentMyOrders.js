import React, { Fragment, useState } from "react";
import "./Orders.css";
import { useDispatch, useSelector } from "react-redux";
import {
  cartProductRemove,
  cartQuantityDecrease,
  cartQuantityIncrease,
} from "../../Features/Auth/AuthSlice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./Orders.css";
import {
  useCartProductRemoveMutation,
  useOrderPostMutation,
} from "../../Features/Products/ProductApi";
import { toast } from "react-hot-toast";
import { Dialog, Transition } from "@headlessui/react";
import Spinner from "../../Shared/Spinner";

const PaymentOrders = ({ cart }) => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.Auth);
  let [isOpen, setIsOpen] = useState(false);
  let [currentId, setCurrentId] = useState(null);
  let [currentQuantity, setCurrentQuantity] = useState(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const sum = cart?.reduce(
    (total, newTotal) => total + newTotal.price * newTotal.quantity,
    0
  );

  const [deleteRequest] = useCartProductRemoveMutation();
  const ServerCartDataRemove = (id) => {
    console.log(id);
    deleteRequest(id).then((res) => {
      if (res?.data?.data?.acknowledged) {
        toast.success("Product Remove Success!");
      }
    });
  };

  const [paymentSuccess] = useOrderPostMutation();
  const orderPayments = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.name;
    const email = user?.email;
    const city = form.city.value;
    const country = form.country.value;
    const zipCode = form.zipCode.value;
    const phone = form.phone.value;

    const payData = {
      mainId: currentId,
      fullName: name,
      email,
      city,
      country,
      zipCode,
      phone,
      quantity: currentQuantity,
    };

    console.log(payData);
    paymentSuccess(payData).then((res) => {
      console.log(res);
      window.location.replace(res.data.url);
    });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="container mx-auto font-Poppins">
        <div className="w-full grid lg:grid-cols-6 grid-cols-5 py-5">
          <aside className="grid col-span-1 border pl-5 items-center py-4 font-Libre text-black">
            <span className="hidden lg:block md:block">Products Info</span>
            <span className="block lg:hidden md:hidden">Image</span>
          </aside>
          <aside className="lg:grid md:grid col-span-1 border justify-center items-center py-4 font-Libre text-black hidden lg:block">
            Product Stock
          </aside>
          <aside className="grid col-span-1 border justify-center items-center py-4 font-Libre text-black">
            <span className="hidden lg:block md:block">Custom Quantity</span>
            <span className="block lg:hidden md:hidden">Qty</span>
          </aside>
          <aside className="grid col-span-1 border justify-center items-center py-4 font-Libre text-black">
            <span className="hidden lg:block md:block"> Remove Actions</span>
            <span className="block lg:hidden md:hidden">Action</span>
          </aside>
          <aside className="grid col-span-1 border justify-center items-center py-4 font-Libre text-black">
            <span className="hidden lg:block md:block"> Product Price</span>
            <span className="block lg:hidden md:hidden"> Price</span>
          </aside>
          <aside className="grid col-span-1 border justify-center items-center py-4 font-Libre text-black">
            <span className="hidden lg:block md:block"> Payment</span>
            <span className="block lg:hidden md:hidden">Pay</span>
          </aside>
        </div>
        {cart?.map((item, inx) => (
          <section key={inx}>
            <div>
              <div className="w-full grid lg:grid-cols-6 grid-cols-5 py-5">
                <aside className="grid col-span-1 p-1">
                  <div className="inline-flex items-center gap-x-3">
                    <div className="flex items-center gap-x-2">
                      <img
                        className="object-cover w-16 h-16 rounded-full"
                        src={item?.image}
                        alt=""
                      />
                      <div className="hidden lg:block">
                        <h2 className="font-medium text-gray-800 font-Libre">
                          {item?.title}
                        </h2>

                        <p className="font-Poppins text-sm">@no_brand</p>
                      </div>
                    </div>
                  </div>
                </aside>
                <aside className="lg:grid md:grid col-span-1 justify-center items-center p-1 hidden lg:block">
                  <aside className="flex items-center space-x-3">
                    <p className="text-black">Available</p>
                    <p className="font-Poppins font-semibold">
                      {item?.productQuantity}
                    </p>
                  </aside>
                </aside>
                <aside className="grid col-span-1 justify-center p-1">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => dispatch(cartQuantityDecrease(item._id))}
                      className={`duration-300 bg-[#F6F6F6] hover:bg-gray-300/95 lg:p-2 p-0.5 rounded-sm ${
                        item.quantity === 0 ? "cursor-not-allowed" : ""
                      }`}
                    >
                      <AiOutlineMinus color="gray " size={20} />
                    </button>

                    <h1>{item?.quantity}</h1>

                    <button
                      onClick={() => dispatch(cartQuantityIncrease(item?._id))}
                      className="duration-300 bg-[#001646]/80 hover:bg-[#001646]/95 lg:p-2 p-0.5 rounded-sm"
                    >
                      <AiOutlinePlus color="white" size={20} />
                    </button>
                  </div>
                </aside>
                <aside
                  onClick={() => {
                    // dispatch(cartProductRemove(item?._id));
                    ServerCartDataRemove(item?.mainId);
                  }}
                  className="grid col-span-1 justify-center p-1"
                >
                  <div className="flex items-center gap-x-6">
                    <button className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </aside>
                <aside className="grid col-span-1 justify-center items-center p-1">
                  ${item?.price * item?.quantity}
                </aside>
                <aside className="grid col-span-1 justify-center items-center p-1">
                  <button
                    htmlFor="my-modal-3"
                    onClick={() => {
                      setCurrentId(item.mainId);
                      setCurrentQuantity(item.quantity);
                      openModal();
                    }}
                    className="bg-[#001646] px-5 py-[10px] text-white w-full rounded-full text-sm"
                  >
                    Pay
                  </button>
                </aside>
              </div>
              <p className="h-0.5 bg-gradient-to-r from-white via-slate-800/25 to-white"></p>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <form className="px-5 lg:px-0" onSubmit={orderPayments}>
                          <div className="flex justify-between items-center">
                            <h1 className="text-start font-Babes text-2xl  text-slate-900 tracking-widest py-5">
                              Customer Information
                            </h1>
                            <h1 className="text-start font-Babes text-2xl text-slate-900 tracking-widest">
                              Total Amount ${item?.price * item?.quantity}
                            </h1>
                          </div>
                          <div className="flex flex-col justify-end">
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                              <div>
                                <label
                                  className="text-gray-700"
                                  htmlFor="username"
                                >
                                  Full Name
                                </label>
                                <input
                                  defaultValue={user?.name}
                                  id="username"
                                  type="text"
                                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                />
                              </div>

                              <div>
                                <label
                                  className="text-gray-700"
                                  htmlFor="emailAddress"
                                >
                                  Email Address
                                </label>
                                <input
                                  defaultValue={user?.email}
                                  id="emailAddress"
                                  type="email"
                                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                />
                              </div>

                              <div>
                                <label
                                  className="text-gray-700"
                                  htmlFor="country"
                                >
                                  Country
                                </label>
                                <input
                                  id="country"
                                  type="text"
                                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                />
                              </div>

                              <div>
                                <label className="text-gray-700" htmlFor="city">
                                  City
                                </label>
                                <input
                                  id="city"
                                  type="text"
                                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                />
                              </div>

                              <div>
                                <label
                                  className="text-gray-700"
                                  htmlFor="zipCode"
                                >
                                  Zip Code
                                </label>
                                <input
                                  id="zipCode"
                                  type="text"
                                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                />
                              </div>

                              <div>
                                <label
                                  className="text-gray-700"
                                  htmlFor="phone"
                                >
                                  Phone
                                </label>
                                <input
                                  id="phone"
                                  type="text"
                                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-end mt-6">
                            <button className="w-full font-Poppins duration-300 transition-all bg-gradient-to-r from-[#24A2C9]/60 via-[#24A2C9] to-[#24A2C9]/60 hover:to-[#24A2C9]/95 hover:from-[#24A2C9]/95 text-white py-2 px-4 rounded-full">
                              Pay Now
                            </button>
                          </div>
                        </form>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </section>
        ))}

        <div className="w-full mt-10 flex justify-between lg:gap-10 gap-2 mb-10">
          <aside className="border w-full h-20 flex justify-between items-center lg:px-5 px-1 border-gray-300">
            <h1 className="font-Libre text-black">Delivery</h1>
            <h1 className="font-semibold text-black">$00</h1>
          </aside>
          <aside className="border w-full h-20 flex justify-between items-center lg:px-5 px-1 border-gray-300">
            <h1 className="font-Libre text-black">Subtotal</h1>
            <h1 className="font-semibold text-black">${sum}</h1>
          </aside>
          <aside className="border w-full h-20 flex justify-between items-center lg:px-5 px-1 border-gray-300">
            <h1 className="font-Libre text-black">Total</h1>
            <h1 className="font-semibold text-black">${sum}</h1>
          </aside>
        </div>
      </section>
    </>
  );
};

export default PaymentOrders;
