import React from "react";
import gif from "../assets/test2.gif"; // replace with your actual gif path

function HelloCard({ title, description }) {
  return (
    <div className="bg-yellow-300 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between overflow-hidden p-1 w-3xl mx-auto">
      {/* Text content */}
      <div className="md:w-2/3 mb-4 md:mb-0">
        <h2 className="text-2xl ml-4 font-bold mb-2">{"Hello Naman !"}</h2>
        <div className="text-gray-800 mb-4 ml-4">{"description"}</div>
        <button className="bg-yellow-800 rounded-xl text-white ml-4 px-4 py-2 rounded hover:bg-yellow-900 transition mt-20">
          Write Your Post
        </button>
      </div>

      {/* GIF or image on right */}
      <div className="md:w-1/3 flex justify-center bg-yellow-300 p-4 rounded">
        <img src={gif} alt="GIF" className="w-48 h-48 object-contain" />
      </div>
    </div>
  );
}

export default HelloCard;
