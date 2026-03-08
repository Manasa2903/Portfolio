import { motion } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#ai", label: "AI" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-white/5 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#home");
              }}
              className="font-mono text-xl font-bold"
            >
              <span className="text-white">&lt;</span>
              <span className="text-gradient">Manasa Bolisetti</span>
              <span className="text-white"> /&gt;</span>
            </a>
            <p className="text-white/30 text-xs font-mono mt-1">
              Frontend Engineer · AI Explorer
            </p>
          </motion.div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-white/30 hover:text-white/70 text-xs font-mono transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              {
                icon: "https://cdn.simpleicons.org/linkedin/0A66C2",
                url: "https://linkedin.com",
                label: "LinkedIn",
              },
              {
                icon: "https://cdn.simpleicons.org/github/ffffff",
                url: "https://github.com",
                label: "GitHub",
              },
              {
                icon: "https://cdn.simpleicons.org/hackerrank/2EC866",
                url: "https://hackerrank.com",
                label: "HackerRank",
              },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-lg hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
              >
                {s.icon.startsWith("http") ? (
                  <img src={s.icon} className="w-5 h-5" alt={s.label} />
                ) : (
                  s.icon
                )}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs font-mono">
            © {new Date().getFullYear()} Manasa. Built with ⚛️ React + TypeScript +
            TailwindCSS + Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
