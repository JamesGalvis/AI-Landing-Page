import { motion } from "framer-motion";

interface TestimonialCardProps {
  text: string;
  name: string;
  title: string;
  avatarImg: string;
  i: number;
}

export function TestimonialCard({
  text,
  avatarImg,
  name,
  title,
}: TestimonialCardProps) {
  return (
    <motion.div className="border border-white/15 p-6 md:p-10 max-w-xs md:max-w-md rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] flex-none">
      <p className="text-lg md:text-2xl tracking-tight">{text}</p>
      <div className="flex items-center gap-3 mt-5">
        <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
          <img
            src={avatarImg}
            alt={`Avatar for ${name}`}
            className="size-11 rounded-lg grayscale"
          />
        </div>
        <div>
          <span>{name}</span>
          <p className="text-sm text-white/50">{title}</p>
        </div>
      </div>
    </motion.div>
  );
}
