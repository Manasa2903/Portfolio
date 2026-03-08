import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../data";
import type { Project } from "../types";

type Filter = "all" | "react" | "mobile" | "dashboard" | "fullstack";

const filters: Record<Filter, string> = {
  all: "⚡ All",
  react: "⚛️ React",
  mobile: "📱 Mobile",
  dashboard: "📊 Dashboard",
  fullstack: "🔗 Full Stack",
};

const colorMap: Record<string, { border: string; glow: string; text: string }> = {
  "neon-blue": {
    border: "rgba(0,212,255,0.3)",
    glow: "rgba(0,212,255,0.1)",
    text: "#00d4ff",
  },
  "neon-purple": {
    border: "rgba(168,85,247,0.3)",
    glow: "rgba(168,85,247,0.1)",
    text: "#a855f7",
  },
  "neon-cyan": {
    border: "rgba(6,182,212,0.3)",
    glow: "rgba(6,182,212,0.1)",
    text: "#06b6d4",
  },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const colors = colorMap[project.color] ?? colorMap["neon-blue"];

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="glass-card overflow-hidden group cursor-default flex flex-col"
      style={{ "--border-color": colors.border } as React.CSSProperties}
    >
      {/* Card header */}
      <div
        className="p-6 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${colors.glow}, transparent)` }}
      >
        {/* Decorative blobs */}
        <motion.div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity"
          style={{ background: colors.text }}
        />

        <div className="relative z-10 flex items-start justify-between">
          <motion.span
            className="text-4xl"
            whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            {project.icon}
          </motion.span>

          {/* <div className="flex gap-2">
            {project.github && (
              <motion.a
                href={project.github}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.a>
            )}
          </div> */}
        </div>

        <h3 className="text-xl font-bold text-white mt-4 relative z-10 group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
      </div>

      {/* Card body */}
      <div className="p-6 pt-0 flex flex-col flex-1">
        <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full font-mono"
              style={{
                color: colors.text,
                background: `${colors.text}15`,
                border: `1px solid ${colors.text}30`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        className="h-0.5 w-0 group-hover:w-full transition-all duration-500 mx-6 mb-4 rounded-full"
        style={{ background: `linear-gradient(90deg, ${colors.text}, transparent)` }}
      />
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category.includes(filter));

  return (
    <section id="projects" className="py-24 relative gradient-bg">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-neon-blue text-sm mb-3">// featured_work()</p>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">Things I've built and shipped</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {(Object.keys(filters) as Filter[]).map((f) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-mono border transition-all duration-200 ${
                  filter === f
                    ? "border-neon-blue/50 bg-neon-blue/10 text-neon-blue"
                    : "border-white/10 bg-white/5 text-white/50 hover:text-white hover:border-white/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filters[f]}
              </motion.button>
            ))}
          </div>

          {/* Projects grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 xl:grid-cols-2 gap-6"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-white/30 font-mono py-16"
            >
              No projects in this category yet.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
