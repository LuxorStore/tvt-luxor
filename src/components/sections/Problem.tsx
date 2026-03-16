import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Problem = () => (
  <section className="bg-section-alt py-16 md:py-24 relative">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(217,91%,53%,0.05),_transparent_60%)]" />
    <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black text-foreground leading-tight">
          ¿CUÁNTOS AÑOS LLEVAS "<span className="text-primary">HACIENDO TODO BIEN</span>" PARA BAJAR DE PESO... PERO SIGUES IGUAL?
        </h2>
        <ul className="space-y-4 text-left max-w-md mx-auto">
          {[
            <>Te matas haciendo <strong className="text-foreground">ejercicio</strong>,</>,
            <>Te <strong className="text-foreground">prohibes de comidas</strong>,</>,
            <>Tomas jugos verdes todos los días en la mañana,</>,
            <>Sigues cuentas Fitness, de recetas saludables, te motivas,</>,
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <span className="text-primary mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-primary font-display font-bold italic text-lg">
          Pero al final del día, estás en el mismo lugar, frustrada, cansada y con el mismo cuerpo...
        </p>
      </motion.div>
    </div>
  </section>
);

export default Problem;
