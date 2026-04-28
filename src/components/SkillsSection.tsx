import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Cpu, Wrench, Code2, Brain } from "lucide-react";

const categories = [
  {
    icon: Cpu,
    title: "Core Electronics",
    skills: [
      "Digital Electronics",
      "Analog Circuits",
      "CMOS Design",
      "Semiconductor Devices",
    ],
  },
  {
    icon: Wrench,
    title: "VLSI & Simulation Tools",
    skills: [
      "LTspice",
      "NI Multisim",
      "Cadence (Basics)",
      "EasyEDA",
    ],
  },
  {
    icon: Code2,
    title: "Programming",
    skills: ["C", "Python"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Linear Regression",
      "K-Means",
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6 relative z-10">
    <div className="max-w-5xl mx-auto">
      <SectionHeading title="Skills" subtitle="tech_stack.json" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="neon-border rounded-lg p-6 bg-card/80 backdrop-blur-sm hover:border-primary/60 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <cat.icon className="text-primary" size={24} />
              <h3 className="font-body text-lg font-semibold text-foreground">
                {cat.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-mono rounded bg-muted text-primary border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
