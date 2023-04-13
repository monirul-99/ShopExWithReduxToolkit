import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import BestProductsCard from "./BestProductsCard";
import { useGetBestProductsQuery } from "../../Features/Products/ProductApi";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  addToCart,
  quantityDecrease,
  quantityIncrease,
  quantityZero,
} from "../../Features/Auth/AuthSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
// import { Link } from "react-router-dom";

const fakeList = [
  "Perfect for any Occasion",
  "Stylish and fashionable",
  "Perfect Fitting",
  "Comfortable to wear",
  "Size: M, L, XL",
];
const BestSeller = () => {
  const { modalData } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(modalData);
  const { data } = useGetBestProductsQuery();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    dispatch(quantityZero());
    setIsOpen(true);
  }

  const goToCheckoutFunc = (id) => {
    if (modalData.quantity === 0) {
      toast.error("please Increase your Quantity!");
      return;
    }
    navigate(`/single-payments-page/${id}`);
    closeModal();
  };
  console.log(modalData.quantity);
  return (
    <>
      <div className="py-28">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[32px] mb-2 text-[#121212] capitalize font-semibold">
            Best sellers
          </h1>
          <p className="text-[#797B7E] text-[18px] leading-6 capitalize">
            Top sale in this week
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 container lg:w-[60%] mx-auto py-10 px-3 lg:px-0">
          {data?.data?.map((best, inx) => (
            <BestProductsCard
              key={inx}
              best={best}
              openModal={openModal}
              closeModal={closeModal}
              isOpen={isOpen}
            ></BestProductsCard>
          ))}
        </div>
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
                  <div className="grid grid-cols-2 justify-between gap-5">
                    <aside className="flex items-center justify-center h-[375px]">
                      <img className="w-4/5" src={modalData.image} alt="" />
                    </aside>
                    <aside className="">
                      <small className="text-black">
                        Product ID:{" "}
                        <span className="text-gray-500">1012775</span>
                      </small>
                      <h1 className="text-2xl font-semibold text-black mb-3">
                        {modalData.title}
                      </h1>

                      {modalData.status === "available" ? (
                        <p className="text-[#669900] text-sm">in Stock</p>
                      ) : (
                        <p>Stock Out</p>
                      )}
                      <h1 className="">Products Details</h1>
                      <ul className="mb-3 mt-1 ml-3">
                        {fakeList.map((item, inx) => (
                          <li className="text-[14px] text-[#000000]" key={inx}>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <p className="text-sm hover:underline cursor-pointer text-black">
                        More Info
                      </p>

                      <h1 className="text-3xl py-3 text-[#F14705]">
                        ${modalData.price}
                      </h1>
                      <hr className="py-2" />
                      <div className="flex items-center gap-5">
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

                          <h1>{modalData?.quantity}</h1>

                          <button
                            onClick={() => dispatch(quantityIncrease())}
                            className="duration-300 bg-gray-200/80 hover:bg-gray-300/95 p-2 rounded-sm"
                          >
                            <AiOutlinePlus color="gray " size={20} />
                          </button>
                        </div>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-sm border border-transparent bg-[#D0611E]/80 px-4 py-2 text-sm font-medium text-white hover:bg-[#D0611E]/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={() => {
                            closeModal();
                            dispatch(addToCart(modalData));
                          }}
                        >
                          Add To Card
                        </button>

                        <button
                          type="button"
                          className="inline-flex justify-center rounded-sm border border-transparent bg-[#26ABD4]/80 px-4 py-2 text-sm font-medium text-white hover:bg-[#26ABD4]/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={() => {
                            goToCheckoutFunc(modalData._id);
                          }}
                        >
                          Buy Now
                        </button>
                      </div>
                    </aside>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default BestSeller;
