import React from 'react';
import { FaLocationArrow } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

function Popularity() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-pink-200 rounded-2xl shadow-lg p-28 w-130">
        <h1 className="text-lg font-bold text-black-700 -ml-22 -mt-15">Popularity Rate</h1>
        <h2 className="text-8xl font-semibold text-black-700 -ml-22 mt-2">87</h2>
        <p className="text-black-600 mt-8 -ml-22">
          Your rate has increased because of your recent update activity.{" "}
          <b className="text-black-700">Keep moving</b> forward and get more points.
        </p>
      </div>
      <div className={`bg-white shadow-md rounded-xl overflow-hidden w-120 mt-70 -ml-125`}>
      <div className="p-4 flex items-center space-x-2">
        <span className="text-3xl text-black-600">{<FaLocationArrow/>}</span>
        <div>
          <p className="text-sm font-semibold mb-1 ml-4 text-black-600">Learn insights how to manage all!{" "} aspects</p>
          <div className='ml-90 -mt-7'>
          <span className='text-red-600 text-4xl'>{<FaPlayCircle/>}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Popularity;
