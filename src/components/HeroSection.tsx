import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

    {/* 🔥 ADD THIS BLOCK (BACKGROUND GLOW) */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-[-20%] left-[10%] w-[400px] h-[400px] bg-cyan-400/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-20%] right-[10%] w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>
    </div>

    {/* EXISTING CONTENT */}
    <div className="text-center z-10 max-w-3xl">

      {/* TOP TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-sm text-primary text-glow mb-4 tracking-widest uppercase">
          VLSI Portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-bold font-body mb-4">
          <span className="text-foreground">Yelleti </span>
          <span className="text-primary text-glow-strong">Harshavardhan</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-body text-foreground/80 mb-2">
          ECE Undergraduate | VLSI Design & Semiconductor Engineering
        </h2>

        <p className="font-mono text-sm text-primary/80 mt-2 italic">
          "Designing the future of silicon"
        </p>

        <p className="font-mono text-sm md:text-base text-muted-foreground mt-6 leading-relaxed max-w-xl mx-auto">
          Focused on CMOS circuit design, analog and digital electronics, and chip-level architecture.
          Experienced in circuit simulation using LTSpice and exploring semiconductor device behavior.
          Passionate about building scalable and efficient integrated circuit solutions.
        </p>

        <p className="mt-4 text-primary font-mono text-sm">
          CGPA: 9.8 | Aspiring VLSI / ASIC Engineer
        </p>
      </motion.div>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12 flex flex-wrap gap-4 justify-center"
      >
        <a href="#projects" className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-md box-glow hover:scale-105 transition-transform">
          View Projects
        </a>

        <a
          href="/HarshaResume_main.pdf"
          download="Harsha_VLSI_Resume.pdf"
          className="px-6 py-3 border border-secondary/40 text-secondary font-mono text-sm rounded-md hover:bg-secondary/10 transition-colors inline-flex items-center gap-2"
        >
          <Download size={16} />
          Download VLSI Resume
        </a>

        <a href="#contact" className="px-6 py-3 border border-primary/40 text-primary font-mono text-sm rounded-md hover:bg-primary/10 transition-colors">
          Contact Me
        </a>
      </motion.div>

      {/* SCROLL ICON */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-16"
      >
        <ChevronDown className="mx-auto text-primary/50" size={28} />
      </motion.div>

    </div>
  </section>
);

export default HeroSection;
