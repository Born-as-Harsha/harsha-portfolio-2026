import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Github, GitBranch, Star, Code2 } from "lucide-react";

const stats = [
  { icon: Code2, label: "Repositories", value: "5+" },
  { icon: Star, label: "Stars", value: "1+" },
  { icon: GitBranch, label: "Contributions", value: "2+" },
];

const GitHubSection = () => (
  <section id="github" className="py-24 px-6 relative z-10">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="GitHub Stats" subtitle="git log --oneline" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center p-6 neon-border rounded-lg bg-card/80"
          >
            <stat.icon className="mx-auto text-primary mb-3" size={32} />
            <p className="text-2xl font-bold font-mono text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground font-mono mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <a
          href="https://github.com/harshavardhan-yelleti"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-md box-glow hover:opacity-90 transition-opacity"
        >
          <Github size={18} />
          View GitHub Profile
        </a>
      </div>
    </div>
  </section>
);

export default GitHubSection;
