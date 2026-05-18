"use client";

import { useState } from "react";
import { motion, MotionValue, useMotionValueEvent } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const [progress, setProgress] = useState(0);

  // Listen to scroll progress changes
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setProgress(v);
  });

  // Text 1: Visible 0-10%, vanishes by 20%
  const opacity1 = progress < 0.1 ? 1 : progress < 0.2 ? 1 - (progress - 0.1) / 0.1 : 0;
  const y1 = progress < 0.1 ? 0 : progress < 0.2 ? -100 * ((progress - 0.1) / 0.1) : -100;

  // Text 2: Appears 20-30%, stays visible until end (100%)
  const opacity2 = progress < 0.2 ? 0
    : progress < 0.3 ? (progress - 0.2) / 0.1
    : 1;
  const y2 = progress < 0.2 ? 60
    : progress < 0.3 ? 60 - 60 * ((progress - 0.2) / 0.1)
    : 0;

  // Text 3: Appears 60-70%, stays visible until end (100%)
  const opacity3 = progress < 0.6 ? 0
    : progress < 0.7 ? (progress - 0.6) / 0.1
    : 1;
  const y3 = progress < 0.6 ? 60
    : progress < 0.7 ? 60 - 60 * ((progress - 0.6) / 0.1)
    : 0;

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* 0% - Center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ opacity: opacity1, y: y1 }}
          transition={{ duration: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl">
            Zahra Sayed.
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mt-4 tracking-wide font-light">
            Media & Communications Student.
          </p>
        </motion.div>
      </div>

      {/* 30% - Left */}
      <div className="absolute inset-y-0 left-8 md:left-24 flex items-center">
        <motion.div
          animate={{ opacity: opacity2, y: y2 }}
          transition={{ duration: 0 }}
          className="max-w-lg"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight drop-shadow-xl">
            I craft digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
              narratives.
            </span>
          </h2>
        </motion.div>
      </div>

      {/* 60% - Right */}
      <div className="absolute inset-y-0 right-8 md:right-24 flex items-center justify-end pt-12">
        <motion.div
          animate={{ opacity: opacity3, y: y3 }}
          transition={{ duration: 0 }}
          className="max-w-lg text-right"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight drop-shadow-xl">
            Bridging strategy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
              and creative content.
            </span>
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
