"use client";
import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

import { FlipWord } from "./FlipWord";
import GetStartedButton from "./GetStartbtn/GetStartedButton";
import { Button } from "../ui/button";

export function LandingPage() {
  return (
    <BackgroundGradientAnimation>
      <div
        className="absolute  inset-0 flex flex-col items-center justify-center"
        id="Home"
      >
        <div className=" mt-9 flex flex-col justify-center items-center gap-2 font-bold px-4 pointer-events-none text-xl text-center md:text-2xl lg:text-5xl">
          <p className="bg-clip-text text-transparent drop-shadow-4xl bg-orange-400">
            Welcome to the <br />
            <span className=" stroke-lime-400  font-semibold text-5xl text-center md:text-7xl lg:text-9xl">
              `ScriptSpark`
            </span>
            <br /> an{" "}
            <span className=" stroke-lime-400 font-semibold ">
              AI-Content-Generator
            </span>
            <br /> Platform
          </p>
          <br />
          <FlipWord />
        </div>
        <GetStartedButton />
      </div>
    </BackgroundGradientAnimation>
  );
}
