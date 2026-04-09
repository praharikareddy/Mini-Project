import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const VisualSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="3d-visuals" className="section-container">
      <div ref={ref} className={`transition-all duration-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          3D <span className="gradient-text-primary">Visualization</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Watch the Digital Twin simulation in action
        </p>
        <div className="glass-card rounded-2xl overflow-hidden max-w-3xl mx-auto">
          <video
            className="w-full aspect-video object-cover"
            controls
            playsInline
            preload="metadata"
          >
            <source src="/demo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-center text-sm text-muted-foreground py-3">Project Demo Video</p>
        </div>
      </div>
    </section>
  );
};

export default VisualSection;
