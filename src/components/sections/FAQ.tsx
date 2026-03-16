import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const faqs = [
  { q: "¿CUÁNTO DURA EL RETO?", a: "El reto tiene una duración de 30 días con acompañamiento completo, pero los resultados empiezan desde la primera semana." },
  { q: "¿DE VERDAD ES CIERTO QUE PUEDO BAJAR 5KG EN 30 DÍAS?", a: "Sí, con el método TVT de neuroalimentación y el plan personalizado, nuestros participantes logran resultados visibles desde los primeros días." },
  { q: "¿CÓMO SÉ QUE ESTO PUEDE FUNCIONAR PARA MÍ?", a: "Más de 140.000 personas ya lo han probado con resultados reales. El sistema se adapta a tu cuerpo y necesidades." },
  { q: "¿TENGO QUE TENER UN GIMNASIO EN CASA?", a: "No, las rutinas están diseñadas para hacerse en cualquier espacio con poco o ningún equipo." },
  { q: "¿FUNCIONA PARA PERSONAS QUE HAN SUFRIDO ALGÚN TIPO DE LESIÓN?", a: "Sí, cuentas con acompañamiento de fisioterapeutas profesionales que adaptan el plan a tu condición." },
  { q: "¿ESTE ES UN PROGRAMA MÁS EN EL QUE TE RESTRINGEN DE LA COMIDA?", a: "No. El método TVT se basa en neuroalimentación. Aprendes a comer sin culpa ni restricciones absurdas." },
  { q: "¿DEBO TENER EXPERIENCIA PREVIA ENTRENANDO?", a: "No, el programa está diseñado para todos los niveles, desde principiantes hasta personas con experiencia." },
  { q: "SUFRO DE ANSIEDAD, ¿PUEDO LOGRARLO?", a: "Precisamente este método ataca la ansiedad desde la raíz mediante la neuroalimentación." },
  { q: "¿ESTO SOLO ES PARA GENTE FITNESS?", a: "No, es para personas reales que quieren transformar su cuerpo y hábitos de forma sostenible." },
  { q: "¿EL MÉTODO PUEDE FALLAR?", a: "Si sigues el plan paso a paso, los resultados están garantizados. Más de 140.000 personas lo confirman." },
  { q: "¿CUÁL ES LA GARANTÍA DE QUE VA A FUNCIONAR?", a: "Te ofrecemos la Garantía de Transformación. Si sigues los pasos, verás resultados visibles." },
  { q: "¿Y SI NO CUENTO CON MUCHO TIEMPO PARA EL RETO?", a: "El plan está diseñado para profesionales ocupados. Las comidas son simples y las rutinas son cortas y eficientes." },
  { q: '"NO CREO QUE PUEDA LOGRARLO"', a: "Eso es exactamente lo que decían las más de 140.000 personas que ya lo lograron. El sistema te guía paso a paso." },
  { q: '"NINGUNA METODOLOGÍA ME HA FUNCIONADO"', a: "Porque ninguna atacaba la raíz del problema: la psicología del hábito. El método TVT sí lo hace." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-section-alt py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(217,91%,53%,0.04),_transparent_60%)]" />
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-black text-foreground italic">
            TIPO DE <span className="text-primary text-4xl">PREGUNTAS</span> QUE POSIBLEMENTE TE ESTÉS HACIENDO AHORA...
          </h2>
          <h3 className="text-xl md:text-2xl font-display font-black text-foreground italic mt-2">
            ¡AQUÍ ESTÁN LAS <span className="text-primary text-3xl">RESPUESTAS!</span>
          </h3>
        </motion.div>
        <div className="space-y-2">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.3, delay: i * 0.04 } } }}
              className="overflow-hidden rounded-lg"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left font-display font-bold text-sm md:text-base bg-primary/10 hover:bg-primary/20 transition-colors text-foreground border border-primary/20 rounded-lg"
              >
                <span>{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-primary transition-transform flex-shrink-0 ml-2 ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-4 py-3 text-muted-foreground font-body text-sm bg-secondary/50 border-x border-b border-primary/10 rounded-b-lg">
                  {f.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
