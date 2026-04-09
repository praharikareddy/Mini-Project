import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Wifi, BarChart3, Brain, Building2 } from "lucide-react";

const enhancements = [
  { icon: Wifi, title: "IoT Integration", desc: "Connect real sensors for live data acquisition." },
  { icon: BarChart3, title: "Monitoring Dashboard", desc: "Build a real-time web dashboard for classroom data." },
  { icon: Brain, title: "AI-Based Control", desc: "Use machine learning for predictive automation." },
  { icon: Building2, title: "Multi-Classroom", desc: "Scale to manage multiple classrooms simultaneously." },
];

const FutureSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-container">
      <div ref={ref} className={`transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          Future <span className="gradient-text-primary">Enhancements</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Where this project can go next
        </p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {enhancements.map((e, i) => {
            const Icon = e.icon;
            return (
              <div key={i} className="glass-card rounded-2xl p-6 flex gap-4 items-start group hover:scale-[1.02] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold mb-1">{e.title}</h3>
                  <p className="text-sm text-muted-foreground">{e.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
