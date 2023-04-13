import React, { useEffect, useState } from "react";
import AllBuyerCard from "./AllBuyerCard";

const AllBuyers = () => {
  const [buyer, setBuyer] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/all-buyers-get")
      .then((res) => res.json())
      .then((data) => setBuyer(data));
  }, []);
  return (
    <div className="container mx-auto py-12">
      <div className="font-Babes text-4xl tracking-wide border-l-8 border-red-400 lg:m-8 m-4">
        <h1 className="px-3 text-[21px] text-black">
          Payment Completed {""}
          <span className="text-red-400 tracking-widest">Buyers</span>{" "}
        </h1>
        <h1 className="px-3 text-red-400">
          List Or <span className="text-black">Some Info</span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 lg:p-8 p-4">
        {buyer?.map((buy, inx) => (
          <AllBuyerCard key={inx} buyer={buy}></AllBuyerCard>
        ))}
      </div>
    </div>
  );
};

export default AllBuyers;
