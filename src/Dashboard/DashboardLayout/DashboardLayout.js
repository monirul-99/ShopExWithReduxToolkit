import React from "react";
import { IconContext } from "react-icons";
import { HiChevronDoubleLeft } from "react-icons/hi2";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import useAdmin from "../../Shared/useAdmin";

const DashboardLayout = () => {
  // const [isAdmin] = useAdmin(user?.email);

  return (
    <div className="container mx-auto bg-slate-300">
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="dashboard-open" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col py-5">
          <div className="flex justify-end px-4">
            <label
              htmlhtmlFor="dashboard-open"
              className="lg:hidden bg-white px-3 shadow-lg rounded-md py-1"
            >
              <IconContext.Provider value={{ size: 30, color: "black" }}>
                <HiChevronDoubleLeft />
              </IconContext.Provider>
            </label>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlhtmlFor="dashboard-open"
            className="drawer-overlay"
          ></label>
          {/* <ul className="menu p-4 w-56 lg:w-80 bg-slate-400 text-base-content space-y-7 font-Ubuntu py-20">
            {!isAdmin && (
              <Link
                to="/dashboard/myProducts"
                className="bg-gray-200 px-2 text-center text-[18px] py-3 text-black rounded-sm duration-75 hover:rounded-full hover:ring-2 ring-slate-600"
              >
                My Products
              </Link>
            )}

            {!isAdmin && (
              <Link
                to="/dashboard/addProducts"
                className="bg-gray-200 px-2 text-center text-[18px] py-3 text-black rounded-sm duration-75 hover:rounded-full hover:ring-2 ring-slate-600"
              >
                Add Products
              </Link>
            )}

            {isAdmin && (
              <Link
                to="/dashboard/allSellers"
                className="bg-gray-200 px-2 text-center text-[18px] py-3 text-black rounded-sm duration-75 hover:rounded-full hover:ring-2 ring-slate-600"
              >
                All Sellers
              </Link>
            )}
            {isAdmin && (
              <Link
                to="/dashboard/allBuyers"
                className="bg-gray-200 px-2 text-center text-[18px] py-3 text-black rounded-sm duration-75 hover:rounded-full hover:ring-2 ring-slate-600"
              >
                All Buyers
              </Link>
            )}
            {isAdmin && (
              <Link
                to="/dashboard/reportedProducts"
                className="bg-gray-200 px-2 text-center text-[18px] py-3 text-black rounded-sm duration-75 hover:rounded-full hover:ring-2 ring-slate-600"
              >
                Reported Products
              </Link>
            )}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
