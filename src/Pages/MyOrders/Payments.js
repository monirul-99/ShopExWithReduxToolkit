import React from "react";
import { useNavigation } from "react-router-dom";
import Spinner from "../../Shared/Spinner";
import PaymentMyOrders from "../MyOrders/PaymentMyOrders";
import "./Orders.css";
import { useSelector } from "react-redux";
const Payment = () => {
  const navigation = useNavigation();
  const { cart } = useSelector((state) => state.Auth);
  if (navigation.state === "loading") {
    return <Spinner />;
  }

  return (
    <>
      <section className="container mx-auto">
        <div className="w-full">
          <div className="">
            <h1 className="text-start font-Babes text-2xl bg-gradient-to-r from-[#001646] via-pink-500/40  text-transparent bg-clip-text tracking-widest lg:pt-10">
              Shopping Cart
            </h1>
          </div>
          <aside className="">
            {cart?.length <= 0 ? (
              <h1 className="font-Poppins text-2xl font-light text-center py-5 mb-10">
                Cart List is empty!
              </h1>
            ) : (
              <PaymentMyOrders />
            )}
          </aside>
        </div>
      </section>
    </>
  );
};

export default Payment;

{
  /* <form
            className="w-full grid col-span-3 px-5 bg-white font-Poppins py-5 rounded-2xl customShadow mt-10"
            onSubmit={pay}
          >
            <h1 className="text-center font-Babes text-2xl bg-gradient-to-r from-black via-slate-800  text-transparent bg-clip-text tracking-widest py-5">
              Customer Information
            </h1>
            <div className="flex flex-col justify-end py-1 mb-3">
              <div className="space-y-5 w-full">
                <input
                  defaultValue={user?.name}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />

                <input
                  defaultValue={user?.email}
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />

                <input
                  type="text"
                  name="city"
                  placeholder="Type City"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />

                <input
                  type="text"
                  name="country"
                  placeholder="Type Country"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />

                <input
                  type="text"
                  name="zipCode"
                  placeholder="Type Zip Code"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Type Phone Number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="w-full h-12 font-Poppins duration-300 transition-all bg-gradient-to-r from-[#24A2C9]/60 via-[#24A2C9] to-[#24A2C9]/60 hover:to-[#24A2C9]/95 hover:from-[#24A2C9]/95 text-white  px-4 rounded-full">
                Pay Now
              </button>
            </div>
          </form> */
}
