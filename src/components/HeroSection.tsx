import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden scroll-mt-20"
  >

    {/* BACKGROUND GLOW */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-[-20%] left-[10%] w-[400px] h-[400px] bg-cyan-400/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-20%] right-[10%] w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>
    </div>

    <div className="text-center z-10 max-w-3xl">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-sm text-primary mb-4 tracking-widest uppercase">
          VLSI Portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-white">Yelleti </span>
          <span className="text-cyan-400">Harshavardhan</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-300 mb-2">
          ECE Undergraduate | VLSI Design & Semiconductor Engineering
        </h2>

        <p className="text-sm text-cyan-400 italic mt-2">
          "Designing the future of silicon"
        </p>

        <p className="text-sm text-gray-400 mt-6 leading-relaxed max-w-xl mx-auto">
          Focused on CMOS circuit design, analog and digital electronics, and chip-level architecture.
          Experienced in circuit simulation using LTSpice and exploring semiconductor device behavior.
          Passionate about building scalable and efficient IC solutions.
        </p>

        <p className="mt-4 text-cyan-400 text-sm">
          CGPA: 9.8 | Aspiring VLSI / ASIC Engineer
        </p>
      </motion.div>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 flex flex-wrap gap-4 justify-center"
      >
        <button
          onClick={() => {
            const el = document.getElementById("projects");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-6 py-3 bg-cyan-400 text-black text-sm rounded-md hover:scale-105 transition"
        >
          View Projects
        </button>

        <a
          href="/HarshaResume_main.pdf"
          download
          className="px-6 py-3 border border-gray-400 text-gray-300 text-sm rounded-md hover:bg-gray-800 transition flex items-center gap-2"
        >
          <Download size={16} />
          Resume
        </a>

        <button
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-6 py-3 border border-cyan-400 text-cyan-400 text-sm rounded-md hover:bg-cyan-400/10 transition"
        >
          Contact
        </button>
      </motion.div>

      {/* SCROLL ICON */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-16"
      >
        <ChevronDown className="mx-auto text-cyan-400/50" size={28} />
      </motion.div>

    </div>
  </section>
);

export default HeroSection;
