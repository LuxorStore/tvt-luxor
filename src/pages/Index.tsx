import { motion } from "framer-motion";
import heroImage from "@/assets/hero-transform.jpg";
import testimonialImage from "@/assets/testimonial.jpg";
import {
  Zap, Brain, TrendingDown, Clock, Shield, Users,
  CheckCircle2, Gift, Star, ChevronDown, Dumbbell,
  Utensils, BookOpen, MessageCircle, ClipboardCheck, Activity
} from "lucide-react";
import { useState } from "react";

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
    <div className="bg-accent text-accent-foreground font-display font-extrabold text-lg md:text-xl px-8 py-4 rounded-xl shadow-cta cursor-pointer text-center">
      {text}
      {sub && <span className="block text-sm font-body font-normal mt-1 opacity-90">{sub}</span>}
    </div>
  </motion.a>
);

/* ─── HERO ─── */
const Hero = () => (
  <section className="bg-hero min-h-[90vh] flex items-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(217,91%,53%,0.15),_transparent_60%)]" />
    <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
        <p className="text-primary-foreground/70 font-display font-semibold tracking-widest uppercase text-sm">
          Reto 30 Días
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary-foreground leading-tight">
          Pierde hasta 5kg y elimina tus malos hábitos en{" "}
          <span className="text-accent">30 días</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 font-body max-w-lg">
          <span className="text-accent font-semibold">Sin pasar hambre</span> ni vivir torturado en
          el gimnasio. Descubre el Método TVT de Neuroalimentación.
        </p>
        <CTAButton text="¡QUIERO TRANSFORMARME AHORA!" sub="93% de descuento — Solo por hoy" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <img
          src={heroImage}
          alt="Transformación física con el método TVT"
          className="rounded-2xl shadow-2xl max-h-[500px] object-cover"
        />
      </motion.div>
    </div>
  </section>
);

/* ─── PROBLEMA ─── */
const Problem = () => (
  <section className="bg-section-alt py-16 md:py-24">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          ¿Sientes que has <span className="text-accent">perdido el control</span> de tu cuerpo?
        </h2>
        <p className="text-lg text-muted-foreground font-body leading-relaxed">
          Has intentado todas las dietas, te has matado en el gimnasio y, aun así, el espejo te
          devuelve una imagen que no te gusta.{" "}
          <strong className="text-foreground">No es tu culpa.</strong> La mayoría de los métodos
          fallan porque ignoran tu psicología y tu falta de tiempo.
        </p>
      </motion.div>
    </div>
  </section>
);

/* ─── UVP ─── */
const UVP = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="bg-secondary text-secondary-foreground rounded-2xl p-8 md:p-12 text-center space-y-4"
      >
        <Brain className="mx-auto h-12 w-12 text-accent" />
        <h2 className="text-2xl md:text-3xl font-display font-bold">
          El Método TVT <span className="text-accent">no es una dieta más</span>
        </h2>
        <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
          Es un sistema de <strong>Neuroalimentación + Acompañamiento 24/7</strong> que ataca la
          ansiedad desde la raíz, permitiéndote bajar de peso de forma sostenible.
        </p>
      </motion.div>
    </div>
  </section>
);

/* ─── BENEFICIOS ─── */
const benefits = [
  { icon: Zap, title: "Adiós a la ansiedad", desc: "Aprende a comer sin culpa ni prohibiciones sociales." },
  { icon: Activity, title: "Energía inagotable", desc: "Recupera la vitalidad para tu día a día y mejora tu sueño." },
  { icon: TrendingDown, title: "Resultados reales", desc: "Desinflama tu cuerpo y reduce tallas desde los primeros días." },
  { icon: Clock, title: "Cero complicaciones", desc: "Pasos simples y accionables diseñados para agendas ocupadas." },
];

const Benefits = () => (
  <section className="bg-section-alt py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
      >
        Beneficios del Método TVT
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}
            className="bg-background rounded-xl p-6 shadow-card text-center space-y-3"
          >
            <b.icon className="mx-auto h-10 w-10 text-primary" />
            <h3 className="font-display font-bold text-lg">{b.title}</h3>
            <p className="text-muted-foreground text-sm">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SOCIAL PROOF ─── */
