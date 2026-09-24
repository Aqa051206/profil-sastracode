import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import WhyMe from "./components/WhyMe";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* ① Sticky floating pill navbar */}
      <Navbar />

      {/* ② Hero + Stats Strip */}
      <Hero />

      {/* ③ Tech Stack marquee */}
      <TechStack />

      {/* ④ About Me */}
      <About />

      {/* ⑤ Services */}
      <Services />

      {/* ⑥ Pricing */}
      <Pricing />

      {/* ⑦ Why Choose Me */}
      <WhyMe />

      {/* ⑧ Featured Projects */}
      <Projects />

      {/* ⑨ Testimonials */}
      <Testimonials />

      {/* ⑩ FAQ */}
      <FAQ />

      {/* ⑪ CTA / Get in Touch */}
      <CTA />

      {/* ⑫ Footer */}
      <Footer />
    </div>
  );
}
