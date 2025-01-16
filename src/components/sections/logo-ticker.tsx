import acmeLogo from "@/assets/images/logo-acme.png";
import apexLogo from "@/assets/images/logo-apex.png";
import celestialLogo from "@/assets/images/logo-celestial.png";
import quantumLogo from "@/assets/images/logo-quantum.png";
import pulseLogo from "@/assets/images/logo-pulse.png";
import echoLogo from "@/assets/images/logo-echo.png";

export function LogoTicker() {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2 className="">Trusted by top innovative teams</h2>
          </div>
          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex flex-none items-center gap-14">
              {[
                acmeLogo,
                apexLogo,
                celestialLogo,
                quantumLogo,
                pulseLogo,
                echoLogo,
              ].map((logo) => (
                <img src={logo} alt={logo} className="h-6 w-auto" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
