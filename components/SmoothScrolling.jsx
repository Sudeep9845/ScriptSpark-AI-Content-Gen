"use client";
import { ReactLenis, useLenis } from "libs/lenis";

function Layout() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return <ReactLenis root>{/* content */}</ReactLenis>;
}
// libs/lenis.js

export * from "lenis/react";
