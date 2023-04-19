import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useOrderSuccessInfoQuery } from "../../Features/Products/ProductApi";
import Arrow from "../images/ClipartKey_204934.png";
import "./Orders.css";

const Success = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const transactionId = query.get("transactionId");

  const { data, isLoading, isError, error } =
    useOrderSuccessInfoQuery(transactionId);
  console.log(data);
  return (
    <div className="lg:p-20 p-3">
      <div className="bg-white lg:w-2/6 w-full mx-auto customShadow rounded-md">
        <div className="text-center px-5 pt-10 w-full">
          <h3 className="md:text-2xl font-Poppins text-[#48B57F] text-center">
            Payment Successful
          </h3>

          <aside className="flex justify-center items-center">
            <div className="flex justify-center items-center mt-5 w-16 h-16 border-4 rounded-full">
              <img className="w-7" src={Arrow} alt="" />
            </div>
          </aside>

          <div className="w-full space-y-5 font-Poppins text-sm px-5 py-10">
            <h5 className="text-start bg-gradient-to-bl from-slate-900 via-slate-900  text-transparent bg-clip-text lg:text-2xl">
              Congratulation,
              <span className="ml-1">{data?.data?.fullName}</span>
            </h5>
            <aside className="flex items-center justify-between border-b pb-2">
              <p>Email</p>
              <p className="hover:underline text-[13px]">{data?.data?.email}</p>
            </aside>
            <aside className="flex items-center justify-between border-b pb-2">
              <p className="">Product Name</p>
              <p className="hover:underline text-[13px]">
                {data?.data?.product_name}
              </p>
            </aside>
            <aside className="flex items-center justify-between border-b pb-2">
              <p className="">Amount paid</p>
              <p className="">${data?.data?.price}</p>
            </aside>
            <aside className="flex items-center justify-between">
              <p className="hidden">Transaction ID</p>
              <p className="text-[13px]">TransactionID</p>
              <p className="hover:underline text-[13px]">
                {data?.data?.transactionId}
              </p>
            </aside>

            <aside className="flex gap-5 justify-center">
              {/* <button
                onClick={() => handlePrintClick()}
                className="w-full inline-flex justify-center rounded-sm border border-transparent bg-[#26ABD4]/80 px-4 py-2 text-sm font-medium text-white hover:bg-[#26ABD4]/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Click To Print
              </button> */}
              <Link
                to="/"
                className="w-full inline-flex justify-center rounded-sm border border-transparent bg-[#26ABD4]/80 px-4 py-2 text-sm font-medium text-white hover:bg-[#26ABD4]/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Back To Home
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
