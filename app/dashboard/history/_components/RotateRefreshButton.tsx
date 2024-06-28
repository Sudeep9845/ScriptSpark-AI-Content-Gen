"use client";
import React, { useState } from "react";
import { RotateCcw } from "lucide-react";

const RotateRefreshButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    window.location.reload();
    setTimeout(() => setIsAnimating(false), 1000); // Reset animation after 1 second
  };

  return (
    <div
      className="rounded-md bg-zinc-200 p-2 cursor-pointer hover:shadow-md active:shadow-inner transition duration-300 transform hover:-translate-y-0.5 active:translate-y-0.5"
      onClick={handleClick}
    >
      <RotateCcw
        className={`text-primary ${
          isAnimating ? "-rotate-180 ease-in-out duration-200" : ""
        }`}
      />
    </div>
  );
};

export default RotateRefreshButton;
