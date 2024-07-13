"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

const AboutPage = () => {
  return (
    <>
      <div
        className="h-screen w-screen flex items-center justify-center overflow-hidden cursor-pointer"
        id="AboutUs"
      >
        <MaskContainer
          revealText={
            <p className="h-screen w-screen mx-auto text-lime-400 bg-zinc-950 text-center text-[350px] font-bold">
              AboutUs
            </p>
          }
          className="h-[60em] border rounded-md"
        >
          The first priority of{" "}
          <span className="text-lime-400">ScriptSpark</span> is to harness the
          power of AI for your content needs. The second priority of ScriptSpark
          is to maximize productivity with real-time editing and a comprehensive
          history section. The third priority is to utilize the user-friendly{" "}
          <span className="text-lime-400">ScriptSpark</span> dashboard to
          streamline your workflow.
        </MaskContainer>
      </div>
    </>
  );
};

export default AboutPage;