const SocialProof = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="bg-background rounded-2xl shadow-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
      >
        <img
          src={testimonialImage}
          alt="Testimonio de transformación"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-accent/30 flex-shrink-0"
        />
        <div className="space-y-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <blockquote className="text-foreground text-lg italic leading-relaxed">
            "Al principio no creía que en 30 días pudiera cambiar tanto, pero recuperé la seguridad
            al mirarme al espejo y por fin pude usar la ropa que tenía guardada."
          </blockquote>
          <p className="text-muted-foreground font-display font-semibold text-sm">— Participante del Reto TVT</p>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── ENTREGABLES ─── */
const deliverables = [
  { icon: Dumbbell, title: "Plataforma TVT", desc: "Acceso total a tu centro de transformación", value: "$100" },
  { icon: Utensils, title: "Plan de Alimentación", desc: "Actualizado cada 30 días según tu progreso", value: "$67" },
  { icon: Activity, title: "Entrenamiento Personalizado", desc: "Rutinas eficientes para gente sin tiempo", value: "$67" },
  { icon: BookOpen, title: "Biblioteca de Ejercicios", desc: "Guía paso a paso Lunes a Viernes", value: "$100" },
  { icon: ClipboardCheck, title: "Seguimiento Diario", desc: "Revisión de comidas y chequeo semanal", value: "$50" },
  { icon: Activity, title: "Test Inicial", desc: "Evaluación profunda de tu estado actual", value: "$25" },
];

const Deliverables = () => (
  <section className="bg-section-alt py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="text-3xl md:text-4xl font-display font-bold text-center mb-4"
      >
        Todo lo que incluye el Reto TVT
      </motion.h2>
      <p className="text-center text-muted-foreground mb-12">El sistema completo para tu transformación</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {deliverables.map((d, i) => (
          <motion.div
            key={i}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: i * 0.08 } } }}
            className="bg-background rounded-xl p-6 shadow-card space-y-3 border border-border"
          >
            <d.icon className="h-8 w-8 text-primary" />
            <h3 className="font-display font-bold">{d.title}</h3>
            <p className="text-muted-foreground text-sm">{d.desc}</p>
            <p className="text-accent font-display font-bold text-sm">Valorado en {d.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── BONOS ─── */
const bonuses = [
  { icon: Shield, title: "Parada Técnica 50%", desc: "La estrategia exacta para no estancarte a mitad del proceso." },
  { icon: MessageCircle, title: "Especialistas a tu disposición", desc: "Chat con Fisioterapeutas y Nutricionistas para dudas o lesiones." },
  { icon: Users, title: "Comunidad Privada", desc: "El apoyo que necesitas para no tirar la toalla." },
];

const Bonuses = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="text-3xl md:text-4xl font-display font-bold text-center mb-4"
      >
        🎁 Bonificaciones <span className="text-accent">GRATIS</span>
      </motion.h2>
      <p className="text-center text-muted-foreground mb-12">Incluidas sin costo adicional con tu inscripción</p>
      <div className="grid md:grid-cols-3 gap-6">
        {bonuses.map((b, i) => (
          <motion.div
            key={i}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: i * 0.12 } } }}
            className="bg-accent/5 border-2 border-accent/20 rounded-xl p-6 space-y-3 text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10">
              <b.icon className="h-7 w-7 text-accent" />
            </div>
            <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Bono {i + 1}
            </span>
            <h3 className="font-display font-bold text-lg">{b.title}</h3>
            <p className="text-muted-foreground text-sm">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── PRECIO ─── */
