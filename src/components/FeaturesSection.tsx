import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Thermometer, Lightbulb, Activity, Users, Zap } from "lucide-react";

const features = [
  { icon: Thermometer, title: "Auto Fan Control", desc: "Fans adjust automatically based on real-time temperature data." },
  { icon: Lightbulb, title: "Smart Lighting", desc: "Lights turn ON/OFF based on student presence detection." },
  { icon: Activity, title: "Real-Time Monitoring", desc: "Live classroom status displayed on an in-model board." },
  { icon: Users, title: "Dynamic Simulation", desc: "Students appear and leave the classroom dynamically." },
  { icon: Zap, title: "Energy Efficient", desc: "Smart automation reduces unnecessary energy consumption." },
];

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="section-container">
      <div ref={ref} className={`transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          Key <span className="gradient-text-primary">Features</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          What makes this Digital Twin smart
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="glass-card rounded-2xl p-6 group hover:scale-[1.03] hover:shadow-[var(--glow-primary)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/40 group-hover:to-accent/40 transition-colors">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
