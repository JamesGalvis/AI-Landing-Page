import { DotLottiePlayer } from "@dotlottie/react-player";
import productImage from "@/assets/images/product-image.png";

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

export function Features() {
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
          {tabs.map(({ title, icon, isNew }) => (
            <div
              key={title}
              className="lg:flex-1 flex items-center gap-2.5 p-2.5 rounded-xl border border-white/15"
            >
              <div className="flex items-center justify-center size-12 border border-white/15 rounded-lg">
                <DotLottiePlayer src={icon} className="size-5" autoplay />
              </div>
              <p className="font-medium">{title}</p>
              {isNew && (
                <span className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff]">
                  new
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{ backgroundImage: `url(${productImage})` }}
          ></div>
        </div>
      </div>
    </section>
  );
}
