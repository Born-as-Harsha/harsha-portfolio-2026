import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Github, GitBranch, Star, Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

interface Repo {
  id: number;
  name: string;
  description: string;
}

const GitHubSection = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [repoCount, setRepoCount] = useState(0);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userRes = await axios.get(
          "https://api.github.com/users/Born-as-Harsha"
        );

        const repoRes = await axios.get(
          "https://api.github.com/users/Born-as-Harsha/repos?sort=updated"
        );

        setRepoCount(userRes.data.public_repos);
        setRepos(repoRes.data.slice(0, 4)); // show top 4 repos
      } catch (error) {
        console.error("GitHub API error:", error);
      }
    };

    fetchGitHubData();
  }, []);

  const stats = [
    { icon: Code2, label: "Repositories", value: `${repoCount}+` },
    { icon: Star, label: "Stars", value: "1+" }, // GitHub API needs extra call for stars
    { icon: GitBranch, label: "Contributions", value: "307+" }, // static (GitHub API limitation)
  ];

  return (
    <section id="github" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">

        <SectionHeading title="GitHub Stats" subtitle="git log --oneline" />

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
              <p className="text-2xl font-bold font-mono text-foreground">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground font-mono mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* LIVE REPOS */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {repos.map((repo, i) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-lg neon-border bg-card/80 hover:scale-[1.02] transition"
            >
              <h3 className="text-primary font-semibold text-sm mb-2">
                {repo.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {repo.description || "No description available"}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center">
          <a
            href="https://github.com/Born-as-Harsha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-md box-glow hover:scale-105 transition-transform"
          >
            <Github size={18} />
            View GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
};

export default GitHubSection;
