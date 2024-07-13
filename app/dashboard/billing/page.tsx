import { Check } from "lucide-react";
import React from "react";

const Billing = () => {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden">
        <h2 className="text-center text-2xl text-sky-400 mr-[270px] mt-5 mb-0">
          !!!!Under development!!!
        </h2>
        <div className="w-full h-full flex flex-row items-center justify-center gap-10 pr-[250px] pt-[-30px]">
          <div className="shadow-lg backdrop-blur-md shadow-sky-400  flex flex-col items-start justify-start gap-3 h-[550px] w-[350px] bg-none border-none  rounded-lg hover:scale-110 p-5 hover:transition-all transition ease-in-out duration-75">
            <h2 className="text-lime-400 font-bold text-5xl">FREE TRAIL</h2>
            <hr className="h-1 w-full border-t-0 border-b-2 border-b-sky-400" />
            <div className="flex gap-3 items-center justify-center pt-3">
              <Check className="text-rose-500 text-2xl" />
              <h3 className="text-orange-400 font-semibold text-2xl">
                20000 Free Credits
              </h3>
            </div>
            <div className="flex gap-3 items-center justify-center pt-3">
              <Check className="text-rose-500 text-2xl" />
              <h3 className="text-orange-400 font-semibold text-2xl">
                Free AI Access
              </h3>
            </div>
            <div className="flex gap-3 items-center justify-center pt-3">
              <Check className="text-rose-500 text-2xl" />
              <h3 className="text-orange-400 font-semibold text-2xl">
                History Enabled
              </h3>
            </div>
            <div className="flex gap-3 items-center justify-center pt-3">
              <Check className="text-rose-500 text-2xl" />
              <h3 className="text-orange-400 font-semibold text-2xl">
                History Enabled
              </h3>
            </div>
            <div className="flex gap-3 items-center justify-center pt-3">
              <Check className="text-rose-500 text-2xl" />
              <h3 className="text-orange-400 font-semibold text-2xl">
                History Enabled
              </h3>
            </div>
            <div className="flex gap-3 items-center justify-center pt-3">
              <Check className="text-rose-500 text-2xl" />
              <h3 className="text-orange-400 font-semibold text-2xl">
                History Enabled
              </h3>
            </div>
            <div className="flex gap-3 items-center justify-center pt-3">
              <Check className="text-rose-500 text-2xl" />
              <h3 className="text-orange-400 font-semibold text-2xl">
                History Enabled
              </h3>
            </div>
            <div className="flex gap-3 items-center justify-center pt-3 text-4xl">
              <Check className="text-rose-500 " />
              <h3 className="text-orange-400 font-semibold text-2xl">
                History Enabled
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
