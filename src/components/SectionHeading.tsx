import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12 text-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold font-body">
      <span className="text-primary text-glow">{"// "}</span>
      {title}
    </h2>
    {subtitle && <p className="text-muted-foreground font-mono text-sm mt-2">{subtitle}</p>}
    <div className="mt-4 mx-auto w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
  </motion.div>
);

export default SectionHeading;
