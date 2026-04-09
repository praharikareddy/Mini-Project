import ParticlesBackground from "./ParticlesBackground";
import { ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <ParticlesBackground />
    {/* Gradient orbs */}
    <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] floating" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-[120px] floating-delayed" />

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <div className="inline-block glass-card px-4 py-1.5 rounded-full text-xs font-medium text-accent mb-6 tracking-wider uppercase">
        College Mini Project 2026
      </div>
      <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
        Digital Twin of{" "}
        <span className="gradient-text">Smart Classroom</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
        A 3D-based smart classroom simulation using Blender and Python — automating fans & lights through real-time digital twin technology.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#3d-visuals" className="glow-button inline-flex items-center justify-center gap-2">
          View Project
          <ArrowDown size={18} />
        </a>
        <a href="#results" className="glass-card px-8 py-3 rounded-xl font-semibold text-foreground hover:bg-muted/40 transition-all duration-300 inline-flex items-center justify-center">
          See Results
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
