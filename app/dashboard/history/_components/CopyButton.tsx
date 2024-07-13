"use client";
import { Button } from "@/components/ui/button";
import React from "react";

function CopyButton({ aiResponse }: any) {
  return (
    <div>
      <Button
        variant="ghost"
        className="h-full mt-4 px-4 py-3 bg-rose-400 text-zinc-100"
        onClick={() => navigator.clipboard.writeText(aiResponse)}
      >
        Copy
      </Button>
    </div>
  );
}

export default CopyButton;
