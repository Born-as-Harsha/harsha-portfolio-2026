import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  {
    title: "Python Introduction for Beginners",
    issuer: "DataCamp",
    link: "https://drive.google.com/file/d/1_8t6CyJX4e_jX5Xio16DSP2hKUxf9CDu/view",
  },
  {
  title: "Python for Everybody",
  issuer: "Coursera",
  link: "https://drive.google.com/file/d/1DB7qjdf9yYXJJkehCIIvmdZ9GQCkKg4_/view",
  },
  {
    title: "Introduction to Hands-on Linux",
    issuer: "Linux Foundation",
    link: "https://drive.google.com/file/d/1fraLG7sa1rmyCEZMkVvDS8iigQHh3041/view",
  },
  {
    title: "Getting Started with Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    link: "https://drive.google.com/file/d/1nn-ssWiO05Qgyg8PYfewPKloba0X1OT-/view",
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24 px-6 relative z-10">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Certifications" subtitle="cat ~/certs.log" />
      <div className="space-y-4">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 p-4 rounded-lg bg-card/60 border border-border hover:border-primary/30 transition-colors"
          >
            <Award className="text-primary shrink-0" size={24} />
            <div className="flex-1">
              <h3 className="font-body font-semibold text-foreground">{cert.title}</h3>
              <p className="text-xs font-mono text-muted-foreground">{cert.issuer}</p>
            </div>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono rounded-md bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors shrink-0"
            >
              <ExternalLink size={14} />
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
