import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";

const bullets = [
  "3D Visualization using Blender",
  "Real-Time Simulation",
  "Automated Fan & Light Control",
  "Smart Classroom Concept",
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-container">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          About the <span className="gradient-text-primary">Project</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Understanding the concept behind our Digital Twin simulation
        </p>
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <p className="text-foreground/90 text-lg leading-relaxed mb-8">
            This project creates a <span className="text-accent font-semibold">virtual 3D classroom</span> using Blender and simulates real-world conditions like temperature and student presence. Based on these inputs, the system automatically controls fans and lights using Python logic — demonstrating the power of Digital Twin technology in smart environments.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {bullets.map((b) => (
              <div key={b} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <CheckCircle2 className="text-accent shrink-0" size={20} />
                <span className="font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
