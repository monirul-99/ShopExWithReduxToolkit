import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

import Spinner from "../../Shared/Spinner";

const MyProducts = () => {
  const {
    data: myProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    // queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        // `http://localhost:8000/my-products-email/${user?.email}`,
        {}
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }

  const handleAdvertise = (id) => {
    fetch(`http://localhost:8000/update/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Advertise Add Successful!");
          refetch();
        }
      });
  };

  const myProductsDelete = (id) => {
    fetch(`http://localhost:8000/all-categories/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          // toast.success(`Hello, ${user?.displayName} ! Your Products Removed`);
          refetch();
        }
      });
  };

  return (
    <div className=" text-white">
      <div className="w-full py-20 px-10">
        <table className="table overflow-x-auto w-full">
          <thead className="text-white">
            <tr className="">
              <th className="p-8 bg-gray-200 text-black ">Num</th>
              <th className="p-8 bg-gray-200 text-black ">
                Image | Title | Location
              </th>
              <th className="p-8 bg-gray-200 text-black ">Product Status</th>
              <th className="p-8 bg-gray-200 text-black ">price</th>
              <th className="p-8 bg-gray-200 text-black ">Year Of Uses</th>
              <th className="p-8 bg-gray-200 text-black ">Products Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {myProducts?.map((book, inx) => (
              <tr key={inx}>
                <th>{inx + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-circle w-24 h-24">
                        <img
                          src={book.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold capitalize">{book.title}</div>
                      <div className="text-sm opacity-50">{book.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {book.status === "available" ? (
                    <span className="badge badge-accent badge-sm p-4">
                      Available
                    </span>
                  ) : (
                    <span className="badge badge-warning   badge-sm p-4">
                      Sold Out
                    </span>
                  )}
                </td>
                <td>$ {book.price}</td>
                <th>{book.useDuration}</th>
                <th>
                  {book.advertise === true && book.status === "available" && (
                    <button
                      onClick={() => handleAdvertise(book._id)}
                      className="btn btn-success"
                    >
                      Advertise Done
                    </button>
                  )}
                  {book.advertise === false && book.status === "available" && (
                    <button
                      onClick={() => handleAdvertise(book._id)}
                      className="btn btn-outline btn-secondary"
                    >
                      Add To Advertise
                    </button>
                  )}
                  {book.status === "sold" && (
                    <button
                      onClick={() => myProductsDelete(book._id)}
                      className="btn btn-outline btn-warning"
                    >
                      Delete Product
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
