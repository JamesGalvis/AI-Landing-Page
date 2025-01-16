import { SVGProps } from "react";

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      {...props}
    >
      <path
        fill="#fff"
        d="M28.5 16a1 1 0 0 1-1 1h-22a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1Zm-23-7h22a1 1 0 1 0 0-2h-22a1 1 0 0 0 0 2Zm22 14h-22a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z"
      />
    </svg>
  );
}
