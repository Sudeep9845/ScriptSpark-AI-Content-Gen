"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function SiteReview() {
  return (
    <div className="h-screen  flex flex-col antialiased bg-zinc-950 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-center mb-0 text-[250px] font-semibold">Reviews</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "ScriptSpark has revolutionized the way I generate content for my blog. The AI templates are incredibly versatile and the real-time editor saves me so much time.",
    name: "Ananya Sharma",
    title: "Content Creator",
  },
  {
    quote:
      "As a social media manager, ScriptSpark has become an indispensable tool for me. The ability to generate engaging posts quickly has boosted my productivity significantly.",
    name: "Rohit Verma",
    title: "Social Media Manager",
  },
  {
    quote:
      "I love how ScriptSpark stores all my previous outputs in the history section. It makes it easy to reference and reuse past content, which is a huge time-saver.",
    name: "Meera Patel",
    title: "Freelance Writer",
  },
  {
    quote:
      "The secure authentication and user-friendly dashboard make ScriptSpark a pleasure to use. It's a must-have tool for anyone serious about content creation.",
    name: "Arjun Rao",
    title: "Digital Marketer",
  },
  {
    quote:
      "ScriptSpark's AI capabilities are impressive. From code generation to blog writing, it handles everything with ease. Highly recommended for tech enthusiasts and writers alike.",
    name: "Priya Iyer",
    title: "Software Developer",
  },
];