const Pricing = () => (
  <section id="comprar" className="bg-hero py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="max-w-lg mx-auto bg-background rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-2xl"
      >
        <p className="font-display font-bold text-muted-foreground">Valor real de todo el sistema:</p>
        <p className="text-4xl font-display font-black text-muted-foreground/50 line-through">$444 USD</p>
        <p className="font-display text-sm text-muted-foreground">Hoy no pagarás ni la mitad, ni siquiera un cuarto…</p>
        <div className="space-y-1">
          <p className="text-5xl md:text-6xl font-display font-black text-accent">$30 USD</p>
          <p className="text-sm text-primary font-bold font-display">93% de descuento — Solo por hoy</p>
        </div>
        <CTAButton text="¡SÍ! QUIERO TRANSFORMARME" sub="Acceso inmediato al Reto TVT" />
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Shield className="h-4 w-4" />
          <span>Garantía de Transformación</span>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── GARANTÍA ─── */
const Guarantee = () => (
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="bg-section-alt border border-border rounded-2xl p-8 md:p-12 text-center space-y-4"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h2 className="text-2xl md:text-3xl font-display font-bold">Garantía de Transformación</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Si sigues los pasos simples del reto, verás resultados visibles desde los primeros días.
        </p>
      </motion.div>
    </div>
  </section>
);

/* ─── NOT FOR ─── */
const NotFor = () => (
  <section className="bg-section-alt py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6 text-center">
        <h2 className="text-2xl md:text-3xl font-display font-bold">¿A quién NO es para este Reto?</h2>
        <ul className="space-y-3 text-left max-w-md mx-auto">
          <li className="flex items-start gap-3 text-muted-foreground">
            <span className="text-destructive mt-1">✕</span>
            Personas que buscan "pastillas milagrosas" sin esfuerzo.
          </li>
          <li className="flex items-start gap-3 text-muted-foreground">
            <span className="text-destructive mt-1">✕</span>
            Quienes no estén dispuestos a seguir instrucciones simples por 30 días.
          </li>
        </ul>
      </motion.div>
    </div>
  </section>
);

/* ─── FAQ ─── */
const faqs = [
  { q: "¿Tengo que cocinar horas?", a: "No, el plan es para profesionales ocupados. Comidas simples y rápidas." },
  { q: "¿Y si tengo una lesión?", a: "El Bono 2 te da acceso a especialistas para adaptarlo a tu condición." },
  { q: "¿Hay efecto rebote?", a: "No, porque atacamos la psicología del hábito, no solo las calorías." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
        >
          Preguntas Frecuentes
        </motion.h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.4, delay: i * 0.1 } } }}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-display font-semibold bg-background hover:bg-muted transition-colors"
              >
                {f.q}
                <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-muted-foreground font-body">
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

/* ─── URGENCIA ─── */
const Urgency = () => (
  <section className="bg-hero py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
          No dejes que otro mes pase sintiéndote igual
        </h2>
        <p className="text-primary-foreground/80 text-lg">
          Esta oferta de lanzamiento con el <strong className="text-accent">93% de descuento</strong> es por
          tiempo limitado. Una vez cerremos cupos, el precio volverá a su valor original.
        </p>
        <CTAButton text="ACCEDER AL RETO TVT AHORA" sub="Solo $30 USD — Acceso inmediato" />
      </motion.div>
    </div>
  </section>
);

/* ─── DEEP DIVE ─── */
const DeepDive = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-6">
        <Brain className="mx-auto h-16 w-16 text-primary" />
        <h2 className="text-3xl md:text-4xl font-display font-bold">
          El secreto está en la <span className="text-gradient">Neuroalimentación</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Mientras otros te obligan a dejar de comer lo que amas, nosotros{" "}
          <strong className="text-foreground">reentrenamos tu cerebro</strong> para que la ansiedad desaparezca.
          Es ciencia, no fuerza de voluntad.
        </p>
      </motion.div>
    </div>
  </section>
);

/* ─── FOOTER ─── */
const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground py-8">
    <div className="container mx-auto px-4 text-center text-sm text-secondary-foreground/60">
      <p>© {new Date().getFullYear()} Reto TVT — Te Vas a Transformar. Todos los derechos reservados.</p>
    </div>
  </footer>
);

/* ─── PAGE ─── */
const Index = () => (
  <div className="overflow-x-hidden">
    <Hero />
    <Problem />
    <UVP />
    <Benefits />
    <SocialProof />
    <Deliverables />
    <Bonuses />
    <Guarantee />
    <NotFor />
    <Pricing />
    <FAQ />
    <DeepDive />
    <Urgency />
    <Footer />
  </div>
);

export default Index;
