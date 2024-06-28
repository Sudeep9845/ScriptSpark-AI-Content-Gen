import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-screen gap-3 bg-zinc-900">
        <h2 className="text-xl text-white font-semibold text-center">
          Hello Welcome to <br />
          <span className="text-primary text-2xl font-bold">
            Writizo an AI Content Generator Platform
          </span>
        </h2>
        <Link href={"/dashboard"}>
          <Button>Get Started</Button>
        </Link>
      </div>
    </>
  );
}
