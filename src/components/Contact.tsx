import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const socialLinks = [
  {
    label: "LinkedIn",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABDUlEQVR4AWP4////gOLB44D6nTcsGIo33QHi/zTGd0B2YTiAPpYjHIHNAf/piQk6wGPW8f/rLz8HYRCbXg5AWI4GQGJ0cwDY12gAJDbcHUA4CkZAIqQUK7Ts/m/SfxBMs5RupswBaACr+P47b/5zlG/5DyzZ/r/+8hNF7vuvP//nn3r0X6JhJ+0ccPrR+/+H7735jw9cf/n5v0D1Nuo5gBxQve06zR0AjoL7b7/+//zjN4bc+ScfaOeA33///k9Yfg4mDw7u/Xdeo6uhnQP6D93FMNxlxjF0ZbRzgMXEQ9iyI90cALIMJoccDXRzAK6CZog6YNQBow6gIx54Bwx4x2RAu2bAysoEZu9o7xgAQrvkxt3WZi0AAAAASUVORK5CYII=",
    url: "https://www.linkedin.com/in/manasa-bolisetti-0aba28148",
    color: "#0A66C2",
    handle: "/in/manasa-bolisetti-0aba28148",
  },
  {
    label: "GitHub",
    icon: "https://cdn.simpleicons.org/github/ffffff",
    url: "https://github.com/Manasa2903",
    color: "#ffffff",
    handle: "@Manasa2903",
  },
  {
    label: "HackerRank",
    icon: "https://cdn.simpleicons.org/hackerrank/2EC866",
    url: "https://www.hackerrank.com/profile/bmanasa71",
    color: "#2EC866",
    handle: "@bmanasa71",
  },
  {
    label: "Credly",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC5klEQVR4ASWRA5QtORBAbyXd/TDm2rZt27Zt2+bB2rZt296D5R/b89RJahSjeEv0v4eyI2+/fW+xf+wA70zkHepcEO9SXFrGpyVceRKvBlGvqJeApKM+PLbNz8kJMnznfo/k2/47dN689iDWCKiIMUjSBL6M4JBMEzrxB5gsEreq4LQhF5tvhtL7pfuqHSrjf/5so5pGgg8GMSAxvuNnpAokV4tvGyNZf080LREGfoKoPsQSTG9Fx4xLTSxGJAQ1aAAsYeBnGk95liUeGmXJ+3qZ/9bPWfSyR6nf+QRCWzeS1AooVmQuZwRBA8R1+P+/pfmCN2jcbEfGf/8BN9xPwybboyEw/umLmAUAV0REUIVoBpgIYPOEoW/JbnbirPLwZ+/Qs8X2mDWh+r0hyt3tlN5+iHj19QjlEbACBKIZ2lYs2ATthfodD0O9Y+ixM4n3hWSFo4jrGhh65zmkCVQ9AqgqNo4xM6USm4F0EmmG3OJLU+psw7f/iVStiuv6je6Hb2Hys6dmoeImQQANREkO49MiIhHqC0hNKyaTxY0NQwmwWbTUx8QrZxNGfiJZ7mAIKSCzkURJHuMqRRBBTIYw2UdaSecAeZCkBqlZCt8JjYc8QO3RV+IG/kZsDjRg48wcA4kFohoYhrH2/2lZcjlMC6S/fAAT0HDUpWQ334WOp+8nsqBiUXXYOMIIKCgaPLYJht9+mskkz+J3ddJy/tMs+MBX5I64gI4P38a8cBK0rA5+ElSIIotREFR09rF2NaLvrqf98TvoKQfc+tsxXD8/Hc/ch3lgN6R1FfAlBFAVIqsYVSoCKBLwJaV6JU3eOEUnL9tGBy4/UIsXLanZ109V07CaokFFRDEmeOexcfDy7oHL3rduY3z0SNEBICJg85COQNqORouiNo+mo6CBoIL6wOJLLEphkUXvFDbfPHpngc7bG2LZ3yBWFSBgkxxRppooirEzM4lnc7YmSJyQ5lpqHq89dq/TpwDwwnSosfaDdAAAAABJRU5ErkJggg==",
    url: "https://credly.com/users/manasa-bolisetti",
    color: "#F78100",
    handle: "manasa-bolisetti",
  },
  {
    label: "Google Skills",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
    url: "https://www.skills.google/public_profiles/957174d9-42ff-4f02-83ff-7712b98ae9c8",
    color: "#4285F4",
    handle: "Skills Boost",
  },
  {
    label: "Medium",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAB4eHiqqqqfn58bGxvKysr///+NjY0rKyvW1tbp6elfX1+0tLTBwcFBQUE7Ozvl0eruAAAAB3RSTlMAS8D5/0yZSQe+BQAAANZJREFUeAF901ESgyAMBFDUaAKigNr7X7UroSO2lf2KPAMDojGm6wf6ydCPBpnoIRP66DGd6Z+xN8MzDoYaUWSx1jrSsLXCFdLsvV+0XFEGqlEwErVcUModT006iXzjtgJnXb4gh+2DboeuZ+O6ZRTPV2cCWqIjUEb2gS6kAEWRFIOXGhnIFCmjw3ZELnQRA8ui+MKLVee114Jyw6PsvkwbK9QzdAUJa8w3THgumA8xFgyJED3AkM9qhyqySG7VWj8Zz+hspHlNmheseTWblxoZ//8O6HsD4HoTKLPZkdQAAAAASUVORK5CYII=",
    url: "https://medium.com/@bmanasa71",
    color: "#3465A7",
    handle: "@bmanasa71",
  },
];

