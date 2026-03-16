import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Deliverables from "@/components/sections/Deliverables";
import Pricing from "@/components/sections/Pricing";
import Bonuses from "@/components/sections/Bonuses";
import Comparison from "@/components/sections/Comparison";
import SantiFitBio from "@/components/sections/SantiFitBio";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import JoinSection from "@/components/sections/JoinSection";

const Footer = () => (
  <footer className="bg-secondary py-8">
    <div className="container mx-auto px-4 text-center text-sm text-secondary-foreground/60">
      <p>© {new Date().getFullYear()} Reto TVT — Te Vas a Transformar. Todos los derechos reservados.</p>
    </div>
  </footer>
);

const Index = () => (
  <div className="overflow-x-hidden bg-background">
    <Hero />
    <Problem />
    <Deliverables />
    <Pricing />
    <Bonuses />
    <FinalCTA />
    <Comparison />
    <Testimonials />
    <SantiFitBio />
    <JoinSection />
    <FAQ />
    <Footer />
  </div>
);

export default Index;
