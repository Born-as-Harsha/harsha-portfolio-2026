import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const ResumeSection = () => (
  <section className="py-24 px-6 relative z-10">
    <div className="max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="neon-border rounded-lg p-10 bg-card/80 backdrop-blur-sm"
      >
        <FileText className="mx-auto text-primary mb-4" size={48} />
        <h2 className="text-2xl font-bold font-body mb-2 text-foreground">Download Resume</h2>
        <p className="text-muted-foreground font-mono text-sm mb-6">
          Get a detailed overview of my experience and skills
        </p>
        <a
          href="/HarshaResume_main.pdf"
          download="HarshaResume_main.pdf"
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-md box-glow-strong hover:opacity-90 transition-opacity"
        >
          <Download size={18} />
          Download CV
        </a>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection;
