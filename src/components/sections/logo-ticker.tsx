import acmeLogo from "@/assets/images/logo-acme.png";
import apexLogo from "@/assets/images/logo-apex.png";
import celestialLogo from "@/assets/images/logo-celestial.png";
import quantumLogo from "@/assets/images/logo-quantum.png";
import pulseLogo from "@/assets/images/logo-pulse.png";
import echoLogo from "@/assets/images/logo-echo.png";

import { motion } from "framer-motion";

export function LogoTicker() {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:gap-5 gap-8">
          <div className="flex-1 md:flex-none">
            <h2 className="max-md:text-center">
              Trusted by top innovative teams
            </h2>
          </div>
          <div className="md:flex-1 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex flex-none items-center gap-14 pr-14 -translate-x-1/2"
            >
              {[
                acmeLogo,
                apexLogo,
                celestialLogo,
                quantumLogo,
                pulseLogo,
                echoLogo,
                acmeLogo,
                apexLogo,
                celestialLogo,
                quantumLogo,
                pulseLogo,
                echoLogo,
              ].map((logo) => (
                <img src={logo} alt={logo} className="h-6 w-auto" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
