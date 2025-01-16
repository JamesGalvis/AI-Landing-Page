import { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 120 120"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 60c38.137 0 60-21.863 60-60 0 38.137 21.863 60 60 60-38.137 0-60 21.863-60 60 0-38.137-21.863-60-60-60Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
