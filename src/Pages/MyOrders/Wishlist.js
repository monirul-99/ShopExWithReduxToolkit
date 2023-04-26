import React from "react";
import { useSelector } from "react-redux";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.Wish);

  return (
    <div className="container mx-auto font-Poppins">
      <h1 className="text-3xl text-[#404040] font-bold text-center tracking-wide py-10">
        My Wishlist
      </h1>

      <aside>
        <div className="w-full grid grid-cols-5 py-5">
          <aside className="grid col-span-1 border pl-5 items-center py-4 font-Libre text-black">
            Products Info
          </aside>
          <aside className="grid col-span-1 border justify-center items-center py-4 font-Libre text-black">
            Product Stock
          </aside>

          <aside className="grid col-span-1 border justify-center items-center py-4 font-Libre text-black">
            Remove Actions
          </aside>
          <aside className="grid col-span-1 border justify-center items-center py-4 font-Libre text-black">
            Product Price
          </aside>
          <aside className="grid col-span-1 border justify-center items-center py-4 font-Libre text-black">
            Payment
          </aside>
        </div>
        {wishlist?.map((product, inx) => (
          <WishlistCard key={inx} product={product}></WishlistCard>
        ))}
      </aside>
    </div>
  );
};

export default Wishlist;
