import startBg from "@/assets/images/stars.png";
import gridLines from "@/assets/images/grid-lines.png";

import { Button } from "@/components/common/button";

export function CellToAction() {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="relative border border-white/15 py-24 rounded-xl overflow-hidden"
          style={{ backgroundImage: `url(${startBg})` }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,130)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{ backgroundImage: `url(${gridLines})` }}
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
        </div>
      </div>
    </section>
  );
}
