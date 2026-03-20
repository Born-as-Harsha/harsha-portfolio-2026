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
  {
    title: "Professional Networking for Career Growth",
    issuer: "HP LIFE",
    link: "https://drive.google.com/file/d/1TulsnnJ5T87S2-d6ayLkUbB1-cSwnxCf/view",
  },
  {
    title: "Smart India Hackathon",
    issuer: "KL University",
    link: "https://drive.google.com/file/d/170wt9aE_ghZcd9KV0kRBUmv51qebdPbp/view",
  },
  {
    title: "Trust and Security with Google Cloud",
    issuer: "Google",
    link: "https://drive.google.com/file/d/159oXDCDHC6DHZurHZy_pJpB9pr5TQ7uD/view",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Certifications" subtitle="cat ~/certs.log" />

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {certs.map((cert, i) => (
            <motion.div
              key={`${cert.title}-${i}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-card/60 border border-border hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <Award className="text-primary shrink-0" size={26} />

              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-sm sm:text-base">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono rounded-md bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
                aria-label={`View certificate: ${cert.title}`}
              >
                <ExternalLink size={14} />
                View
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
