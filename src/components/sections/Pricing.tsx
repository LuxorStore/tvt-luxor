import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CTAButton = ({ text, sub }: { text: string; sub?: string }) => (
  <motion.a
    href="#comprar"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className="inline-block animate-pulse-cta"
  >
    <div className="bg-accent text-accent-foreground font-display font-extrabold text-lg md:text-xl px-10 py-5 rounded-full shadow-cta cursor-pointer text-center">
      {text}
      {sub && <span className="block text-sm font-body font-normal mt-1 opacity-90">{sub}</span>}
    </div>
  </motion.a>
);

const Pricing = () => (
  <section id="comprar" className="bg-section-alt py-16 md:py-24 relative">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(217,91%,53%,0.08),_transparent_60%)]" />
    <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
          ¿Cuánto es la <span className="text-primary">inversión</span> para estar en{" "}
          <span className="font-black">TE VAS A TRANSFORMAR?</span>
        </h2>
        <p className="font-display font-bold text-muted-foreground italic">VALOR REAL ESTIMADO:</p>

        <div className="flex items-center justify-center gap-6 flex-wrap">
          <div className="glass-card rounded-xl px-8 py-4 relative">
            <span className="text-4xl md:text-5xl font-display font-black text-muted-foreground/50 line-through">$444 USD</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-accent text-6xl font-black rotate-[-15deg]">✕</span>
            </div>
          </div>
          <div className="glass-card rounded-xl px-8 py-4 border-primary/50">
            <p className="text-sm font-display font-bold text-muted-foreground">HOY POR SOLO</p>
            <span className="text-4xl md:text-5xl font-display font-black text-primary">$30USD</span>
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-display font-black text-foreground">
          ACCEDE HOY A <span className="text-primary">TE VAS A TRANSFORMAR</span> CON UN{" "}
          <span className="text-primary">93% DE DESCUENTO</span>
        </h3>

        <CTAButton text="ACCEDER AHORA" sub="Obtén el acceso inmediato y completo" />

        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          <Shield className="h-4 w-4 text-primary" />
          Obtén el acceso inmediato y completo antes de que vuelva a su precio real.
        </p>
      </motion.div>
    </div>
  </section>
);

export { CTAButton };
export default Pricing;
