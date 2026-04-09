import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Box, Code2, Cpu, Settings } from "lucide-react";

const techs = [
  { icon: Box, name: "Blender", desc: "3D Modeling & Visualization" },
  { icon: Code2, name: "Python", desc: "Automation & Logic" },
  { icon: Cpu, name: "Digital Twin", desc: "Virtual Replication Concept" },
  { icon: Settings, name: "Simulation", desc: "Real-time Data Processing" },
];

const TechSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="tech" className="section-container">
      <div ref={ref} className={`transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          Technologies <span className="gradient-text">Used</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          The tools powering our Digital Twin
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {techs.map((t, i) => {
            const Icon = t.icon;
            return (
              <div key={i} className="glass-card rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:shadow-[var(--glow-primary)] transition-shadow">
                  <Icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold mb-1">{t.name}</h3>
                <p className="text-xs text-muted-foreground">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
