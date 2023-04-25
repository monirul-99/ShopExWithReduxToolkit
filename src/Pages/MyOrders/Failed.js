import React from "react";
import { Link } from "react-router-dom";

const Failed = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-100 font-Poppins">
      <div className="bg-white shadow-lg rounded-lg border border-gray-200 px-10 py-8">
        <h1 className="text-4xl font-semibold text-red-500 mb-8">
          Payment Failed
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          We're sorry, your payment was not successful.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Please check your payment details and try again.
        </p>
        <Link
          to="/"
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Failed;
