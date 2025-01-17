import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import productImage from "@/assets/images/product-image.png";
import { useEffect, useRef, useState } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  ValueAnimationTransition,
} from "framer-motion";

const tabs = [
  {
    icon: "/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

interface FeatureTabProps {
  title: string;
  icon: string;
  isNew: boolean;
  isSelected: boolean;
  onClick: () => void;
}

function FeatureTab({
  title,
  icon,
  isNew,
  isSelected,
  onClick,
}: FeatureTabProps) {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current || !isSelected) return;

    xPercentage.set(0);
    yPercentage.set(0);
    const { width, height } = tabRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];
    const options: ValueAnimationTransition = {
      times,
      repeat: Infinity,
      ease: "linear",
      duration: 4,
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [xPercentage, yPercentage, isSelected]);

  const handleMouseEnter = () => {
    if (!dotLottieRef.current) return null;

    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };

  return (
    <div
      key={title}
      ref={tabRef}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      className="relative lg:flex-1 flex items-center gap-2.5 p-2.5 rounded-xl border border-white/15 cursor-pointer"
    >
      {isSelected && (
        <motion.div
          style={{ maskImage }}
          className="absolute inset-0 -mx-px rounded-xl border border-[#a369ff]"
        />
      )}
      <div className="flex items-center justify-center size-12 border border-white/15 rounded-lg">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={icon}
          className="size-5"
          autoplay
        />
      </div>
      <p className="font-medium">{title}</p>
      {isNew && (
        <span className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff]">
          new
        </span>
      )}
    </div>
  );
}

export function Features() {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectedTab = (index: number) => {
    setSelectedTab(index);

    const animateProps: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateProps
    );

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), 100, tabs[index].backgroundPositionX],
      animateProps
    );

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), 100, tabs[index].backgroundPositionY],
      animateProps
    );
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your SEO efforts.
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
          From small startup to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="flex flex-col lg:flex-row gap-3 mt-10">
          {tabs.map(({ title, icon, isNew }, i) => (
            <FeatureTab
              key={title}
              title={title}
              icon={icon}
              isNew={isNew}
              isSelected={selectedTab === i}
              onClick={() => handleSelectedTab(i)}
            />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${productImage})`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
