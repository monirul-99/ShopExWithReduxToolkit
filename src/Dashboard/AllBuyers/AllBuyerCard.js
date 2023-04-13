import React from "react";
import { FaPhone, FaLocationArrow, FaEnvelope } from "react-icons/fa";

const AllBuyerCard = ({ buyer }) => {
  const { orderUser, location, phone, productsName, email, img } = buyer;
  return (
    <div className="font-Ubuntu text-black bg-white p-5 shadow-xl">
      <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse">
        <div className="space-y-3 flex flex-col justify-center">
          <h1>Buyer Name : {orderUser}</h1>
          <aside className="flex items-center space-x-3">
            <FaEnvelope />
            <p className="text-[15px]">{email}</p>
          </aside>

          <aside className="flex items-center space-x-3">
            <FaPhone />
            <p>{phone}</p>
          </aside>
          <aside className="flex items-center space-x-3">
            <FaLocationArrow />
            <p>{location}</p>
          </aside>
        </div>

        <div className="flex flex-col lg:items-end space-y-3 lg:space-y-0 mb-3 lg:mb-0">
          <img className="w-1/2" src={img} alt="" />
          <h1>{productsName}</h1>
        </div>
      </div>
    </div>
  );
};

export default AllBuyerCard;
