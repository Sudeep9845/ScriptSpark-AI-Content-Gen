import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import { BackgroundGradientDemo } from "@/components/component/BackgroundCard";

const TemplateCard = (item: TEMPLATE) => {
  return (
    <Link href={"/dashboard/content/" + item?.slug}>
      {/* <div className="p-5 shadow-lg shadow-sky-700 rounded-md bg-zinc-950 border-2 border-sky-400 flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all h-56">
        <Image src={item.icon} alt="icon" width={50} height={50} />
        <h2 className="font-medium text-lime-400 text-lg">{item.name}</h2>
        <p className="text-sky-400 line-clamp-3">{item.desc}</p>
      </div> */}
      <div>
        <BackgroundGradient className="rounded-[22px] max-w-sm sm:p-10 bg-zinc-900 dark:bg-zinc-900 h-[300px] p-5">
          <Image
            src={item.icon}
            alt="icon"
            height="50"
            width="50"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-lime-300 mt-4 mb-2 dark:text-neutral-200">
            {item.name}
          </p>

          <p className="text-sm text-neutral-400 dark:text-neutral-400">
            {item.desc}
          </p>
          {/* <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button> */}
        </BackgroundGradient>
      </div>
    </Link>
  );
};

export default TemplateCard;
