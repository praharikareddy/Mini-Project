import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import output1 from "@/assets/output-1.png";
import output2 from "@/assets/output-2.png";
import output3 from "@/assets/output-3.png";
import output4 from "@/assets/output-4.png";
import output5 from "@/assets/output-5.png";

const results = [
  { img: output1, title: "Fig 1: Overall 3D Model of the Smart Classroom Environment (Solid View)" },
  { img: output2, title: "Fig 2: Simulation of Student Occupancy in the Classroom" },
  { img: output3, title: "Fig 3 & 4: Fan Operation — OFF State vs Activation Based on Temperature" },
  { img: output4, title: "Fig 5 & 6: Light Operation — OFF State vs ON State (Students Present)" },
  { img: output5, title: "Fig 7: Real-Time System Status Display on Classroom Board" },
];

const ResultsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="results" className="section-container">
      <div ref={ref} className={`transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          Output & <span className="gradient-text">Results</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Visual outputs from the Digital Twin simulation
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {results.map((r, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden group hover:scale-[1.03] transition-all duration-300">
              <div className="aspect-video bg-black/20 flex items-center justify-center overflow-hidden">
                <img src={r.img} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground text-center font-medium">{r.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
