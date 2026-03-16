import { motion } from "framer-motion";
import heroCoach from "@/assets/hero-coach.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
    {/* Blue glow effect */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center_right,_hsl(217,91%,53%,0.2),_transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(217,91%,53%,0.08),_transparent_50%)]" />

    <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center relative z-10">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-display font-black text-xl text-foreground tracking-tight">
            <span className="text-primary">TVT</span> tevasa
          </span>
          <span className="text-muted-foreground text-xs uppercase tracking-widest">TRANSFORMAR</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground leading-[1.1]">
          <span className="text-primary">PIERDE HASTA 5KG</span>
          <br />
          <span className="text-foreground/90 text-3xl md:text-4xl lg:text-5xl">
            de sobrepeso y <span className="text-primary">elimina</span>
          </span>
          <br />
          <span className="text-foreground/90 text-3xl md:text-4xl lg:text-5xl">
            malos hábitos <span className="text-primary underline decoration-primary">en 30 días o menos</span>
          </span>
          <br />
          <span className="text-foreground/90 text-2xl md:text-3xl">con el <span className="font-black">MÉTODO TVT</span></span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <img
          src={heroCoach}
          alt="SantiFit - Creador del Método TVT"
          className="max-h-[550px] object-cover rounded-lg"
        />
      </motion.div>
    </div>
  </section>
);

export default Hero;
