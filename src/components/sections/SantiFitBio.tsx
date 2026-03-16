import { motion } from "framer-motion";
import heroCoach from "@/assets/hero-coach.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SantiFitBio = () => (
  <section className="bg-section-alt py-16 md:py-24 relative">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(217,91%,53%,0.06),_transparent_50%)]" />
    <div className="container mx-auto px-4 max-w-4xl relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-display font-black text-foreground italic">
          ¿QUIÉN ES <span className="text-primary">SANTIFIT</span>
          <br />Y POR QUÉ SU <span className="text-primary">MÉTODO FUNCIONA</span>?
        </h2>

        <div className="flex justify-center">
          <img
            src={heroCoach}
            alt="SantiFit - Creador del Reto TVT"
            className="w-48 h-48 rounded-full object-cover border-4 border-primary/30"
          />
        </div>

        <div className="space-y-4 text-muted-foreground text-base leading-relaxed max-w-3xl mx-auto text-center">
          <p>
            Santiago Castaño (SantiFit) no es un gurú de moda ni un influencer improvisado. Es creador del Reto "Te Vas a Transformar", un sistema de transformación física y mental que lleva{" "}
            <strong className="text-foreground">más de 8 años funcionando con resultados reales</strong>, y que ha impactado a{" "}
            <strong className="text-foreground">más de 140.000 personas</strong> en Latinoamérica y el mundo.
          </p>
          <p>
            SantiFit sabe lo que significa mirarse al espejo y no reconocerse. Lo ha acompañado una y otra vez en{" "}
            <strong className="text-foreground">cientos de historias reales</strong>, en mujeres que llegaron frustradas, con el cuerpo desbordado y sin una pizca de confianza.
          </p>
          <p>
            Su método no nace de una moda... Nace del campo de batalla. De probar, ajustar, equivocarse y volver a empezar hasta dar con{" "}
            <strong className="text-foreground">un sistema que de verdad funciona.</strong>
          </p>
          <p>
            Un sistema validado por figuras públicas como{" "}
            <strong className="text-foreground">Andrea Valdiri, Aida Victoria Merlano, Ornella Sierra, Pipe Bueno, El Mindo, Jhonny Rivera</strong>, entre otras celebridades que han confiado en su guía.
          </p>
          <p>
            No es un plan de 30 días con recetas mágicas. Es un <strong className="text-foreground">acompañamiento diario</strong>, con ciencia real, neuroalimentación aplicada, control mental, estructura clara y seguimiento real.
          </p>
          <p className="text-primary font-display font-bold text-lg italic">
            ¿Eres una de ellas?
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SantiFitBio;
