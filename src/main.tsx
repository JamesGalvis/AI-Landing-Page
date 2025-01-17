import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { ReactLenis } from "@studio-freight/react-lenis";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactLenis
      root
      props={{
        lerp: 0.08,
      }}
    >
      <App />
    </ReactLenis>
  </StrictMode>
);
