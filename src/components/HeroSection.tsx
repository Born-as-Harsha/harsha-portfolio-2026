import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
    <div className="text-center z-10 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-sm text-primary text-glow mb-4 tracking-widest uppercase">
          Welcome to my portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-bold font-body mb-4">
          <span className="text-foreground">Yelleti </span>
          <span className="text-primary text-glow-strong">Harshavardhan</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-body text-foreground/80 mb-2">
          ECE Undergraduate | VLSI & Semiconductor Enthusiast
        </h2>
        <p className="font-mono text-sm md:text-base text-muted-foreground mt-6 leading-relaxed max-w-xl mx-auto">
          I am an Electronics and Communication Engineering student passionate about VLSI design,
          semiconductor devices, and intelligent systems. I enjoy exploring transistor-level circuit
          behavior and building innovative projects combining electronics and software.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12 flex flex-wrap gap-4 justify-center"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-md box-glow hover:opacity-90 transition-opacity"
        >
          View Projects
        </a>
        <a
          href="/HarshaResume_main.pdf"
          download="HarshaResume_main.pdf"
          className="px-6 py-3 border border-secondary/40 text-secondary font-mono text-sm rounded-md hover:bg-secondary/10 transition-colors inline-flex items-center gap-2"
        >
          <Download size={16} />
          Download Resume
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-primary/40 text-primary font-mono text-sm rounded-md hover:bg-primary/10 transition-colors"
        >
          Contact Me
        </a>
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-16"
      >
        <ChevronDown className="mx-auto text-primary/50" size={28} />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
