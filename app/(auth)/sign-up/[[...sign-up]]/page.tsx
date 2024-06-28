import { SignUp } from "@clerk/nextjs";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="h-screen bg-zinc-900 relative">
        <Link href={"/"}>
          <div className="absolute top-3 left-3 cursor-pointer ">
            <CircleArrowLeft className="text-white cursor-pointer h-8 w-8 hover:text-primary " />
          </div>
        </Link>
        <div className="flex items-center justify-center h-screen">
          <SignUp />
        </div>
      </div>
    </>
  );
}
