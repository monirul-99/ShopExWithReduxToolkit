import React from "react";
import { useNavigation, useParams } from "react-router-dom";
import Spinner from "../../Shared/Spinner";
import {
  useGetProductsIdQuery,
  useOrderPostMutation,
} from "../../Features/Products/ProductApi";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const SinglePayment = () => {
  const { id } = useParams();
  const { modalData, user } = useSelector((state) => state.Auth);
  const { data, isLoading, isError, error } = useGetProductsIdQuery(id);
  const [OrderPost] = useOrderPostMutation();
  const navigation = useNavigation();
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    toast.error(error);
  }
  const { title, img, price } = data?.data[0];
  if (navigation.state === "loading") {
    return <Spinner />;
  }

  const pay = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.name;
    const email = user?.email;
    const city = form.city.value;
    const country = form.country.value;
    const zipCode = form.zipCode.value;
    const phone = form.phone.value;

    const payData = {
      id,
      fullName: name,
      email,
      city,
      country,
      zipCode,
      phone,
      quantity: modalData?.quantity,
    };

    console.log(payData);
    OrderPost(payData).then((res) => {
      window.location.replace(res.data.url);
    });
  };
  return (
    <>
      <section className="lg:w-[50%] mx-auto  py-10">
        <div className="space-y-3 border-b pb-3 bg-gradient-to-r from-black/60 via-pink-500 to-red-500/90 text-transparent bg-clip-text">
          <h1
            className={`text-center lg:text-start text-xl lg:text-2xl font-Poppins font-semibold bg-gradient-to-r from-black/60 via-pink-500 to-red-500/90 text-transparent bg-clip-text tracking-widest uppercase`}
          >
            {title}
          </h1>
          <div className="flex text-sm items-center justify-center lg:justify-start">
            <h1 className="font-Poppins text-black ">
              Total Cost Of Products:
            </h1>
            <span className="text-black tracking-wide ml-3 text-2xl">
              {price}$
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 items-center gap-16 py-12">
          <div className="px-5 lg:px-0">
            <aside className="">
              <div className="flex items-center mb-7"></div>
              <aside className="w-[350px]">
                <img src={img} alt="" />
              </aside>
            </aside>
          </div>

          <form className="px-5 lg:px-0" onSubmit={pay}>
            <h1 className="text-start font-Babes text-2xl bg-gradient-to-r from-black via-pink-500/40  text-transparent bg-clip-text tracking-widest py-5">
              Customer Information
            </h1>
            <div className="flex flex-col justify-end">
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
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
              <button className="w-full font-Poppins duration-300 transition-all bg-gradient-to-r from-[#24A2C9]/60 via-[#24A2C9] to-[#24A2C9]/60 hover:to-[#24A2C9]/95 hover:from-[#24A2C9]/95 text-white py-2 px-4 rounded-full">
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SinglePayment;
