import { motion } from "framer-motion";
import { Shield, MessageCircle, Users } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const bonuses = [
  {
    icon: Shield,
    title: "PARADA TÉCNICA 50%",
    desc: "La estrategia exacta para no estancarte a mitad del proceso.",
    value: "VALORADO EN 27 USD",
  },
  {
    icon: MessageCircle,
    title: "ACOMPAÑAMIENTO DE ENTRENADORES, FISIOTERAPEUTAS Y NUTRICIONISTAS PROFESIONALES",
    desc: "Especialistas a tu disposición para dudas o lesiones.",
    value: "VALORADO EN 100 USD C/U",
  },
  {
    icon: Users,
    title: "ACCESO A LA COMUNIDAD PRIVADA TVT",
    desc: "El apoyo que necesitas para no tirar la toalla.",
    value: "INVALUABLE",
  },
];

const Bonuses = () => (
  <section className="bg-background py-16 md:py-24 relative">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(217,91%,53%,0.06),_transparent_50%)]" />
    <div className="container mx-auto px-4 max-w-4xl relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-black text-accent mb-2">
          PERO ESO NO ES TODO! TAMBIÉN TE LLEVARÁS LOS
        </h2>
        <h3 className="text-2xl md:text-3xl font-display font-black text-foreground">
          SIGUIENTES BONUS EXCLUSIVOS
        </h3>
        <p className="text-muted-foreground italic mt-2">que elevan tu experiencia</p>
      </motion.div>

      <div className="space-y-4">
        {bonuses.map((b, i) => (
          <motion.div
            key={i}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.5, delay: i * 0.12 } } }}
            className="deliverable-bar rounded-lg p-5 flex items-center gap-4"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
              <b.icon className="h-7 w-7 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-sm md:text-base text-foreground uppercase">{b.title}</h3>
              <p className="text-muted-foreground text-xs mt-1">{b.desc}</p>
            </div>
            <div className="flex-shrink-0">
              <span className="font-display font-black text-primary text-sm">{b.value}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Bonuses;
