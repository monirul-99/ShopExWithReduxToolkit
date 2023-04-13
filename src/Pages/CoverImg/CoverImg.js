import React from "react";

const CoverImg = ({ allProducts }) => {
  return (
    <div>
      <section className="relative bg-[url(https://img.freepik.com/free-photo/young-happy-woman-shopper-showing-okay-sign-winking-pleased-with-good-discounts-buying-staff-sale_1258-119323.jpg?w=1800&t=st=1674560441~exp=1674561041~hmac=41fcb74b4e40b394dfbef5a7be9d10e6ed52bbd3ee4af93132f2723325e84db6)] bg-cover bg-center bg-no-repeat -mt-7 filter">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative mx-auto px-4 py-32">
          <div className="text-center -mt-6">
            <strong className="capitalize font-extrabold text-xl text-white">
              {allProducts?.length} Products available
            </strong>
            <strong className="block font-extrabold text-3xl text-white">
              #enjoy Your Shopping.
            </strong>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoverImg;
