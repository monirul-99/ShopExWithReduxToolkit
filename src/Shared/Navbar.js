import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  RiBarChartHorizontalLine,
  RiHeart2Line,
  RiPhoneFill,
  RiSearchLine,
  RiShoppingCartLine,
  RiUser6Line,
} from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose, IoLogInOutline, IoPersonAddOutline } from "react-icons/io5";
import "../Pages/MyOrders/Orders.css";
import { useDispatch, useSelector } from "react-redux";
import { IconContext } from "react-icons";
import { signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { logout } from "../Features/Auth/AuthSlice";
import ShopCard from "../Pages/Shop/ShopCard";
import { useSearchProductsQuery } from "../Features/Products/ProductApi";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    user: { name, image, email },
    cart,
  } = useSelector((state) => state.Auth);

  const { wishlist } = useSelector((state) => state.Wish);
  // const { data } = useSearchProductsQuery(searchText);

  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(logout());
    });
  };

  const searchPageVisit = () => {
    navigate("/search-page");
  };
  return (
    <>
      <section className="bg-black  hidden lg:block relative">
        <div className="h-10 flex justify-between items-center container mx-auto font-Poppins">
          <div className="flex items-center space-x-2">
            <IconContext.Provider value={{ size: 20, color: "white" }}>
              <RiPhoneFill />
            </IconContext.Provider>
            <p className="text-white text-[13px]">+880 1780082914</p>
          </div>
          <div className="flex items-center space-x-3">
            <p className="text-[13px] text-white">All week from 9 am to 7 pm</p>
            <p className="h-4 border-r"></p>
            <Link to="/shop">
              <p className="text-[13px] text-white">Shop Now</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white shadow-sm font-Open text-black sticky top-0 z-50">
        <div>
          <div className="flex justify-between container mx-auto py-6 px-5 lg:px-0">
            <div className="flex items-center space-x-3">
              <div className="dropdown dropdown-bottom cursor-pointer">
                <label
                  tabIndex={0}
                  className="cursor-pointer lg:hidden md:hidden"
                >
                  <aside className="-mt-1">
                    <IconContext.Provider value={{ size: 25 }}>
                      <RiBarChartHorizontalLine />
                    </IconContext.Provider>
                  </aside>
                </label>
                <div
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-white w-52 mt-[29px] -ml-5"
                >
                  <nav
                    aria-label="Main Nav"
                    className="flex flex-col space-y-1"
                  >
                    <Link
                      to="/home"
                      className="flex uppercase items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500 text-[15px]"
                    >
                      Home
                    </Link>

                    <details className="group [&_summary::-webkit-details-marker]:hidden duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 py-1 hover:text-blue-700 text-gray-500">
                      <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                        <span className="font-medium uppercase text-[15px]">
                          women's
                        </span>

                        <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </summary>

                      <nav
                        aria-label="Users Nav"
                        className="flex flex-col mt-2 ml-8 space-y-1"
                      >
                        <aside className="flex items-center px-4 py-2 text-gray-500 capitalize rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 text-[15px]">
                          Items 1
                        </aside>

                        <aside className="flex items-center px-4 py-2 text-gray-500 capitalize rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 text-[15px]">
                          Items 2
                        </aside>
                      </nav>
                    </details>

                    <Link
                      to="/about"
                      className="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500 uppercase text-[15px]"
                    >
                      about us
                    </Link>

                    <Link
                      to="/shop"
                      className="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500 uppercase text-[15px]"
                    >
                      New arrival
                    </Link>

                    <details className="group [&_summary::-webkit-details-marker]:hidden duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 py-1 hover:text-blue-700 text-gray-500">
                      <summary className="flex items-center px-4 py-2 text-gray-500 uppercase rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                        <span className="font-medium text-[15px]"> men's </span>

                        <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </summary>

                      <nav
                        aria-label="Account Nav"
                        className="flex flex-col mt-2 ml-8 space-y-1"
                      >
                        <aside className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                          Items 1
                        </aside>

                        <aside className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                          Items 2
                        </aside>

                        <form action="/logout">
                          <button
                            type="submit"
                            className="w-full px-4 py-2 text-sm font-medium text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                          >
                            Items 3
                          </button>
                        </form>
                      </nav>
                    </details>
                  </nav>
                </div>
              </div>

              <Link
                className="lg:text-4xl text-[20px] font-Josefin font-extralight"
                to="/"
              >
                <p className="pt-1">ᔕᕼOᑭ E᙭</p>
              </Link>
            </div>

            <div className="hidden lg:block">
              <aside className="flex gap-10 justify-center items-center text-[14px] pt-4">
                <Link
                  className="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-900 before:transition hover:before:scale-100 uppercase"
                  to="/home"
                >
                  Home
                </Link>

                <div className="dropdown dropdown-bottom cursor-pointer">
                  <label
                    tabIndex={0}
                    className="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-900 before:transition hover:before:scale-100 uppercase space-x-1 flex items-center cursor-pointer"
                  >
                    <p>women's</p>
                    <aside className="-mt-1">
                      <IconContext.Provider value={{ size: 15 }}>
                        <IoIosArrowDown />
                      </IconContext.Provider>
                    </aside>
                  </label>
                  <div
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-white w-52 mt-[31px]"
                  >
                    <nav
                      aria-label="Main Nav"
                      className="flex flex-col space-y-1"
                    >
                      <aside className="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                        Wedding Dress
                      </aside>

                      <details className="group [&_summary::-webkit-details-marker]:hidden duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 py-1 hover:text-blue-700 text-gray-500">
                        <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                          <span className="text-sm font-medium"> T-Shirt </span>

                          <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </summary>

                        <nav
                          aria-label="Users Nav"
                          className="flex flex-col mt-2 ml-8 space-y-1"
                        >
                          <aside className="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                            Items 1
                          </aside>

                          <aside className="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                            Items 2
                          </aside>
                        </nav>
                      </details>

                      <aside className="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                        Sweater
                      </aside>

                      <aside className="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                        Gym Clothes
                      </aside>

                      <details className="group [&_summary::-webkit-details-marker]:hidden duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 py-1 hover:text-blue-700 text-gray-500">
                        <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                          <span className="text-sm font-medium"> Hoodie </span>

                          <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </summary>

                        <nav
                          aria-label="Account Nav"
                          className="flex flex-col mt-2 ml-8 space-y-1"
                        >
                          <aside className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                            Items 1
                          </aside>

                          <aside className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                            Items 2
                          </aside>

                          <form action="/logout">
                            <button
                              type="submit"
                              className="w-full px-4 py-2 text-sm font-medium text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                              Items 3
                            </button>
                          </form>
                        </nav>
                      </details>
                    </nav>
                  </div>
                </div>

                <div className="dropdown dropdown-bottom cursor-pointer">
                  <label
                    tabIndex={0}
                    className="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-900 before:transition hover:before:scale-100 uppercase space-x-1 flex items-center cursor-pointer"
                  >
                    <p>men's</p>
                    <aside className="-mt-1">
                      <IconContext.Provider value={{ size: 15 }}>
                        <IoIosArrowDown />
                      </IconContext.Provider>
                    </aside>
                  </label>
                  <div
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-white w-52 mt-[31px]"
                  >
                    <nav
                      aria-label="Main Nav"
                      className="flex flex-col space-y-1"
                    >
                      <aside className="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                        Shirt
                      </aside>

                      <details className="group [&_summary::-webkit-details-marker]:hidden duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 py-1 hover:text-blue-700 text-gray-500">
                        <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                          <span className="text-sm font-medium"> Jeans </span>

                          <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </summary>

                        <nav
                          aria-label="Users Nav"
                          className="flex flex-col mt-2 ml-8 space-y-1"
                        >
                          <aside className="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                            Items 1
                          </aside>

                          <aside className="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                            Items 2
                          </aside>
                        </nav>
                      </details>

                      <aside className="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                        Jackets
                      </aside>

                      <aside className="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                        Blazer
                      </aside>

                      <details className="group [&_summary::-webkit-details-marker]:hidden duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 py-1 hover:text-blue-700 text-gray-500">
                        <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                          <span className="text-sm font-medium"> Boots </span>

                          <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </summary>

                        <nav
                          aria-label="Account Nav"
                          className="flex flex-col mt-2 ml-8 space-y-1"
                        >
                          <aside className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                            Items 1
                          </aside>

                          <aside className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                            Items 2
                          </aside>

                          <form action="/logout">
                            <button
                              type="submit"
                              className="w-full px-4 py-2 text-sm font-medium text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                              Items 3
                            </button>
                          </form>
                        </nav>
                      </details>
                    </nav>
                  </div>
                </div>
                <Link
                  className="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-900 before:transition hover:before:scale-100 uppercase  hidden lg:block"
                  to="/shop"
                >
                  new arrival
                </Link>
                <Link
                  className="relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-900 before:transition hover:before:scale-100 uppercase  hidden lg:block"
                  to="/about"
                >
                  about
                </Link>
              </aside>
            </div>
            <aside className="flex items-center space-x-5">
              <div
                onClick={() => {
                  searchPageVisit();
                }}
                className="flex cursor-pointer"
              >
                <IconContext.Provider value={{ size: 23, color: "#ABADAF" }}>
                  <RiSearchLine />
                </IconContext.Provider>
              </div>

              <Link to="/wishlist-page" className="relative cursor-pointer">
                <IconContext.Provider value={{ size: 23, color: "#ABADAF" }}>
                  <RiHeart2Line />
                </IconContext.Provider>
                <aside className="absolute -top-2 -right-2 bg-[#2a355c99] w-4 h-4 rounded-full text-white flex items-center justify-center">
                  <p className="text-[12px]">{email ? wishlist?.length : 0}</p>
                </aside>
              </Link>

              <Link
                to="/payments-page"
                className="dropdown dropdown-end cursor-pointer "
              >
                <IconContext.Provider value={{ size: 23, color: "#ABADAF" }}>
                  <RiShoppingCartLine />
                </IconContext.Provider>
                <aside className="absolute -top-2 -right-2 bg-[#2a355c99] w-4 h-4 rounded-full text-white flex items-center justify-center">
                  <p className="text-[12px]">{cart ? cart?.length : 0}</p>
                </aside>
              </Link>
              <div className="dropdown dropdown-end cursor-pointer">
                <label tabIndex={0} className="cursor-pointer">
                  {image ? (
                    <img
                      title={name}
                      className="w-9 h-9 rounded-full"
                      src={image}
                      alt=""
                    />
                  ) : (
                    <IconContext.Provider
                      value={{ size: 23, color: "#ABADAF" }}
                    >
                      <RiUser6Line />
                    </IconContext.Provider>
                  )}
                </label>

                <div
                  tabIndex={0}
                  className="dropdown-content font-Poppins tracking-wide shadow w-48 bg-white flex flex-col space-y-5 py-3 px-5 mt-6 lg:mt-7"
                >
                  <nav aria-label="Main Nav" className="flex flex-col">
                    {image && (
                      <aside
                        onClick={handleLogout}
                        className="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500"
                      >
                        <div className="">
                          <IconContext.Provider value={{ size: 23 }}>
                            <IoLogInOutline />
                          </IconContext.Provider>
                        </div>

                        <span className="ml-3 text-sm font-medium">
                          Log Out
                        </span>
                      </aside>
                    )}
                    {!image && (
                      <Link to="/SignIn">
                        <aside className="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>

                          <span className="ml-3 text-sm font-medium">
                            {" "}
                            Log In{" "}
                          </span>
                        </aside>
                      </Link>
                    )}

                    {!image && (
                      <Link to="/SignUp">
                        <aside className="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                          <div>
                            <IconContext.Provider value={{ size: 17 }}>
                              <IoPersonAddOutline />
                            </IconContext.Provider>
                          </div>

                          <span className="ml-3 text-sm font-medium">
                            Register
                          </span>
                        </aside>
                      </Link>
                    )}

                    {email && (
                      <aside className="flex items-center duration-100 hover:border-l-[3px] hover:border-blue-500 hover:bg-blue-50 px-4 py-3 hover:text-blue-700 text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>

                        <span className="ml-3 text-sm font-medium">
                          {" "}
                          Account{" "}
                        </span>
                      </aside>
                    )}
                  </nav>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
