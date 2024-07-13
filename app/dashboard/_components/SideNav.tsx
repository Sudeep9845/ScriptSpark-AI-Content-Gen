"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";
import LogoImage from "@/components/component/menu/Logo";
export default function SideNav() {
  const MenuLists = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  });
  return (
    <div className="h-screen p-5 shadow-sm border bg-zinc-950 border-black border-r-4 border-r-sky-400">
      <div className="flex justify-center">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="ScriptSpark Logo"
            width={80}
            height={80}
            className="drop-shadow-md drop-shadow-lime-300"
          />
        </Link>
      </div>

      <br />
      <div className="mt-3">
        {MenuLists.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <div
              key={index}
              className={`flex gap-2 mb-2 p-3
              hover:bg-blue-400 rounded-lg
              cursor-pointer items-center
              ${path == menu.path && "bg-blue-400 text-white "} 
              `}
            >
              <menu.icon className="h-6 w-7 text-white fill-black" />
              <h2 className="text-lg text-white">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}
