import avatar1 from "@/assets/images/avatar-1.png";
import avatar2 from "@/assets/images/avatar-2.png";
import avatar3 from "@/assets/images/avatar-3.png";
import avatar4 from "@/assets/images/avatar-4.png";

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
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Beyond Expectations.
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-sm mx-auto tracking-tight text-center mt-5">
          Our revolutionary AI SEO tools have transformed our client's
          strategies
        </p>
        <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black,black_20%,black_80%,transparent)]">
          <div className="flex gap-5">
            {testimonials.map(({ name, text, title, avatarImg }, i) => (
              <div
                key={i}
                className="border border-white/15 p-6 md:p-10 max-w-xs md:max-w-md rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] flex-none"
              >
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
