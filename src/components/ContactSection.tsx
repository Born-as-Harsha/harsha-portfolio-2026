import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all fields");
      return;
    }

    // Mailto fallback (simple working solution)
    window.location.href = `mailto:abhiharsha021@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message} (${form.email})`;

    setStatus("Opening email client...");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Contact" subtitle="connect.with_me()" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Get in Touch
            </h3>

            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              I am open to opportunities in <strong>VLSI, semiconductor design, and embedded systems</strong>. 
              Feel free to reach out for collaborations, projects, or career opportunities.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "abhiharsha021@gmail.com",
                  href: "mailto:abhiharsha021@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Narsipatnam, Andhra Pradesh, India",
                  href: "#",
                },
                {
                  icon: Linkedin,
                  label: "linkedin.com/in/harshaabhi",
                  href: "https://linkedin.com/in/harshaabhi",
                },
                {
                  icon: Github,
                  label: "github.com/Born-as-Harsha",
                  href: "https://github.com/Born-as-Harsha",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <item.icon size={18} className="text-primary" />
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 bg-card/70 p-6 rounded-xl border border-border shadow-md"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-muted border border-border text-foreground text-sm focus:outline-none focus:border-primary/50"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-muted border border-border text-foreground text-sm focus:outline-none focus:border-primary/50"
            />

            <textarea
              rows={4}
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-muted border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 resize-none"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm rounded-md hover:opacity-90 transition"
            >
              <Send size={16} />
              Send Message
            </button>

            {status && (
              <p className="text-xs text-muted-foreground text-center">
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
