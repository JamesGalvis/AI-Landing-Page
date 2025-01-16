import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <button className="relative text-sm font-medium rounded-lg py-2 px-3 bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0_0_12px_#8c45ff]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 border border-white/20 rounded-lg [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="absolute inset-0 rounded-lg border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
        <div className="absolute inset-0 shadow-[0_0_12px_rgba(140,69,255,.7)_inset] rounded-lg" />
      </div>
      <span>{children}</span>
    </button>
  );
}
