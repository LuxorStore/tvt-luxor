import { motion } from "framer-motion";
import {
  Utensils, Dumbbell, Monitor, Activity, BookOpen,
  Eye, ClipboardCheck, MessageCircle, Bell, Calendar, Trophy
} from "lucide-react";
import { CTAButton } from "./Pricing";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const items = [
  { icon: Utensils, text: "Acceso a Plan de Alimentación con actualizaciones cada 30 días según tus necesidades" },
  { icon: Dumbbell, text: "Plan de Entrenamiento según tus propias necesidades" },
  { icon: Monitor, text: "Acceso a la plataforma TVT" },
  { icon: Activity, text: "Test de Evaluación Inicial" },
  { icon: BookOpen, text: "Biblioteca de Ejercicios" },
  { icon: Eye, text: "Revisión DIARIA de comidas" },
  { icon: ClipboardCheck, text: "Chequeo Semanal" },
  { icon: MessageCircle, text: "Preguntas y Respuestas para aclarar dudas" },
  { icon: Calendar, text: "Rutina de entrenamiento guiada de Lunes a Viernes" },
  { icon: Bell, text: "Recordatorio diario para seguimiento y feedback de alimentación" },
  { icon: Trophy, text: "Reconocimiento a los mejores resultados con sorpresas y recompensas" },
];

const JoinSection = () => (
  <section className="bg-section-alt py-16 md:py-24 relative">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(217,91%,53%,0.06),_transparent_50%)]" />
    <div className="container mx-auto px-4 max-w-5xl relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Únete al entrenamiento de <strong>transformación física</strong>{" "}
            <span className="text-primary">más popular de Latinoamérica</span> que conocerás:
          </h2>
          <p className="text-muted-foreground italic text-sm">
            Te Vas a Transformar, está disponible para ti desde cualquier lugar.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            No necesitas tenerme al lado una hora diaria cuando{" "}
            <strong className="text-foreground">puedes tenerme 24/7 desde tu celular o computador.</strong>{" "}
            Accede desde tu casa a un proceso completamente{" "}
            <strong className="text-foreground">guiado, práctico y transformador</strong> que te enseña a{" "}
            <strong className="text-foreground">comer sin culpa, a moverte sin castigo y a reconectar con tu cuerpo</strong>{" "}
            de forma inteligente y sostenible.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Todo está <strong className="text-foreground">diseñado</strong> para que lo{" "}
            <strong className="text-foreground">vivas a tu ritmo</strong>, pero con{" "}
            <strong className="text-foreground">resultados visibles</strong> desde los{" "}
            <strong className="text-foreground">primeros días</strong>.
          </p>
          <p className="text-foreground font-display font-bold">
            Porque esto <strong>no es un curso</strong>, es un <strong>RETO</strong>... y tu transformación, yo te la garantizo.
          </p>
          <CTAButton text="ACCEDER AHORA" />
        </div>

        <div className="glass-card rounded-xl p-6 space-y-3">
          <div className="text-center mb-4">
            <span className="font-display font-black text-lg text-foreground">
              <span className="text-primary">TVT</span> tevasa
            </span>
            <span className="text-muted-foreground text-xs uppercase tracking-widest ml-1">TRANSFORMAR</span>
          </div>
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-b border-border/50 last:border-0">
              <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-muted-foreground text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default JoinSection;
