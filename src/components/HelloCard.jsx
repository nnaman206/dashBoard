import React from "react";
import gif from "../assets/test2.gif"; // replace with your actual gif path

function HelloCard({ title, description }) {
  return (
    <div className="bg-yellow-300 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between overflow-hidden p-6 w-4xl mx-auto">
      {/* Text content */}
      <div className="md:w-2/3 mb-4 md:mb-0">
        <h2 className="text-2xl font-bold mb-2">{"title"}</h2>
        <p className="text-gray-800 mb-4">{"description"}</p>
        <button className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-900 transition">
          Click Me
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
