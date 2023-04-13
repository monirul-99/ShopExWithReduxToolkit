// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { toast } from "react-hot-toast";
import { useNavigation } from "react-router-dom";

import Spinner from "../../Shared/Spinner";
// import CheckoutForm from "./CheckoutForm";
import MyOrders from "../MyOrders/MyOrders";

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
  const navigation = useNavigation();
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
        <div className="grid lg:grid-cols-2 gap-16 py-12">
          <div className="px-5 lg:px-0">
            <aside>
              <div className="flex items-center mb-7">
                <h1 className="font-Poppins text-xl lg:text-2xl text-black">
                  Total Cost Of Products:
                </h1>
                <span className="font-Poppins font-semibold text-black text-xl lg:text-2xl tracking-wide ml-3">
                  {/* {price}$ */}
                </span>
              </div>
              <aside className="">
                <MyOrders />
              </aside>
            </aside>
          </div>
          <form className="px-5 lg:px-0" onSubmit={pay}>
            <h1 className="text-center font-Poppins text-2xl text-black tracking-wide py-8">
              Customer Information
            </h1>
            <div className="flex flex-col justify-end">
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label className="text-gray-700" htmlFor="username">
                    Full Name
                  </label>
                  <input
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
              <button className="w-full px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Pay
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Payment;
