import { Search } from "lucide-react";
import React from "react";

const SearchSection = ({ onSearchInput }: any) => {
  return (
    <div className="p-10 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 flex  flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-white">Browse All Templates</h2>
      <p className="text-white">What would you like to create today?</p>
      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]">
          <Search className="text-primary" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="bg-transparent w-full outline-none text-black"
            onChange={(event) => onSearchInput(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;