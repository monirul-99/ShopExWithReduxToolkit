import React from "react";
import toast from "react-hot-toast";

const AllSellersCard = ({ seller, refetch, handleVerify }) => {
  const { image, email, name, _id, verify } = seller;
  console.log(seller);

  const handleUserDelete = (id) => {
    fetch(`http://localhost:8000/all-seller/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          // toast.success(`Hello, ${user?.displayName} ! User Removed`);
          refetch();
        }
      });
  };
  return (
    <>
      <div className="hidden lg:block">
        <div className="grid grid-cols-12 shadow-lg  items-center justify-between bg-slate-100 text-black border gap-16 w-4/5 mx-auto">
          <div className="grid col-span-4 grid-cols-2 items-center">
            <div className="avatar">
              <div className="lg:w-24 w-16 lg:rounded rounded-full">
                <img src={image} alt="" />
              </div>
            </div>
            <h1 className="text-[17px] capitalize">{name}</h1>
          </div>

          <div className="grid col-span-8 grid-cols-2 items-center">
            <div className="grid grid-cols-2">
              <h1 className="text-[17px]">{email}</h1>
            </div>
            <div className="grid grid-cols-6">
              <div className="flex">
                <button
                  onClick={() => handleUserDelete(_id)}
                  className="btn btn-outline btn-error rounded-sm mr-5"
                >
                  Delete Seller
                </button>
                {verify && (
                  <button
                    onClick={() => handleVerify(_id)}
                    className="btn btn-info rounded-sm mr-5"
                  >
                    Verified Seller
                  </button>
                )}
                {!verify && (
                  <button
                    onClick={() => handleVerify(_id)}
                    className="btn btn-outline btn-info rounded-sm mr-5"
                  >
                    Verify Seller
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden md:hidden block">
        <div className="grid shadow-xl grid-cols-1 items-center bg-slate-100 text-black border p-4 w-[95%] mx-auto">
          <div className="flex items-center justify-start space-x-5 p-3">
            <div className="avatar">
              <div className="lg:w-24 w-20 lg:rounded rounded-full">
                <img src={image} alt="" />
              </div>
            </div>
            <aside className="">
              <h1 className="text-[17px] capitalize">{name}</h1>
              <h1 className="text-[15px] text-center mr-4">{email}</h1>
              <div className="flex mr-8 space-x-3">
                <button
                  onClick={() => handleUserDelete(_id)}
                  className="p-2 btn-error rounded-full text-sm m-2 px-4 text-white mx-auto"
                >
                  Delete
                </button>
                {verify && (
                  <button
                    onClick={() => handleVerify(_id)}
                    className="p-2 btn-info rounded-full text-sm m-2 px-4 text-white mx-auto"
                  >
                    Verified
                  </button>
                )}
                {!verify && (
                  <button
                    onClick={() => handleVerify(_id)}
                    className="p-2 btn-info rounded-full text-sm m-2 px-4 text-white mx-auto"
                  >
                    Verify
                  </button>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllSellersCard;
