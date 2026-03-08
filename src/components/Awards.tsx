import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { awards } from "../data";

export default function Awards() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="awards" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-neon-blue text-sm mb-3">// recognition()</p>
            <h2 className="section-title">Awards</h2>
            <p className="section-subtitle">Recognized for excellence and impact</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue/50 via-neon-purple/50 to-transparent" />

            {awards.map((award, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={award.id}
                  className={`relative flex items-start mb-12 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-neon-blue border-4 border-dark-900 z-10" />

                  {/* Card */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <motion.div
                      className="glass-card-hover p-6 group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <motion.span
                          className="text-3xl"
                          whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.4 }}
                        >
                          {award.icon}
                        </motion.span>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-neon-blue transition-colors">
                            {award.title}
                          </h3>
                          <p className="text-xs font-mono text-white/40">
                            {award.issuer} · {award.date}
                          </p>
                        </div>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {award.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
