import { Search } from "lucide-react";
import React from "react";

const SearchSection = ({ onSearchInput }: any) => {
  return (
    <div className="z-0 bg-gradient-to-br from-lime-400 via-sky-500 to-orange-400 border-b-4 border-b-orange-400">
      <div className="z-1 p-10 h-full w-full flex flex-col justify-center items-center bg-opacity-35">
        <h2 className="text-3xl font-bold text-zinc-950">
          Browse the AI Templates
        </h2>
        <p className="text-zinc-800 font-semibold text-md">
          What would you like to create today?
        </p>
        <div className="w-full flex justify-center">
          <div className="flex gap-2 items-center p-2 border-2 border-lime-400 rounded-md bg-zinc-900 my-5 w-[50%]">
            <Search className="text-sky-400" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="bg-transparent w-full outline-none text-orange-400"
              onChange={(event) => onSearchInput(event.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
