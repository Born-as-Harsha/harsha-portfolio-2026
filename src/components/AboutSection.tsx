import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Cpu, Zap, GraduationCap, BookOpen } from "lucide-react";

const coursework = [
  "Analog VLSI",
  "Digital VLSI",
  "Signals and Communication Systems",
  "Digital Design and Computer Architecture",
  "Communication Systems",
  "Microprocessors and Controllers",
];

const AboutSection = () => (
  <section id="about" className="py-24 px-6 relative z-10">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="About Me" subtitle="who_am_i.md" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="neon-border rounded-lg p-8 bg-card/80 backdrop-blur-sm"
      >
        <p className="text-foreground/80 leading-relaxed mb-4">
          I am currently pursuing a Bachelor of Technology in Electronics and Communication
          Engineering at KL University with a CGPA of 9.8. My academic interests include VLSI
          design, semiconductor devices, machine learning, and digital electronics.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-4">
          I enjoy working with circuit simulation tools and programming languages to analyze
          transistor behavior and build intelligent solutions.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-6">
          My goal is to build a career in semiconductor and VLSI industries contributing to
          next-generation chip design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: Cpu, label: "VLSI Design", desc: "Digital & Analog IC Design" },
            { icon: Zap, label: "Semiconductors", desc: "Device Physics & Fabrication" },
            { icon: GraduationCap, label: "KL University", desc: "B.Tech ECE — CGPA 9.8" },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center p-4 rounded-md bg-muted/30 border border-border hover:border-primary/30 transition-colors"
            >
              <item.icon className="mx-auto text-primary mb-2" size={28} />
              <h3 className="font-mono text-sm font-semibold text-foreground">{item.label}</h3>
              <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="text-primary" size={20} />
            <h3 className="font-mono text-sm font-semibold text-foreground">Relevant Coursework</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course) => (
              <span
                key={course}
                className="px-3 py-1 text-xs font-mono rounded-full bg-muted text-primary border border-primary/20"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
