import { AboutHero } from "../Components/AboutHero";
import { Footer } from "../Components/Footer";
import { FooterAnimation } from "../Components/FooterAnimation";
import { Topbar } from "../Components/Topbar";
import { AboutIntro } from "../Components/AboutIntro";
import { motion } from "framer-motion";
export function About() {
  return (
    <div>
      <Topbar></Topbar>
      <AboutIntro></AboutIntro>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <AboutHero></AboutHero>
      </div>
      <FooterAnimation></FooterAnimation>

      <Footer></Footer>
    </div>
  );
}
