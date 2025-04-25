import React from "react";
import { LuView } from "react-icons/lu";
import { BsHandThumbsUp } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";


function TopArticle({ icon, title, date }) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white  rounded-lg">
      {/* <h1 className="-mt-40">Top Article</h1> */}
      <div className="text-8xl text-blue-500">{icon}</div>
      <div className="-mt-15">
        <h3 className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </h3>
        
      </div>
      <div className="-ml-117 -mb-16">
        <p className="text-gray-500 text-sm ">{date}</p>
        </div>
      <div className="flex items-center space-x-1 text-gray-600 text-sm -mt-14 ml-100">
        <LuView className="text-base" />
        <span>3.6K</span>
      </div>
     
      <div className="flex items-center space-x-1 text-gray-600 text-sm -mt-14">
        <BsHandThumbsUp className="text-base" />
        <span>3.6K</span>
      </div>
      <div className="flex items-center space-x-1 text-gray-600 text-sm -mt-14">
        <FaRegComment className="text-base" />
        <span>3.6K</span>
      </div>
    </div>
  );
}

export default TopArticle;
