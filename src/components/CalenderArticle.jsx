import React from "react";
import { LuView } from "react-icons/lu";
import { BsHandThumbsUp } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";


function CalenderArticle({ date, title }) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white  rounded-lg">
      {/* <h1 className="-mt-40">Top Article</h1> */}
      <div className="text-xl text-black-500">{date}</div>
      <div className="-mt-05">
        <h3 className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </h3>
        
      </div>
     
      
    </div>
  );
}

export default CalenderArticle;
