import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../../Shared/Spinner";
import ReportCard from "./ReportCard";

const ReportedProducts = () => {
  const {
    data: productsReport = [],
    isLoading,
    // refetch,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/report-get`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="container mx-auto">
      <div className="font-Babes text-4xl tracking-wide border-l-8 border-red-400 mt-0 lg:mt-10 w-4/5 mx-auto">
        <h1 className="px-3 text-[21px] text-black">
          All Reported {""}
          <span className="text-red-400 tracking-widest">Products</span>{" "}
        </h1>
        <h1 className="px-3 text-red-400">
          Details Report <span className="text-black">& Reported User</span>
        </h1>
      </div>
      <div className="grid w-5/6 mx-auto mt-10">
        {productsReport.map((report, inx) => (
          <ReportCard key={inx} report={report}></ReportCard>
        ))}
      </div>
    </div>
  );
};

export default ReportedProducts;
