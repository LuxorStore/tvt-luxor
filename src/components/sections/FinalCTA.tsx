import { motion } from "framer-motion";
import { CTAButton } from "./Pricing";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FinalCTA = () => (
  <section className="bg-background py-16 md:py-24 relative">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(217,91%,53%,0.08),_transparent_50%)]" />
    <div className="container mx-auto px-4 max-w-3xl text-center relative z-10 space-y-8">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-display font-black text-foreground">
          ¿FÍSICAMENTE CÓMO TE GUSTARÍA ESTAR?
        </h2>
        <p className="text-primary font-display font-bold">
          Logra pasar del sobrepeso al cuerpo sin grasa.
        </p>
        <p className="text-foreground">
          ¡<strong>Ahora!</strong> Al entrar <strong>hoy</strong>, esto es todo lo que recibirás
        </p>
        <CTAButton
          text="¡QUIERO ENTRAR AHORA A TE VAS A TRANSFORMAR POR $30 USD!"
        />
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
