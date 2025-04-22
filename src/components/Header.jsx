import React from "react";

function Header() {
  const [search, setSearch] = React.useState("");
  return (
    <div>
      <div className="flex items-center justify-center mt-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-[rgba(9, 9, 84, 0.74)] p-2 pl-10 rounded-lg border-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl">
            🔍
          </span>
        </div>
      </div>

      <div className="flex items-end justify-end -mt-7 ">
        <div className="flex  gap-2 cursor-pointer  px-4  rounded-md ">
          <span className="text-xl">👤</span>
          <span className="font-medium">Naman Goel</span>
          <span className="text-sm">▼</span>
        </div>
      </div>
      <div className="flex ml-325 -mt-9 ">
        <div className="flex gap-2 cursor-pointer  px-4 py-2 rounded-md ">
          <span className="relative text-xl">
            🔔
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </span>
        </div>
      </div>
      <div className="flex ml-315 -mt-11">
        <div className="flex items-center gap-2 cursor-pointer  px-4 py-2 rounded-md ">
          <span className="relative text-xl">
            📩
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              5
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
