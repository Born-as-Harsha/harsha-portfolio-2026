import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Cpu, Zap, GraduationCap, BookOpen, Github, Linkedin, Mail } from "lucide-react";

const coursework = [
  "Analog VLSI",
  "Digital VLSI",
  "Signals and Communication Systems",
  "Digital Design & Computer Architecture",
  "Communication Systems",
  "Microprocessors & Controllers",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="About Me" subtitle="profile.summary()" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl p-8 bg-card/80 backdrop-blur-sm border border-border shadow-lg"
        >
          {/* PROFILE */}
          <p className="text-foreground/80 leading-relaxed mb-4">
            I am a highly motivated <strong>Electronics and Communication Engineering student</strong> at 
            <strong> KL University</strong> with a CGPA of <strong>9.8</strong>. I have a strong foundation in 
            <strong> VLSI design, semiconductor devices, and digital electronics</strong>, along with basic experience 
            in <strong>machine learning and data analysis</strong>.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-6">
            I am passionate about understanding transistor-level behavior, circuit design, and building 
            efficient systems through simulation tools and programming. My career goal is to contribute 
            to the <strong>semiconductor and VLSI industry</strong> by working on next-generation chip design.
          </p>

          {/* CONTACT LINKS */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="mailto:abhiharsha021@gmail.com"
              className="flex items-center gap-2 text-sm font-mono text-primary hover:underline"
            >
              <Mail size={16} /> Email
            </a>

            <a
              href="https://linkedin.com/in/harshaabhi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-mono text-primary hover:underline"
            >
              <Linkedin size={16} /> LinkedIn
            </a>

            <a
              href="https://github.com/Born-as-Harsha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-mono text-primary hover:underline"
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
                desc: "Digital & Analog IC Design",
              },
              {
                icon: Zap,
                label: "Semiconductors",
                desc: "MOSFET & Device Physics",
              },
              {
                icon: GraduationCap,
                label: "KL University",
                desc: "B.Tech ECE — CGPA 9.8",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-4 rounded-lg bg-muted/30 border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <item.icon className="mx-auto text-primary mb-2" size={28} />
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
};

export default AboutSection;
