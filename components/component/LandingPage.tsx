import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

import { FlipWord } from "./FlipWord";

export function LandingPage() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute  inset-0 flex flex-col items-center justify-center">
        <div className=" mt-9 flex flex-col justify-center items-center gap-2 font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-4xl bg-orange-400 ">
            Welcome to the{" "}
            <span className=" stroke-lime-400  font-semibold">
              `ScriptSpark`
            </span>
            <br /> an{" "}
            <span className=" stroke-lime-400 font-semibold">
              AI-Content-Generatoror
            </span>
            <br /> Platform
          </p>
          <br />
          <br />
          <FlipWord />
        </div>
      </div>
    </BackgroundGradientAnimation> 
  );
}
