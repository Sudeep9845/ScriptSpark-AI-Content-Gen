import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWord() {
  const words = [
    "Blog Title",
    "Blog Content",
    "Blog Ideas",
    "Youtube SEO Title",
    "Youtube Description",
    "Youtube Tags",
    "Instagram Hash Tag",
    "Instagram Post",
    "Reel Idea",
    "Code",
    "Tagline",
    "Product Description",
  ];

  return (
    <div className=" flex justify-center items-end px-4">
      <div className="text-4xl mx-auto font-normal text-sky-300">
        Explore and Create
        <FlipWords words={words} className="stroke-lime-400" /> <br />
        with set of Robust and Powerful AI Tools
        <br /> Provided by{" "}
        <span className="stroke-lime-400">`ScriptSpark`</span>
      </div>
    </div>
  );
}
