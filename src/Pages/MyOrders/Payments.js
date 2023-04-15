// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { toast } from "react-hot-toast";
import { useNavigation } from "react-router-dom";

import Spinner from "../../Shared/Spinner";
// import CheckoutForm from "./CheckoutForm";
import PaymentMyOrders from "../MyOrders/PaymentMyOrders";
import { useSelector } from "react-redux";

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
  const navigation = useNavigation();
  const { modalData, user, cart } = useSelector((state) => state.Auth);
  if (navigation.state === "loading") {
    return <Spinner />;
  }

  const pay = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.username.value;
    const email = form.emailAddress.value;
    const city = form.city.value;
    const country = form.country.value;
    const zipCode = form.zipCode.value;
    const phone = form.phone.value;

    const payData = {
      fullName: name,
      email,
      city,
      country,
      zipCode,
      phone,
      // price,
    };

    fetch(`http://localhost:8000/pay-orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payData),
    })
      .then((res) => res.json())
      .then((data) => {
        // toast.success(`${user?.displayName} Order Added & Payment Continue!`);
        window.location.replace(data.url);
      });
  };

  return (
    <>
      <section className="container mx-auto">
        <div className="grid lg:grid-cols-9 gap-16 py-12 items-center">
          <div className="px-5 lg:px-0 grid col-span-5">
            <aside>
              <div className="mb-7">
                <h1 className="text-start font-Babes text-2xl bg-gradient-to-r from-black via-pink-500/40  text-transparent bg-clip-text tracking-widest py-5">
                  Shopping Cart
                </h1>
              </div>
              <aside className="">
                <PaymentMyOrders />
              </aside>
            </aside>
          </div>
          <form className="px-5 grid col-span-4 bg-[#FAFAFA]" onSubmit={pay}>
            <h1 className="text-start font-Babes text-2xl bg-gradient-to-r from-black via-pink-500/40  text-transparent bg-clip-text tracking-widest py-5">
              Customer Information
            </h1>
            <div className="flex flex-col justify-end">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-gray-700" htmlFor="username">
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
                  <label className="text-gray-700" htmlFor="emailAddress">
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
                  <label className="text-gray-700" htmlFor="country">
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
                  <label className="text-gray-700" htmlFor="zipCode">
                    Zip Code
                  </label>
                  <input
                    id="zipCode"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-gray-700" htmlFor="phone">
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
              <button className="w-full h-12 font-Poppins duration-300 transition-all bg-gradient-to-r from-[#24A2C9]/60 via-[#24A2C9] to-[#24A2C9]/60 hover:to-[#24A2C9]/95 hover:from-[#24A2C9]/95 text-white  px-4 rounded-full">
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Payment;
