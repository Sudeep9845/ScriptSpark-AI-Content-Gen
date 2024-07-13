"use client";
import { LandingPage } from "@/components/component/LandingPage";
import AboutPage from "@/components/component/About/AboutPage";
import { FeaturesSectionDemo } from "@/components/component/Featuresdir/FeaturesSectionDemo";
import MainMenu from "@/components/component/menu/MainMenu";
import Link from "next/link";
import { SiteReview } from "@/components/component/SiteReview/SiteReview";
import ContactUs from "@/components/component/ContactUs/ContactUs";
import Footer from "@/components/component/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="h-screen w-scree z-0 overflow-x-hidden overflow-y-scroll no-scrollbar">
        <LandingPage />
        <MainMenu />
        <AboutPage />

        <FeaturesSectionDemo />

        <SiteReview />

        <ContactUs />
        <hr className="border-0 border-b-4 w-[100%] border-b-orange-400" />
        <Footer />
      </div>
    </>
  );
}
