import avatar1 from "@/assets/images/avatar-1.png";
import avatar2 from "@/assets/images/avatar-2.png";
import avatar3 from "@/assets/images/avatar-3.png";
import avatar4 from "@/assets/images/avatar-4.png";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { TestimonialCard } from "../common/testimonial-card";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isLargerThanMd = useMediaQuery("(min-width: 765px)");
  const isLargerThanLg = useMediaQuery("(min-width: 1024px)");
  const isLargerThanXl = useMediaQuery("(min-width: 1280px)");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollX = () => {
    if (isLargerThanXl) {
      return ["2%", "-70%"];
    } else if (isLargerThanLg) {
      return ["2%", "-116%"];
    } else if (isLargerThanMd) {
      return ["2%", "-130%"];
    } else {
      return ["0%", "0%"];
    }
  };

  const x = useTransform(scrollYProgress, [0, 1], scrollX());

  return (
    <section ref={containerRef} className="py-20 md:py-24 md:h-[300vh]">
      <div className="md:sticky md:top-[100px] container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Beyond Expectations.
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-sm mx-auto tracking-tight text-center mt-5">
          Our revolutionary AI SEO tools have transformed our client's
          strategies
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black,black_20%,black_80%,transparent)]">
          {!isLargerThanMd && (
            <motion.div
              initial={{ translateX: "0" }}
              animate={{ translateX: "-50%" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              style={{ x }}
              className="flex gap-5 flex-none pl-5 -translate-x-1/2"
            >
              {[...testimonials, ...testimonials].map(
                ({ name, text, title, avatarImg }, i) => (
                  <TestimonialCard
                    key={i}
                    name={name}
                    text={text}
                    title={title}
                    avatarImg={avatarImg}
                    i={i}
                  />
                )
              )}
            </motion.div>
          )}

          {isLargerThanMd && (
            <motion.div style={{ x }} className="flex gap-5">
              {testimonials.map(({ name, text, title, avatarImg }, i) => (
                <TestimonialCard
                  key={i}
                  name={name}
                  text={text}
                  title={title}
                  avatarImg={avatarImg}
                  i={i}
                />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
