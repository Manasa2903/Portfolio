import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { certifications } from "../data";

const providers = [
  {
    name: "Google Skills Boost",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
    color: "#4285F4",
    url: "https://www.skills.google/public_profiles/957174d9-42ff-4f02-83ff-7712b98ae9c8",
  },
  {
    name: "Credly",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC5klEQVR4ASWRA5QtORBAbyXd/TDm2rZt27Zt2+bB2rZt296D5R/b89RJahSjeEv0v4eyI2+/fW+xf+wA70zkHepcEO9SXFrGpyVceRKvBlGvqJeApKM+PLbNz8kJMnznfo/k2/47dN689iDWCKiIMUjSBL6M4JBMEzrxB5gsEreq4LQhF5tvhtL7pfuqHSrjf/5so5pGgg8GMSAxvuNnpAokV4tvGyNZf080LREGfoKoPsQSTG9Fx4xLTSxGJAQ1aAAsYeBnGk95liUeGmXJ+3qZ/9bPWfSyR6nf+QRCWzeS1AooVmQuZwRBA8R1+P+/pfmCN2jcbEfGf/8BN9xPwybboyEw/umLmAUAV0REUIVoBpgIYPOEoW/JbnbirPLwZ+/Qs8X2mDWh+r0hyt3tlN5+iHj19QjlEbACBKIZ2lYs2ATthfodD0O9Y+ixM4n3hWSFo4jrGhh65zmkCVQ9AqgqNo4xM6USm4F0EmmG3OJLU+psw7f/iVStiuv6je6Hb2Hys6dmoeImQQANREkO49MiIhHqC0hNKyaTxY0NQwmwWbTUx8QrZxNGfiJZ7mAIKSCzkURJHuMqRRBBTIYw2UdaSecAeZCkBqlZCt8JjYc8QO3RV+IG/kZsDjRg48wcA4kFohoYhrH2/2lZcjlMC6S/fAAT0HDUpWQ334WOp+8nsqBiUXXYOMIIKCgaPLYJht9+mskkz+J3ddJy/tMs+MBX5I64gI4P38a8cBK0rA5+ElSIIotREFR09rF2NaLvrqf98TvoKQfc+tsxXD8/Hc/ch3lgN6R1FfAlBFAVIqsYVSoCKBLwJaV6JU3eOEUnL9tGBy4/UIsXLanZ109V07CaokFFRDEmeOexcfDy7oHL3rduY3z0SNEBICJg85COQNqORouiNo+mo6CBoIL6wOJLLEphkUXvFDbfPHpngc7bG2LZ3yBWFSBgkxxRppooirEzM4lnc7YmSJyQ5lpqHq89dq/TpwDwwnSosfaDdAAAAABJRU5ErkJggg==",
    color: "#F78100",
    url: "https://www.credly.com/users/manasa-bolisetti/badges#credly",
  },
  {
    name: "HackerRank",
    icon: "https://cdn.simpleicons.org/hackerrank/2EC866",
    color: "#2EC866",
    url: "https://www.hackerrank.com/profile/bmanasa71",
  },
  {
    name: "Coursera",
    icon: "https://cdn.simpleicons.org/coursera/0056D2",
    color: "#0056D2",
    url: "https://www.coursera.org/user/79e7eeeb0c92220ea25fadf4d7924329",
  },
  // {
  //   name: "LinkedIn Learning",
  //   icon: "https://cdn.simpleicons.org/linkedin/0A66C2",
  //   color: "#0A66C2",
  //   url: "https://www.linkedin.com/learning",
  // },
];

export default function Certifications() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="certifications" className="py-24 relative bg-dark-800/50">
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
            <p className="font-mono text-neon-blue text-sm mb-3">// achievements()</p>
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle">Validated skills and knowledge</p>
          </div>

          {/* Cert cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.id}
                href={cert.url ?? undefined}
                target={cert.url ? "_blank" : undefined}
                rel={cert.url ? "noopener noreferrer" : undefined}
                onClick={!cert.url ? (e) => e.preventDefault() : undefined}
                className={`glass-card group overflow-hidden block ${
                  cert.url ? "cursor-pointer" : "cursor-default"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -8, borderColor: `${cert.color}50` }}
              >
                {/* Top color strip */}
                <div
                  className="h-1"
                  style={{
                    background: `linear-gradient(90deg, ${cert.color}, transparent)`,
                  }}
                />

                <div className="p-6">
                  {/* Provider badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <motion.span
                      className="text-3xl flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      {cert.providerIcon.startsWith("http") ||
                      cert.providerIcon.startsWith("https") ||
                      cert.providerIcon.startsWith("data:image") ? (
                        <img
                          src={cert.providerIcon}
                          className="w-8 h-8"
                          alt={cert.provider}
                        />
                      ) : (
                        cert.providerIcon
                      )}
                    </motion.span>
                    <div>
                      <p className="text-xs font-mono" style={{ color: cert.color }}>
                        {cert.provider}
                      </p>
                      <p className="text-xs text-white/30 font-mono">{cert.date}</p>
                    </div>
                    <div className="ml-auto">
                      <motion.div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border border-white/10 transition-all ${
                          cert.url
                            ? "text-white/30 group-hover:border-neon-blue/30 group-hover:text-neon-blue"
                            : "text-white/10"
                        }`}
                        whileHover={{
                          scale: cert.url ? 1.1 : 1,
                          rotate: cert.url ? 45 : 0,
                        }}
                      >
                        <svg
                          className="w-3 h-3"
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
                      </motion.div>
                    </div>
                  </div>

                  <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-gradient transition-all">
                    {cert.title}
                  </h3>

                  {/* Decorative badge icon */}
                  <motion.div
                    className="mt-4 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: `${cert.color}20`,
                      border: `1px solid ${cert.color}30`,
                    }}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-2xl">🎖️</span>
                  </motion.div>
                </div>
              </motion.a>
            ))}

            {/* "More coming" card */}
            <motion.div
              className="glass-card p-6 flex flex-col items-center justify-center text-center border-dashed"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="text-4xl mb-3">🔜</div>
              <p className="text-white/40 text-sm font-mono">More certifications</p>
              <p className="text-white/20 text-xs mt-1">continuing to learn...</p>
            </motion.div>
          </div>

          {/* Supported platforms */}
          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-center text-white/60 text-sm font-mono mb-6">
              Verified on platforms
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {providers.map((p, i) => (
                <motion.a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium hover:bg-white/10 transition-all"
                  style={{ color: p.color }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  {p.icon.startsWith("http") || p.icon.startsWith("data:image") ? (
                    <img src={p.icon} className="w-5 h-5" alt={p.name} />
                  ) : (
                    <span className="text-xl">{p.icon}</span>
                  )}
                  <span>{p.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
