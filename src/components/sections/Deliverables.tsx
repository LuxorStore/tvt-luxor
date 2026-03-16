import { motion } from "framer-motion";
import {
  Utensils, Dumbbell, Monitor, ClipboardCheck, BookOpen,
  Eye, MessageCircle, Activity, Bell, Trophy, Calendar
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const deliverables = [
  { icon: Utensils, title: "Plan de Alimentación con actualizaciones cada 30 días según tus necesidades", value: "$67 USD" },
  { icon: Dumbbell, title: "Plan de Entrenamiento según tus propias necesidades", value: "$67 USD" },
  { icon: Monitor, title: "Acceso a la Plataforma TVT", value: "$100 USD" },
  { icon: ClipboardCheck, title: "Acceso a Chequeo Semanal", value: "$25 USD" },
  { icon: BookOpen, title: "Biblioteca de Ejercicios", value: "$50 USD" },
  { icon: Eye, title: "Revisión Diaria de Comidas", value: "$25 USD" },
  { icon: MessageCircle, title: "Preguntas y Respuestas para aclarar dudas", value: "$25 USD" },
  { icon: Activity, title: "Test de Evaluación Inicial", value: "$25 USD" },
  { icon: Bell, title: "Recordatorio diario para seguimiento y feedback de alimentación", value: "$10 USD" },
  { icon: Calendar, title: "Rutina de Entrenamiento guiada de Lunes a Viernes", value: "$50 USD" },
  { icon: Trophy, title: "Reconocimiento a los mejores resultados con sorpresas y recompensas", value: "INVALUABLE" },
];

const Deliverables = () => (
  <section className="bg-background py-16 md:py-24 relative">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(217,91%,53%,0.06),_transparent_50%)]" />
    <div className="container mx-auto px-4 max-w-4xl relative z-10">
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="text-3xl md:text-4xl font-display font-black text-center mb-12 text-foreground"
      >
        QUÉ INCLUYE EL RETO
      </motion.h2>
      <div className="space-y-3">
        {deliverables.map((d, i) => (
          <motion.div
            key={i}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.4, delay: i * 0.06 } } }}
            className="deliverable-bar rounded-lg p-4 flex items-center gap-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <d.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-sm md:text-base text-foreground uppercase">{d.title}</h3>
            </div>
            <div className="flex-shrink-0">
              <span className="font-display font-black text-primary text-sm md:text-base">
                VALORADO EN {d.value}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Deliverables;
