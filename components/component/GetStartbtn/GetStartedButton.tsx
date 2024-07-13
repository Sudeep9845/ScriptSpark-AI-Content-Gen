import { buttonVariants } from "@/components/ui/button";
import React from "react";
import "./btn.css";
import Link from "next/link";

const GetStartbtn = () => {
  return (
    <Link href={"/dashboard"}>
      <button className=" custom-btn btn-8 btn  ">
        <span className="btnspan">Get Started</span>
      </button>
    </Link>
  );
};

export default GetStartbtn;
