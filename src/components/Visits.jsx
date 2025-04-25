import React from "react";
import analytics from "../assets/analytics.jpg";
import { CiStar } from "react-icons/ci";
import { TfiStatsUp } from "react-icons/tfi";

function Visits() {
  return (
    <div>
      <div className="ml-100 mt-20">
        <img src={analytics} alt="" className="w-150 rounded-2xl" />
      </div>
      <div className=" text-white  -mt-90">
        <h1 className="ml-200 text-xl">Visits for today</h1>
        <p className="text-8xl ml-198">824</p>
      </div>
      <div className="flex items-center space-x-1 text-gray-600 text-sm mt-8 ml-195">
        <CiStar className="text-6xl -mt-4" />
        <span className="-mt-10 ml-2 text-xl">Popularity</span>
        <span className="-ml-23 text-xl mt-2">3.6K</span>
      </div>
      <div className="flex items-center space-x-1 text-gray-600 text-sm mt-8 ml-195">
        <TfiStatsUp className="text-6xl -mt-4" />
        <span className="-mt-10 ml-3 text-xl">Support</span>
        <span className="-ml-18 text-xl mt-2">4.7</span>
      </div>
    </div>
  );
}

export default Visits;
