import startBg from "@/assets/images/stars.png";
import gridLines from "@/assets/images/grid-lines.png";

import { Button } from "@/components/common/button";
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";
import { useRelativeMousePosition } from "@/hooks/use-relative-mouse-position";

export function CellToAction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const gridBackgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-200, 200]
  );

  const { mouseX, mouseY } = useRelativeMousePosition(borderedDivRef);
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}% ${mouseY}%, black, transparent)`;

  return (
    <section ref={sectionRef} className="py-20 md:py-24">
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          animate={{
            backgroundPositionX: 900,
          }}
          transition={{
            repeat: Infinity,
            duration: 120,
            ease: "linear",
          }}
          className="relative group border border-white/15 py-24 rounded-xl overflow-hidden"
          style={{ backgroundImage: `url(${startBg})`, backgroundPositionY }}
        >
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,130)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{
              backgroundImage: `url(${gridLines})`,
              backgroundPositionY: gridBackgroundPositionY,
            }}
          />
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,130)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              backgroundImage: `url(${gridLines})`,
              maskImage,
              backgroundPositionY: gridBackgroundPositionY,
            }}
          />
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto font-medium text-center tracking-tighter">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-xs mx-auto px-4 tracking-tight text-center mt-5">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex items-center justify-center mt-8">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
