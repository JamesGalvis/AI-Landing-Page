// Components
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { LogoTicker } from "@/components/sections/logo-ticker";
import { Features } from "@/components/sections/features";
import { Testimonials } from "@/components/sections/testimonials";
import { CellToAction } from "@/components/sections/cell-to-action";
import { Footer } from "@/components/sections/footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CellToAction />
      <Footer />
    </>
  );
}

export default App;
