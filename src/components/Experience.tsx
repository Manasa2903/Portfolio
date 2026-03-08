import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "../data";

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="py-24 relative gradient-bg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-neon-blue/3 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-20">
            <p className="font-mono text-neon-blue text-sm mb-3">// work_history()</p>
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">Where I've been building</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 w-0.5 timeline-line"
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                className="relative flex items-start mb-12 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.6 }}
              >
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className="w-5 h-5 rounded-full border-2 border-neon-blue bg-dark-900 relative"
                    whileHover={{ scale: 1.5 }}
                  >
                    {exp.current && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-neon-blue/30"
                        animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                </div>

                {/* Card — full width since single experience */}
                <div className="ml-20 md:ml-0 md:w-[calc(50%-2rem)] md:ml-auto">
                  <motion.div
                    className="glass-card p-6 md:p-8"
                    whileHover={{
                      borderColor: "rgba(0,212,255,0.3)",
                      boxShadow: "0 0 30px rgba(0,212,255,0.1)",
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-neon-blue font-semibold">
                            {exp.company}
                          </span>
                          {exp.current && (
                            <span className="flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-white/40 text-sm font-mono whitespace-nowrap shrink-0">
                        {exp.period}
                      </span>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, j) => (
                        <motion.li
                          key={j}
                          className="flex items-start gap-3 text-white/60 text-sm leading-relaxed"
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.6 + j * 0.07 }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-neon-blue/60 mt-2 shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      {exp.tech.map((t) => (
                        <span key={t} className="tag text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* "More coming" hint */}
            <motion.div
              className="relative flex items-center justify-center md:justify-start md:ml-[calc(50%+1rem)] mt-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="absolute left-8 md:left-[-1rem] -translate-x-1/2 w-4 h-4 rounded-full border border-white/20 bg-dark-900 flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-white/30" />
              </div>
              <p className="ml-20 md:ml-0 text-white/20 font-mono text-xs">
                // more_chapters_ahead...
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
