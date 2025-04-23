import React from "react";
import { LuView } from "react-icons/lu";
import { BsHandThumbsUp } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";

function TopArticle({ icon, title, date }) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow rounded-lg">
      <div className="text-3xl text-blue-500">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis </h3>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
      <div className="flex items-center space-x-5 text-gray-600 text-sm">
        <LuView className="text-base" />
        <span>3.6K</span>
      </div>
     
      <div className="flex items-center space-x-1 text-gray-600 text-sm">
        <BsHandThumbsUp className="text-base" />
        <span>3.6K</span>
      </div>
      <div className="flex items-center space-x-1 text-gray-600 text-sm">
        <FaRegComment className="text-base" />
        <span>3.6K</span>
      </div>
    </div>
  );
}

export default TopArticle;