const EMAILJS_SERVICE_ID = "service_0usto1n";
// const EMAILJS_TEMPLATE_ID = "template_1zpmtp7";
const EMAILJS_TEMPLATE_ID = "template_9qlubw8";
const EMAILJS_REPLY_TEMPLATE_ID = "template_1zpmtp7";
const EMAILJS_PUBLIC_KEY = "feP3JdOu02jCp8Rg0";
const RECIPIENT_EMAIL = "manasabolisetti29@gmail.com"; // ← replace with your email

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_REPLY_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm outline-none transition-all duration-200 focus:border-neon-blue/50 focus:bg-white/10 focus:shadow-neon font-sans";

  return (
    <section id="contact" className="py-24 relative gradient-bg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-neon-blue text-sm mb-3">// get_in_touch()</p>
            <h2 className="section-title">Contact Me</h2>
            <p className="section-subtitle">Let's build something great together</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span>✉️</span> Send a message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-white/50 text-xs font-mono mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs font-mono mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs font-mono mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      required
                      rows={5}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full btn-primary py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {status === "sending" ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="inline-block"
                        >
                          ⏳
                        </motion.span>
                        Sending...
                      </>
                    ) : (
                      <>🚀 Send Message</>
                    )}
                  </motion.button>

                  {/* Status messages */}
                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-sm text-green-400 font-mono"
                    >
                      ✅ Message sent! I'll get back to you soon.
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-sm text-red-400 font-mono"
                    >
                      ❌ Something went wrong. Please try again or email me directly.
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Right — social links & info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              {/* Call to action text */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-white mb-3">
                  Open to opportunities
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  I'm currently open to new roles, collaborations, and interesting
                  projects — especially in product-focused companies where I can work on
                  complex frontend challenges and integrate cutting-edge AI features.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm font-mono">
                    Available for work
                  </span>
                </div>
              </div>

              {/* Social links */}
              <div className="glass-card p-6">
                <h3 className="text-sm font-mono text-white/50 mb-5">Find me on</h3>
                <div className="space-y-3">
                  {socialLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 group transition-all duration-200"
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      <motion.span
                        className="text-2xl flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.3 }}
                      >
                        {link.icon.startsWith("http") ||
                        link.icon.startsWith("data:image") ? (
                          <img src={link.icon} className="w-7 h-7" alt={link.label} />
                        ) : (
                          link.icon
                        )}
                      </motion.span>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                          {link.label}
                        </div>
                        <div className="text-xs text-white/30 font-mono">
                          {link.handle}
                        </div>
                      </div>
                      <svg
                        className="w-4 h-4 text-white/20 group-hover:text-neon-blue transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Direct email */}
              <motion.div
                className="glass-card p-6 text-center"
                whileHover={{ borderColor: "rgba(0,212,255,0.3)" }}
              >
                <p className="text-white/40 text-xs font-mono mb-2">
                  Or email me directly at
                </p>
                <a
                  href={`mailto:${RECIPIENT_EMAIL}`}
                  className="text-neon-blue font-mono text-sm hover:underline"
                >
                  {RECIPIENT_EMAIL}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
