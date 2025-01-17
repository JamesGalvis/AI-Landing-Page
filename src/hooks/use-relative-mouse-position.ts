import { useMotionValue } from "framer-motion";
import { RefObject, useEffect } from "react";

export function useRelativeMousePosition(to: RefObject<HTMLElement>) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      if (!to.current) return;

      const { top, left, width, height } = to.current.getBoundingClientRect();

      const xPercent = ((event.x - left) / width) * 100;
      const yPercent = ((event.y - top) / height) * 100;

      mouseX.set(xPercent);
      mouseY.set(yPercent);
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mouseX, mouseY, to]);

  return { mouseX, mouseY };
}
