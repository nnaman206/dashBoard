import React from "react";

function Card({ image,title, description  }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        
      </div>
    </div>
  );
}

export default Card;
