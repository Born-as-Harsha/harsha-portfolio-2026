import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "DC Analysis and Short Channel Effects in MOSFETs",
    description:
      "Studied DC characteristics of NMOS and PMOS transistors using NI Multisim and LTspice. Analyzed short-channel effects and transistor behavior.",
    tags: ["LTspice", "NI Multisim"],
  },
  {
    title: "Machine Learning for Weather Data Analysis",
    description:
      "Analyzed rainfall, humidity, and temperature datasets using machine learning algorithms and statistical methods.",
    tags: ["Python", "NumPy", "Pandas", "Scikit-Learn"],
    extra: ["Linear Regression", "Logistic Regression", "K-Means Clustering"],
  },

  // ⭐ FEATURED PROJECT
  {
    title: "Student Activity Management System",
    description:
      "Full-stack Django web application for managing student activities, registrations, stalls, and achievements with authentication, OTP verification, and admin dashboard.",
    tags: ["Django", "Python", "SQLite", "HTML", "CSS", "Bootstrap"],
    extra: [
      "Authentication System",
      "Admin Dashboard",
      "QR Code Generation",
      "Email OTP Verification",
    ],
    featured: true,
    impact:
      "Automates student activity tracking and reduces manual coordination effort.",
    github: "https://github.com/Born-as-Harsha/Python-Full-Stack-Development",
    live: "https://harshaabhi.pythonanywhere.com",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6 relative z-10">
    <div className="max-w-5xl mx-auto">
      <SectionHeading title="Projects" subtitle="ls ~/projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group neon-border rounded-lg p-6 bg-card/80 backdrop-blur-sm hover:border-primary/60 transition-all duration-300"
          >
            {/* ⭐ FEATURED BADGE */}
            {project.featured && (
              <span className="text-xs text-yellow-400 font-mono mb-2 inline-block">
                ⭐ Featured Project
              </span>
            )}

            {/* TITLE */}
            <h3 className="font-body text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
              {project.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
              {project.description}
            </p>

            {/* 🚀 IMPACT */}
            {project.impact && (
              <p className="text-xs text-cyan-400 mb-3 font-mono">
                🚀 {project.impact}
              </p>
            )}

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-mono rounded bg-muted text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* EXTRA FEATURES */}
            {project.extra && (
              <div className="mt-3 pt-3 border-t border-border">
                <p className="text-xs text-muted-foreground font-mono mb-2">
                  Features:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.extra.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 text-xs font-mono rounded bg-secondary/10 text-secondary border border-secondary/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 🔗 LINKS */}
            {(project.github || project.live) && (
              <div className="mt-4 flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono px-3 py-1 rounded border border-primary/30 text-primary hover:bg-primary/10 transition"
                  >
                    GitHub
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono px-3 py-1 rounded border border-green-400/30 text-green-400 hover:bg-green-400/10 transition"
                  >
                    Live
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
