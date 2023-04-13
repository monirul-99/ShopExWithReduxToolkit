import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import ReportModal from "../../Dashboard/ReportedProducts/ReportModal";
import Spinner from "../../Shared/Spinner";
import BookingModal from "../BookingModal/BookingModal";
import AdvertiseCard from "./AdvertiseCard";

const Advertise = () => {
  // const [categoriesData, setCategoriesData] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [modalOpenCloseOne, setModalOpenCloseOne] = useState(null);
  const [modalOpenCloseTwo, setModalOpenCloseTwo] = useState(null);
  const [reportModalX, setReportModal] = useState();
  const { user } = useContext(AuthContext);

  const url = `http://localhost:8000/advertise-products`;

  const {
    data: categoriesData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {});
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="bg-white text-black px-4 pt-12">
      {categoriesData.length > 0 && (
        <div className="font-Babes text-4xl tracking-wide border-l-4 border-red-400 mt-0 lg:mt-10">
          <h1 className="px-3 text-[21px]">Popular Item in </h1>
          <h1 className="px-3">
            the market{" "}
            <span className="text-red-400 tracking-widest">Trending</span>
          </h1>
        </div>
      )}
      {categoriesData.length > 0 && (
        <div className="grid lg:grid-cols-3 justify-center gap-10 lg:w-[75%] mx-auto mt-10 py-16">
          {categoriesData.map((ads, inx) => (
            <AdvertiseCard
              key={inx}
              ads={ads}
              setModalOpenCloseOne={setModalOpenCloseOne}
              setModalData={setModalData}
              refetch={refetch}
              setModalOpenCloseTwo={setModalOpenCloseTwo}
              setReportModal={setReportModal}
            ></AdvertiseCard>
          ))}
        </div>
      )}
      {modalOpenCloseOne && (
        <BookingModal
          setModalOpenCloseOne={setModalOpenCloseOne}
          modalData={modalData}
          refetch={refetch}
        />
      )}
      {modalOpenCloseTwo && (
        <ReportModal
          reportModalX={reportModalX}
          setModalOpenCloseTwo={setModalOpenCloseTwo}
        />
      )}
    </div>
  );
};

export default Advertise;
