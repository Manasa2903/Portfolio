import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../data";
import type { Skill } from "../types";
import { SkillIcon } from "./SkillIcons";

type Category = "all" | "frontend" | "backend" | "ai" | "tools";

const categoryLabels: Record<Category, string> = {
  all: "⚡ All",
  frontend: "⚛️ Frontend",
  backend: "🟩 Backend",
  ai: "🧠 AI & Emerging",
  tools: "🔧 Tools",
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={
        inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }
      }
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass-card-hover p-5 cursor-default group relative overflow-hidden"
    >
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${skill.color}10 0%, transparent 70%)`,
        }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between mb-3 relative z-10">
        <motion.div
          className="w-9 h-9 flex items-center justify-center"
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
          transition={{ duration: 0.4 }}
        >
          <SkillIcon name={skill.name} color={skill.color} className="w-8 h-8" />
        </motion.div>
        <span
          className="text-xs font-mono px-2 py-0.5 rounded-full border"
          style={{
            color: skill.color,
            borderColor: `${skill.color}40`,
            background: `${skill.color}10`,
          }}
        >
          {skill.level}%
        </span>
      </div>

      {/* Name & description */}
      <div className="relative z-10">
        <h3 className="text-white font-semibold text-sm mb-1">{skill.name}</h3>
        <p className="text-white/40 text-xs leading-relaxed">{skill.description}</p>
      </div>

      {/* Progress bar */}
      <div className="mt-4 relative z-10">
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
            }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1.2, delay: index * 0.05 + 0.3, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const filtered =
    activeCategory === "all"
      ? skills.sort((a, b) => b.level - a.level)
      : skills
          .filter((s) => s.category === activeCategory)
          .sort((a, b) => b.level - a.level);

  return (
    <section id="skills" className="py-24 relative bg-dark-800/50">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-neon-blue text-sm mb-3">// my_skill_set()</p>
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">Tools I use to build and explore</p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {(Object.keys(categoryLabels) as Category[]).map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium font-mono transition-all duration-200 border ${
                  activeCategory === cat
                    ? "border-neon-blue/50 bg-neon-blue/10 text-neon-blue shadow-neon"
                    : "border-white/10 bg-white/5 text-white/50 hover:text-white hover:border-white/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {categoryLabels[cat]}
                <span className="ml-2 text-xs opacity-60">
                  (
                  {activeCategory === cat
                    ? filtered.length
                    : cat === "all"
                      ? skills.length
                      : skills.filter((s) => s.category === cat).length}
                  )
                </span>
              </motion.button>
            ))}
          </div>

          {/* Skills grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
            >
              {filtered.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Category summaries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            {[
              {
                title: "Frontend Mastery",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                desc: "Deep expertise in React, TypeScript, and modern CSS. Delivering polished, accessible, high-performance user interfaces.",
                color: "#00d4ff",
              },
              {
                title: "AI Exploration",
                icon: "🧠",
                desc: "Actively learning prompt engineering, RAG, LangChain, and agentic systems — bridging frontend and intelligent applications.",
                color: "#a855f7",
              },
              {
                title: "Full Stack Ability",
                icon: "🔗",
                desc: "Comfortable across the MERN stack — building REST APIs, designing schemas, and integrating services end-to-end.",
                color: "#06b6d4",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="glass-card p-6"
                whileHover={{ scale: 1.02, borderColor: `${item.color}40` }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <div className="text-3xl mb-3 flex items-center">
                  {item.icon.startsWith("http") ? (
                    <img src={item.icon} className="w-8 h-8" alt={item.title} />
                  ) : (
                    item.icon
                  )}
                </div>
                <h3
                  className="font-semibold text-white mb-2"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
