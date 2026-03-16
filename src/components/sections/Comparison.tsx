import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const otherFormats = [
  "Te dan una rutina genérica... y después que Dios te ayude.",
  'Te mandan a comer lechuga, pechuga y "prohibido el pan".',
  "El gimnasio te cobra mensualidad, pero no te dice qué hacer con tu cuerpo.",
  "Las dietas te hacen bajar y luego rebotar el doble.",
  "Los nutricionistas te dan una tabla fría con gramos y calorías.",
];

const ourFormats = [
  "Transformación desde la primera semana, inmediata. Vienes a transformarte.",
  "Este formato está diseñado para que ejecutes. Son pasos simples, claros y accionables.",
  "Cada día del reto está planeado para que no abandones. Tienes comunidad, acompañamiento, estructura y seguimiento.",
  "Reto 100% enfocado en resultados físicos reales. Bajar grasa, reducir tallas, desinflamar tu cuerpo.",
  "Basado en neuroalimentación y emociones. Te enseñamos cómo comer sin ansiedad.",
];

const Comparison = () => (
  <section className="bg-background py-16 md:py-24 relative">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(217,91%,53%,0.05),_transparent_60%)]" />
    <div className="container mx-auto px-4 max-w-5xl relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12 space-y-4">
        <p className="text-foreground text-lg">
          <strong>Este es el método más efectivo</strong> que vas a conocer para transformar tu cuerpo, tu alimentación y tu cabeza al mismo tiempo.
        </p>
        <p className="text-muted-foreground">
          Estudios realizados por la <span className="text-primary font-semibold">Escuela de Negocios de Harvard</span> demuestran que los modelos de formato como los de "Te vas a Transformar" superan en efectividad a los métodos tradicionales.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Otros Formatos */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: 0.1 } } }}
          className="glass-card rounded-2xl p-6 space-y-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <X className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-display font-black text-accent uppercase">Otros Formatos</h3>
          </div>
          <ul className="space-y-3">
            {otherFormats.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                <X className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Nuestros Formatos */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: 0.2 } } }}
          className="glass-card rounded-2xl p-6 space-y-4 border-primary/30"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-black text-primary uppercase">Nuestros Formatos</h3>
          </div>
          <ul className="space-y-3">
            {ourFormats.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Comparison;
