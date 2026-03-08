import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aiProjects } from "../data";

const statusConfig = {
  completed: { label: "Completed", color: "#10b981", bg: "#10b98120" },
  "in-progress": { label: "In Progress", color: "#f59e0b", bg: "#f59e0b20" },
  exploration: { label: "Exploring", color: "#a855f7", bg: "#a855f720" },
};

export default function AIExperiments() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="ai" className="py-24 relative bg-dark-800/50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-3xl" />
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
            <p className="font-mono text-neon-purple text-sm mb-3">
              // ai_explorations()
            </p>
            <h2 className="section-title">AI Experiments</h2>
            <p className="section-subtitle">Learning & exploring the AI frontier</p>
          </div>

          {/* Info banner */}
          <motion.div
            className="glass-card p-6 mb-12 border-l-4 border-neon-purple/60 flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-3xl">🤖</span>
            <div>
              <h3 className="text-white font-semibold mb-1">Active AI Learner</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                These are personal learning projects and experiments as I explore the AI
                landscape. I'm passionate about understanding how LLMs, agents, and
                retrieval systems work — and how they can be integrated into real frontend
                products.
              </p>
            </div>
          </motion.div>

          {/* AI project cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {aiProjects.map((project, i) => {
              const status = statusConfig[project.status];
              return (
                <motion.div
                  key={project.id}
                  className="glass-card-hover p-6 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <motion.span
                      className="text-4xl"
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      {project.icon.startsWith("http") ||
                      project.icon.startsWith("data:image") ? (
                        <img src={project.icon} className="w-10 h-10" alt={project.title} />
                      ) : (
                        project.icon
                      )}
                    </motion.span>
                    <span
                      className="text-xs font-mono px-3 py-1 rounded-full"
                      style={{
                        color: status.color,
                        background: status.bg,
                        border: `1px solid ${status.color}40`,
                      }}
                    >
                      {status.label}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-purple transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-purple text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Learning areas */}
          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              AI Technologies Explored
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: "✍️",
                  name: "Prompt Engineering",
                  desc: "Few-shot, CoT, role-based",
                },
                {
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
                  name: "Vertex AI",
                  desc: "Google Cloud AI platform",
                },
                { icon: "🔍", name: "RAG Systems", desc: "Embedding + vector search" },
                {
                  icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAM1BMVEUcPDwRNjYAMC8AKSd2goaZoaapr7T//v/g4ej49/+/xMn8+/8AFRNAVliSm6BUZWfLztSDUJcgAAAAu0lEQVR4AdWRR2JFIQhFLcgF+/5XG54lPZn/M+Qo1b0iPnzBf1LRU/oC+fjuGD/gY4NANUvRSwEUEta/DAXVKtchxSaKbH99gwWaC4Tzrw/NFkTzLvCTDxxiXxbcJlChhYOL85FlRhcTzJEnJ9SxQkuatQpVSkkE3ytBlwy8pdUPA2gCbWxupV0NGRhuVEEnGad483sUgynlScV6Xf/WKHcJhmh5SqEsJ+Hz+iz6Y31n8f0L5ON/J3tB3gAtjgsX/sngiAAAAABJRU5ErkJggg==",
                  name: "LangChain",
                  desc: "LLM app framework",
                },
                { icon: "🕸️", name: "LangGraph", desc: "Stateful agent workflows" },
                {
                  icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEVHcEwAAAAAAAAAAAAAAAAnJyd3d3ddXV3Dw8P///+Kiorb29uZmZn29vYPDw/t7e2lpaUyMjJPT0/W1tZcBe60AAAABXRSTlMALsj/x4sesyUAAACzSURBVHgBddOFAcQgEARAePRw6b/WuLAfT4DBhTH+E6+X5ItBitLmjnAG5Swtl7vKstE8eRci6TPOwOzyTRQBB8tFWAIcjMKCxSXA04qodPWKvVgxOpI+Ec1tvcoXorWt4RP/jYzoJ76Yob6jWs2CLZ869JY8mhE3rn2IYAOuVQc0mAQnhLkMsRLFDDagSDZHW8EWhAsMEe0fPTXxiZ30N1YCZfJfh23NuEAdSq5bXn4ehxk+XxCYu+Sq9wAAAABJRU5ErkJggg==",
                  name: "MCP",
                  desc: "Model Context Protocol",
                },
                { icon: "🤖", name: "AI Agents", desc: "Tool-calling, reasoning" },
                {
                  icon: "💡",
                  name: "AI Architecture",
                  desc: "System design for AI apps",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  className="p-4 rounded-xl bg-neon-purple/5 border border-neon-purple/15 text-center hover:bg-neon-purple/10 hover:border-neon-purple/30 transition-all duration-200 group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform flex justify-center">
                    {item.icon.startsWith("http") ||
                    item.icon.startsWith("data:image") ? (
                      <img src={item.icon} className="w-7 h-7" alt={item.name} />
                    ) : (
                      item.icon
                    )}
                  </div>
                  <div className="text-white/80 text-xs font-semibold mb-1">
                    {item.name}
                  </div>
                  <div className="text-white/30 text-xs">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
