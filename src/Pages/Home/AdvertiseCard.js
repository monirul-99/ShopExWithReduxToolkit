import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { HiBadgeCheck } from "react-icons/hi";
import { IoCartOutline, IoLocationOutline } from "react-icons/io5";

const AdvertiseCard = ({
  ads,
  setModalData,
  setModalOpenCloseOne,
  refetch,
  setReportModal,
  setModalOpenCloseTwo,
}) => {
  const [verifyChecker, setVerifyChecker] = useState(false);
  const {
    useDuration,
    time,
    title,
    OriginalPrice,
    img,
    owner,
    location,
    price,
    email,
    describe,
  } = ads;

  useEffect(() => {
    fetch(`http://localhost:8000/verify-seller-check/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setVerifyChecker(data.isVerifySeller);
      });
  }, [email]);

  // const handleSold = (id) => {
  //   fetch(`http://localhost:8000/sold-product/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       authorization: `bearer ${localStorage.getItem("access-token")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then(() => {});
  //   refetch();
  // };

  return (
    <div>
      <div className=" flex justify-center items-center font-Ubuntu">
        <div className="max-w-xs container bg-white rounded-md shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <img className="w-full h-[347px] cursor-pointer" src={img} alt="" />
          <div className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-xl  uppercase">{title}</h1>
              <label
                onClick={() => {
                  setModalOpenCloseTwo(ads);
                  setReportModal(ads);
                }}
                htmlhtmlFor="report-modal"
                className="bg-amber-300 px-3 rounded-full text-sm py-1 cursor-pointer"
              >
                Report This
              </label>
            </div>
            <h1 className="text-[16px]">Price : $ {price}</h1>
            <h1 className=" text-[16px]">Original Price : $ {OriginalPrice}</h1>
            <div className="flex items-center">
              {" "}
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Third star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fourth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-300 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fifth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <div className="flex items-center">
              <p className="">
                <IconContext.Provider value={{ size: 20 }}>
                  <IoLocationOutline />
                </IconContext.Provider>
              </p>
              <aside className="flex space-x-3">
                <p className="text-[16px] px-2">{location}</p>
                <p className="text-[16px] px-2">Uses {useDuration}</p>
              </aside>
            </div>
          </div>

          <aside>
            <p className="px-4">{describe.slice(0, 60)}. . .</p>
          </aside>

          <div className="flex p-4">
            <div className="flex items-center justify-between space-x-2 w-full">
              <div className="flex flex-col">
                <aside className="flex flex-row-reverse text-gray-800 font-bold cursor-pointer uppercase">
                  {verifyChecker && (
                    <IconContext.Provider
                      value={{ size: 18, color: "#199EE1" }}
                    >
                      <HiBadgeCheck />
                    </IconContext.Provider>
                  )}
                  {owner ? `${owner}` : "Not Found"}
                </aside>
                <p className="text-[10px]">{time ? time : "Not Found"}</p>
              </div>
              <label
                onClick={() => {
                  setModalData(ads);
                  setModalOpenCloseOne(ads);
                  setModalOpenCloseTwo(ads);
                }}
                htmlhtmlFor="my-modal-3"
                className="flex items-center space-x-2 border-gray-300 py-2 border-dashed border p-2 rounded-md duration-500  hover:border-blue-600 hover:border-double"
              >
                <IconContext.Provider value={{ size: 22, color: "#1E3A8A" }}>
                  <IoCartOutline />
                </IconContext.Provider>
                <p className="font-bold text-[14px] text-[#1E3A8A]">
                  Add To Cart
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseCard;
