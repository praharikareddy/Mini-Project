import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Box, Database, Cpu, Fan, Monitor } from "lucide-react";

const steps = [
  { icon: Box, title: "Create 3D Model", desc: "Design a detailed classroom in Blender with desks, fans, lights, and a display board." },
  { icon: Database, title: "Generate Data", desc: "Simulate temperature readings and student presence data using Python scripts." },
  { icon: Cpu, title: "Apply Logic", desc: "Implement automation rules that respond to environmental conditions." },
  { icon: Fan, title: "Control Devices", desc: "Automatically toggle fans and lights based on the simulation data." },
  { icon: Monitor, title: "Display Status", desc: "Show real-time classroom status on the in-model display board." },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="section-container">
      <div ref={ref} className={`transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          How It <span className="gradient-text">Works</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A step-by-step breakdown of the simulation pipeline
        </p>
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary hidden sm:block" />
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className={`relative flex items-start gap-4 mb-12 sm:mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block md:w-1/2" />
                <div className="relative z-10 shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <Icon size={20} className="text-primary-foreground" />
                </div>
                <div className="glass-card rounded-xl p-5 flex-1 hover:scale-[1.02] transition-transform duration-300">
                  <div className="text-xs text-accent font-semibold mb-1">Step {i + 1}</div>
                  <h3 className="font-display font-bold text-lg mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
