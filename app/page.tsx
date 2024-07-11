import { LandingPage } from "@/components/component/LandingPage";
import { Button } from "@/components/ui/button";
import MainMenu from "@/components/component/menu/MainMenu";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen w-scree z-0 overflow-hidden">
        <LandingPage />
        <MainMenu />
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
