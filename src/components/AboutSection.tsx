import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Cpu, Zap, GraduationCap, BookOpen, Github, Linkedin, Mail } from "lucide-react";

const coursework = [
  "Analog VLSI",
  "Digital VLSI",
  "CMOS Circuit Design",
  "Signals & Systems",
  "Digital Design & Computer Architecture",
  "Microprocessors & Controllers",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">

        <SectionHeading title="About Me" subtitle="profile.summary()" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-xl p-8 bg-card/80 backdrop-blur-md border border-border shadow-lg hover:shadow-cyan-500/10 transition-all"
        >

          {/* PROFILE */}
          <p className="text-foreground/80 leading-relaxed mb-4">
            I am an <strong>Electronics and Communication Engineering undergraduate</strong> at 
            <strong> KL University</strong> with a CGPA of <strong>9.8</strong>, specializing in 
            <strong> VLSI design and semiconductor systems</strong>.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-6">
            My core interests include <strong>CMOS circuit design, analog and digital IC design</strong>, 
            and <strong>transistor-level analysis</strong>. I have hands-on experience with simulation tools 
            such as <strong>LTSpice</strong> and a strong foundation in <strong>device physics</strong>.
            I am passionate about designing efficient, scalable integrated circuits for next-generation systems.
          </p>

          {/* CONTACT LINKS */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="mailto:abhiharsha021@gmail.com"
              className="flex items-center gap-2 text-sm font-mono text-primary hover:text-cyan-400 transition"
            >
              <Mail size={16} /> Email
            </a>

            <a
              href="https://linkedin.com/in/harshaabhi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-mono text-primary hover:text-cyan-400 transition"
            >
              <Linkedin size={16} /> LinkedIn
            </a>

            <a
              href="https://github.com/Born-as-Harsha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-mono text-primary hover:text-cyan-400 transition"
            >
              <Github size={16} /> GitHub
            </a>
          </div>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              {
                icon: Cpu,
                label: "VLSI Design",
                desc: "CMOS, Analog & Digital IC Design",
              },
              {
                icon: Zap,
                label: "Semiconductors",
                desc: "MOSFET Modeling & Device Physics",
              },
              {
                icon: GraduationCap,
                label: "KL University",
                desc: "B.Tech ECE — CGPA 9.8",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-5 rounded-xl bg-muted/30 border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <item.icon className="mx-auto text-primary mb-2" size={30} />
                <h3 className="text-sm font-semibold text-foreground">
                  {item.label}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* COURSEWORK */}
          <div className="border-t border-border pt-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-primary" size={20} />
              <h3 className="text-sm font-semibold text-foreground">
                Relevant Coursework
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-muted text-primary border border-primary/20 hover:bg-primary/10 transition"
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
};

export default AboutSection;
