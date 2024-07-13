import React from "react";
import { useId } from "react";

export function FeaturesSectionDemo() {
  return (
    <div className="py-20 lg:py-40 bg-zinc-950 " id="Features">
      <h2 className="text-center mb-6 text-[350px] font-semibold">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-zinc-800 dark:to-neutral-950 to-lime-400 p-6 rounded-3xl overflow-hidden hover:shadow-lg hover:shadow-lime-300 hover:bg-rose-300 transition-all ease-in-out duration-100"
          >
            <Grid size={20} />
            <p className=" text-orange-400 font-semibold text-3xl relative z-12">
              {feature.title}
            </p>
            <p className="text-slate-300 dark:text-neutral-400 mt-4 text-md font-normal relative z-12">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "AI Content Generation",
    description:
      "Utilize the power of Gemini AI and Gemini API to generate diverse content types, including blogs, social media posts, product descriptions, and code. ",
  },
  {
    title: "Drizzle ORM Integration",
    description:
      "Store all generated content and associated data securely using Drizzle ORM. This integration ensures data persistence, reliability, and easy access to your content history.",
  },
  {
    title: "Clerk Authentication",
    description:
      "Ensure secure and seamless authentication for users with Clerk. ScriptSpark uses Clerk to manage user authentication, providing a safe and smooth login experience.",
  },
  {
    title: "History Section",
    description:
      "Save and access all your previous outputs in a dedicated history section. This feature allows you to easily revisit and reuse past content, enhancing productivity and content management.",
  },
  {
    title: "Real-time Text Editor",
    description:
      "Edit your generated output instantly with an integrated text editor. The editor allows for real-time modifications, enabling you to tweak and perfect your content on the spot.",
  },
  {
    title: "Multiple AI Templates",
    description:
      "Support for a variety of AI templates designed for specific tasks such as code generation, code explanation, bug solving, blog creation, product descriptions, and social media content.",
  },
  {
    title: "Future Expansion",
    description:
      "ScriptSpark is continually evolving, with plans to introduce more AI templates to meet diverse content generation needs. Stay tuned for new features and enhancements.",
  },
  {
    title: "Well-Designed Dashboard",
    description:
      "Navigate through ScriptSpark easily with a user-friendly and visually appealing dashboard. The design ensures an intuitive user experience, helping you access and manage features effortlessly.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
