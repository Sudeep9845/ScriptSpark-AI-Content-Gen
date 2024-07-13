import MainMenu from "@/components/component/menu/MainMenu";
import { SignUp } from "@clerk/nextjs";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="h-screen bg-zinc-900 relative">
        <MainMenu />

        <div className="flex items-center justify-center h-screen">
          <SignUp
            appearance={{
              elements: {
                logoBox: "h-[90px]",
                cardBox: "w-[700px] z-0",
              },
            }}
          />
        </div>
        <Link href={"/"}>
          <div className="absolute bottom-3 left-3 cursor-pointer ">
            <CircleArrowLeft className="text-white cursor-pointer h-8 w-8 hover:text-lime-400 active:scale-0" />
          </div>
        </Link>
      </div>
    </>
  );
}
