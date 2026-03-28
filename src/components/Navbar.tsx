import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  "hero",
  "about",
  "skills",
  "projects",
  "certifications",
  "github",
  "resume",
  "contact",
];

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "hero";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offset = section.offsetTop - 200;
          if (window.scrollY >= offset) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-cyan-400/20 shadow-[0_0_20px_rgba(0,255,255,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1
          onClick={() => scrollTo("hero")}
          className="text-xl font-bold text-cyan-400 cursor-pointer tracking-wide"
        >
          VLSI<span className="text-white">.dev</span>
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center relative">

          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`relative capitalize text-sm font-mono transition-all duration-300 ${
                active === item
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item}

              {/* 🔥 Animated Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                  active === item ? "w-full" : "w-0"
                }`}
              ></span>

              {/* 🔥 Glow Effect */}
              {active === item && (
                <span className="absolute inset-0 blur-md bg-cyan-400/20 rounded"></span>
              )}
            </button>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="text-cyan-400" /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl px-6 pb-6">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`block w-full text-left py-3 capitalize transition ${
                active === item
                  ? "text-cyan-400"
                  : "text-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
