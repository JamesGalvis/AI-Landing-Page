import { Logo } from "@/components/common/logo";
import { MenuIcon } from "@/components/common/menu-icon";
import { Button } from "@/components/common/button";

const navLinks = [
  {
    label: "Features",
    href: "#",
  },
  {
    label: "Developers",
    href: "#",
  },
  {
    label: "Pricing",
    href: "#",
  },
  {
    label: "Changelog",
    href: "#",
  },
];

export function Header() {
  return (
    <header className="sticky md:fixed top-0 py-4 md:border-none border-b border-white/15 w-full z-10 max-md:backdrop-blur">
      <div className="container">
        <div className="flex items-center justify-between md:border md:border-white/15 md:p-2.5 md:rounded-xl max-w-2xl mx-auto md:backdrop-blur">
          <div>
            <div className="size-10 inline-flex items-center justify-center rounded-lg border border-white/15">
              <Logo className="size-8" />
            </div>
          </div>

          <nav className="flex items-center gap-8 text-sm text-white/70 max-md:hidden">
            {navLinks.map(({ label, href }, i) => (
              <a key={i} href={href} className="hover:text-white transition">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button>Join waitlist</Button>
            <MenuIcon className="size-8 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
}
