import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { stats } from "../data";
import GirlCoderAvatar from "./GirlCoderAvatar";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const highlights = [
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          className="w-6 h-6 mx-auto"
          alt="React"
        />
      ),
      label: "React Expert",
      desc: "Deep expertise in React ecosystem",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          className="w-6 h-6 mx-auto"
          alt="AI"
        />
      ),
      label: "AI Enthusiast",
      desc: "Actively learning AI technologies",
    },
    {
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          className="w-6 h-6 mx-auto"
          alt="MERN"
        />
      ),
      label: "Full Stack",
      desc: "MERN stack development",
    },
    {
      icon: <span className="text-xl">⚡</span>,
      label: "Performance",
      desc: "Obsessed with optimization",
    },
  ];

  return (
    <section id="about" className="py-24 relative gradient-bg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neon-purple/3 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <p className="font-mono text-neon-blue text-sm mb-3">// get_to_know_me()</p>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Frontend Engineer · AI Explorer · Lifelong Learner
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — visual card */}
            <motion.div variants={itemVariants} className="relative">
              {/* Main card */}
              <div className="glass-card p-8 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-neon-blue/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-neon-purple/10 to-transparent" />

                {/* Avatar */}
                <div className="relative mx-auto w-44 h-44 mb-6">
                  <GirlCoderAvatar />
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-dark-800 border border-neon-blue/30 flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                      <circle cx="12" cy="12" r="2.1" fill="#61DAFB" />
                      <g stroke="#61DAFB" strokeWidth="1.1">
                        <ellipse rx="10" ry="3.8" cx="12" cy="12" />
                        <ellipse
                          rx="10"
                          ry="3.8"
                          cx="12"
                          cy="12"
                          transform="rotate(60 12 12)"
                        />
                        <ellipse
                          rx="10"
                          ry="3.8"
                          cx="12"
                          cy="12"
                          transform="rotate(120 12 12)"
                        />
                      </g>
                    </svg>
                  </motion.div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-1">Manasa Bolisetti</h3>
                  <p className="text-neon-blue font-mono text-sm">Frontend Engineer</p>
                  <p className="text-white/40 text-xs mt-1 font-mono">
                    @ Veltris · 4+ years
                  </p>
                </div>

                {/* Highlight chips */}
                <div className="grid grid-cols-2 gap-3 mt-8">
                  {highlights.map((h) => (
                    <motion.div
                      key={h.label}
                      className="glass-card p-3 text-center"
                      whileHover={{ scale: 1.05, borderColor: "rgba(0,212,255,0.3)" }}
                    >
                      <div className="mb-1 flex justify-center">{h.icon}</div>
                      <div className="text-xs font-semibold text-white/80">{h.label}</div>
                      <div className="text-xs text-white/40 mt-0.5">{h.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -left-4 glass-card px-3 py-2 flex items-center gap-2"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-white/60">Open to work</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 glass-card px-3 py-2 flex items-center gap-2"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  className="w-4 h-4"
                  alt="AI"
                />
                <span className="text-xs font-mono text-white/60">Exploring AI</span>
              </motion.div>
            </motion.div>

            {/* Right — bio */}
            <motion.div variants={containerVariants} className="space-y-6">
              <motion.div variants={itemVariants}>
                <p className="text-white/80 text-lg leading-relaxed">
                  I'm a{" "}
                  <span className="text-neon-blue font-semibold">
                    Fullstack Engineer with 4+ years of experience
                  </span>{" "}
                  building scalable, high-performance web applications. My core expertise
                  lies in React, TypeScript, and the broader JavaScript ecosystem —
                  crafting products that are both technically solid and a joy to use.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-white/60 leading-relaxed">
                  At <span className="text-white font-medium">Veltris</span>, I lead the
                  project team building enterprise networking platforms and real-time
                  dashboards — owning agile ceremonies, sprint planning, and code reviews
                  while architecting reusable component libraries, optimising bundle
                  sizes, and mentoring junior engineers to raise the quality bar across
                  the team.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-white/60 leading-relaxed">
                  Beyond the fullstack, I'm actively exploring{" "}
                  <span className="text-neon-purple font-medium">
                    AI and emerging technologies
                  </span>{" "}
                  — including prompt engineering, retrieval augmented generation (RAG),
                  LangChain, LangGraph, and the Model Context Protocol (MCP). I'm
                  particularly fascinated by how AI can be woven into everyday product
                  experiences.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-white/60 leading-relaxed">
                  I also have hands-on experience with the{" "}
                  <span className="text-neon-cyan font-medium">MERN stack</span> —
                  building full-featured applications from MongoDB schemas through Express
                  APIs to React frontends.
                </p>
              </motion.div>

              {/* Values */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-2">
                {[
                  "Clean Code",
                  "Accessibility",
                  "Performance",
                  "UX-First",
                  "Continuous Learning",
                ].map((v) => (
                  <span key={v} className="tag-purple">
                    {v}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="glass-card p-6 text-center"
                whileHover={{ scale: 1.05, borderColor: "rgba(0,212,255,0.3)" }}
              >
                <div className="text-4xl font-black text-gradient mb-1">
                  {inView && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                      enableScrollSpy
                      scrollSpyDelay={200}
                    />
                  )}
                </div>
                <div className="text-white/50 text-sm font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
