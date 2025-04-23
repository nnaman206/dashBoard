import React from "react";

function Card({ icon, title, description,iconColor }) {
  return (
    <div className={`${iconColor} shadow-md rounded-xl overflow-hidden max-w-80`}>
      <div className="p-4 flex items-center space-x-2">
        <span className="text-3xl text-black-600">{icon}</span>
        <div>
          <h2 className="text-xl font-semibold mb-1 text-black-600">{title}</h2>
          <p className="text-black-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
