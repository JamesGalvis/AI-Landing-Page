import { cn } from "@/lib/utils";

interface NavMenuProps {
  className?: string;
}

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

export function NavMenu({ className }: NavMenuProps) {
  return (
    <nav
      className={cn("flex items-center gap-8 text-sm text-white/70", className)}
    >
      {navLinks.map(({ label, href }, i) => (
        <a key={i} href={href} className="hover:text-white transition">
          {label}
        </a>
      ))}
    </nav>
  );
}
