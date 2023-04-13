// import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";
// import { useState } from "react";
import { useGetProductsQuery } from "../../Features/Products/ProductApi";
import Loading from "../../Reusable/Loading";
import CoverImg from "../CoverImg/CoverImg";
import ShopCard from "./ShopCard";
// import CategoriesModal from "../BookingModal/CategoriesModal";

const Shop = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();

  const cardData = data?.data || {};
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    toast.error(error?.error);
  }
  return (
    <>
      <div className="h-[200px] overflow-hidden">
        <CoverImg />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-5 gap-3 container py-10 px-3 lg:px-0">
          {cardData?.map((shop, inx) => (
            <ShopCard key={inx} shop={shop}></ShopCard>
          ))}
        </div>
      </div>

      {/* {modalOpenClose && (
        <CategoriesModal
          modalOpenClose={modalOpenClose}
          setModalOpenClose={setModalOpenClose}
          modalData={categoriesName}
          // refetch={refetch}
        />
      )} */}
    </>
  );
};

export default Shop;
