import React from "react";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";

function Finance() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-80">
        <h1>Finance Performance</h1>
        <div className="flex items-center space-x-4 mt-10">
          <PiCurrencyCircleDollarFill className="text-4xl text-green-500" />
          <h2 className="text-xl font-semibold text-gray-800">12841</h2>
        </div>
        <p className="text-gray-600 mt-4">
          Track your income, expenses, and savings effortlessly.
        </p>
      </div>
    </div>
  );
}

export default Finance;
