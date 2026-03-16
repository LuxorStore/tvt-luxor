import { motion } from "framer-motion";
import transformationImage from "@/assets/transformation.jpg";
import { CTAButton } from "./Pricing";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Testimonials = () => (
  <section className="bg-background py-16 md:py-24 relative">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(217,91%,53%,0.05),_transparent_50%)]" />
    <div className="container mx-auto px-4 max-w-4xl relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center space-y-8">
        <p className="text-lg text-foreground">
          Personas <strong className="underline">reales como tú</strong>, que ya iniciaron su transformación están por llegar al punto que siempre desearon. Esto dicen algunas de ellas:
        </p>
        <div className="flex justify-center">
          <img
            src={transformationImage}
            alt="Transformaciones reales del Reto TVT"
            className="rounded-2xl max-w-full shadow-glow"
          />
        </div>

        <div className="space-y-4 mt-8">
          <h3 className="text-2xl md:text-3xl font-display font-black text-foreground">
            ¿Y SI PUDIERAS ADELANTAR EL <span className="text-primary">CUERPO QUE SIEMPRE HAS QUERIDO</span>... EN SOLO <span className="text-primary">30 DÍAS</span> O INCLUSO MUCHO MENOS?
          </h3>
          <p className="text-muted-foreground">
            Este es un <strong className="text-foreground">entrenamiento intensivo</strong> hecho para que <strong className="text-foreground">no tengas que esperar</strong> hasta el próximo lunes, ni al 1° de enero, ni al "cuando tenga tiempo"...
          </p>
          <p className="text-primary font-display font-black text-xl italic">
            ¡ESTE RETO DE VERDAD FUNCIONA!
          </p>
          <CTAButton text="ACCEDER AHORA" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
