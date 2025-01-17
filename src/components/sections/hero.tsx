import { Button } from "@/components/common/button";
import { Planet } from "../common/planet";

import startsBg from "@/assets/images/stars.png";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const textPositionY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative h-[492px] md:h-[800px] flex items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ backgroundImage: `url(${startsBg})`, backgroundPositionY }}
      animate={{
        backgroundPositionX: 900,
      }}
      transition={{
        repeat: Infinity,
        duration: 120,
        ease: "linear",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center_,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]" />

      <Planet />

      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[344px] md:size-[580px] border border-white opacity-20 rounded-full"
      >
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 size-2 bg-white rounded-full" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 size-2 bg-white rounded-full" />
        <div className="absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 size-5 border border-white rounded-full inline-flex justify-center items-center">
          <div className="bg-white size-2 rounded-full"></div>
        </div>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[444px] md:size-[780px] border border-white/20 rounded-full border-dashed" />

      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[544px] md:size-[980px] border border-white opacity-20 rounded-full"
      >
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 size-2 bg-white rounded-full" />
        <div className="absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 size-2 bg-white rounded-full" />
      </motion.div>

      <motion.div
        style={{ y: textPositionY }}
        className="container relative mt-16"
      >
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold text-center tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl text-white/70 text-center mt-5 max-w-xl mx-auto">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex items-center justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </motion.div>
    </motion.section>
  );
}
