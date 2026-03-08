import { motion } from "framer-motion";

export default function GirlCoderAvatar() {
  return (
    <motion.div
      className="relative w-full h-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            "0 0 20px rgba(0,212,255,0.25), 0 0 40px rgba(168,85,247,0.15)",
            "0 0 35px rgba(0,212,255,0.45), 0 0 60px rgba(168,85,247,0.3)",
            "0 0 20px rgba(0,212,255,0.25), 0 0 40px rgba(168,85,247,0.15)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ borderRadius: "50%" }}
      />

      {/* Floating idle animation wrapper */}
      <motion.div
        className="w-full h-full"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background circle */}
          <defs>
            <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0a0f1e" />
              <stop offset="100%" stopColor="#060912" />
            </radialGradient>
            <radialGradient id="skinGrad" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#FDDBB4" />
              <stop offset="100%" stopColor="#F5B080" />
            </radialGradient>
            <radialGradient id="blushGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFB3BA" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FFB3BA" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a0533" />
              <stop offset="50%" stopColor="#2d0a52" />
              <stop offset="100%" stopColor="#130825" />
            </linearGradient>
            <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0a0f1e" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background */}
          <circle cx="100" cy="100" r="100" fill="url(#bgGrad)" />
          <circle
            cx="100"
            cy="100"
            r="99"
            fill="none"
            stroke="url(#shirtGrad)"
            strokeWidth="1.5"
            opacity="0.4"
          />

          {/* Decorative code particles in background */}
          <text
            x="15"
            y="40"
            fontSize="7"
            fill="#00d4ff"
            opacity="0.15"
            fontFamily="monospace"
          >
            &lt;/&gt;
          </text>
          <text
            x="155"
            y="55"
            fontSize="6"
            fill="#a855f7"
            opacity="0.15"
            fontFamily="monospace"
          >
            {}
          </text>
          <text
            x="20"
            y="155"
            fontSize="6"
            fill="#a855f7"
            opacity="0.12"
            fontFamily="monospace"
          >
            [ ]
          </text>
          <text
            x="158"
            y="145"
            fontSize="7"
            fill="#00d4ff"
            opacity="0.12"
            fontFamily="monospace"
          >
            =&gt;
          </text>

          {/* Body / Shoulders */}
          <ellipse
            cx="100"
            cy="170"
            rx="44"
            ry="30"
            fill="url(#shirtGrad)"
            opacity="0.95"
          />
          <ellipse
            cx="100"
            cy="165"
            rx="38"
            ry="25"
            fill="url(#shirtGrad)"
            opacity="0.8"
          />

          {/* Neck */}
          <rect x="92" y="119" width="16" height="18" rx="7" fill="url(#skinGrad)" />

          {/* Collar detail */}
          <path d="M86 137 Q100 148 114 137" fill="url(#shirtGrad)" opacity="0.9" />
          <path
            d="M88 136 Q100 145 112 136"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.8"
            opacity="0.3"
          />

          {/* T-shirt code print */}
          <text
            x="87"
            y="162"
            fontSize="7"
            fill="white"
            opacity="0.6"
            fontFamily="monospace"
          >
            &lt;Dev/&gt;
          </text>

          {/* Head */}
          <ellipse cx="100" cy="90" rx="32" ry="34" fill="url(#skinGrad)" />

          {/* Hair — long flowing dark hair */}
          {/* Back hair layer */}
          <path
            d="M68 82 Q60 60 68 42 Q78 20 100 18 Q122 20 132 42 Q140 60 132 82"
            fill="url(#hairGrad)"
          />
          {/* Left hair flowing down */}
          <path
            d="M68 82 Q58 100 60 125 Q62 145 68 155"
            fill="url(#hairGrad)"
            stroke="url(#hairGrad)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Right hair flowing down */}
          <path
            d="M132 82 Q142 100 140 125 Q138 145 133 155"
            fill="url(#hairGrad)"
            stroke="url(#hairGrad)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Top scalp */}
          <path
            d="M68 82 Q68 48 100 42 Q132 48 132 82 Q116 72 100 72 Q84 72 68 82 Z"
            fill="url(#hairGrad)"
          />
          {/* Hair shine highlight */}
          <path
            d="M85 50 Q100 44 112 52"
            fill="none"
            stroke="#6b21a8"
            strokeWidth="2"
            opacity="0.4"
            strokeLinecap="round"
          />

          {/* Ears */}
          <ellipse cx="68" cy="90" rx="5" ry="7" fill="url(#skinGrad)" />
          <ellipse cx="132" cy="90" rx="5" ry="7" fill="url(#skinGrad)" />

          {/* Earring left */}
          <circle cx="68" cy="97" r="2" fill="#00d4ff" opacity="0.9" />
          <circle
            cx="68"
            cy="97"
            r="2"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.5"
            opacity="0.5"
          />
          {/* Earring right */}
          <circle cx="132" cy="97" r="2" fill="#a855f7" opacity="0.9" />
          <circle
            cx="132"
            cy="97"
            r="2"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.5"
            opacity="0.5"
          />

          {/* Eyes */}
          {/* Left eye */}
          <ellipse cx="88" cy="87" rx="6.5" ry="7" fill="white" />
          <ellipse cx="88" cy="88" rx="4.5" ry="5" fill="#1a0533" />
          <ellipse cx="88" cy="88" rx="3" ry="3.5" fill="#2d1052" />
          <circle cx="88" cy="88" r="1.8" fill="#0a0f1e" />
          {/* Eye shine */}
          <circle cx="89.5" cy="86.5" r="1.2" fill="white" opacity="0.9" />
          <circle cx="87" cy="89" r="0.7" fill="white" opacity="0.5" />

          {/* Right eye */}
          <ellipse cx="112" cy="87" rx="6.5" ry="7" fill="white" />
          <ellipse cx="112" cy="88" rx="4.5" ry="5" fill="#1a0533" />
          <ellipse cx="112" cy="88" rx="3" ry="3.5" fill="#2d1052" />
          <circle cx="112" cy="88" r="1.8" fill="#0a0f1e" />
          {/* Eye shine */}
          <circle cx="113.5" cy="86.5" r="1.2" fill="white" opacity="0.9" />
          <circle cx="111" cy="89" r="0.7" fill="white" opacity="0.5" />

          {/* Eyelashes top left */}
          <path
            d="M82 82 Q84 79 86 81"
            stroke="#1a0533"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M85 80.5 Q87 78 89 80"
            stroke="#1a0533"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M89 80 Q91 78 92 80.5"
            stroke="#1a0533"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Eyelashes top right */}
          <path
            d="M106 80.5 Q108 78 110 80"
            stroke="#1a0533"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M109.5 80 Q111.5 78 113.5 80"
            stroke="#1a0533"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M113 80.5 Q115 78.5 116 81"
            stroke="#1a0533"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Eyebrows */}
          <path
            d="M81 80 Q88 76 95 79"
            stroke="#1a0533"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M105 79 Q112 76 119 80"
            stroke="#1a0533"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Nose */}
          <path
            d="M97 93 Q100 97 103 93"
            fill="none"
            stroke="#d4956a"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <circle cx="97.5" cy="96" r="1.2" fill="#d4956a" opacity="0.4" />
          <circle cx="102.5" cy="96" r="1.2" fill="#d4956a" opacity="0.4" />

          {/* Blush */}
          <ellipse cx="82" cy="98" rx="7" ry="4" fill="url(#blushGrad)" />
          <ellipse cx="118" cy="98" rx="7" ry="4" fill="url(#blushGrad)" />

          {/* Smile */}
          <path
            d="M91 105 Q100 113 109 105"
            fill="none"
            stroke="#c47040"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M94 107 Q100 112 106 107" fill="#FFB3BA" opacity="0.4" />

          {/* Headphones / dev accessory — small headband with glow dots */}
          <path
            d="M69 82 Q70 58 100 56 Q130 58 131 82"
            fill="none"
            stroke="#1a0533"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M69 82 Q70 58 100 56 Q130 58 131 82"
            fill="none"
            stroke="#00d4ff"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.4"
          />
          <ellipse
            cx="67"
            cy="83"
            rx="6"
            ry="8"
            fill="#1e293b"
            stroke="#00d4ff"
            strokeWidth="1"
            opacity="0.9"
          />
          <ellipse
            cx="133"
            cy="83"
            rx="6"
            ry="8"
            fill="#1e293b"
            stroke="#a855f7"
            strokeWidth="1"
            opacity="0.9"
          />
          <circle cx="67" cy="83" r="3" fill="#00d4ff" opacity="0.6" />
          <circle cx="133" cy="83" r="3" fill="#a855f7" opacity="0.6" />

          {/* Laptop screen (floating in front) */}
          <g transform="translate(0, 5)">
            {/* Laptop lid */}
            <rect x="62" y="148" width="76" height="52" rx="4" fill="url(#laptopGrad)" />
            <rect x="64" y="150" width="72" height="48" rx="3" fill="url(#screenGrad)" />

            {/* Screen content - code editor */}
            <rect x="64" y="150" width="72" height="12" rx="3" fill="#1e293b" />
            {/* Window dots */}
            <circle cx="70" cy="156" r="2" fill="#f87171" opacity="0.8" />
            <circle cx="76" cy="156" r="2" fill="#fbbf24" opacity="0.8" />
            <circle cx="82" cy="156" r="2" fill="#4ade80" opacity="0.8" />
            <text x="88" y="159" fontSize="5" fill="#64748b" fontFamily="monospace">
              App.tsx
            </text>

            {/* Code lines */}
            <rect
              x="67"
              y="166"
              width="20"
              height="2"
              rx="1"
              fill="#a855f7"
              opacity="0.8"
            />
            <rect
              x="89"
              y="166"
              width="14"
              height="2"
              rx="1"
              fill="#00d4ff"
              opacity="0.7"
            />
            <rect
              x="105"
              y="166"
              width="10"
              height="2"
              rx="1"
              fill="#4ade80"
              opacity="0.6"
            />

            <rect
              x="70"
              y="171"
              width="15"
              height="2"
              rx="1"
              fill="#f97316"
              opacity="0.7"
            />
            <rect
              x="87"
              y="171"
              width="22"
              height="2"
              rx="1"
              fill="#e2e8f0"
              opacity="0.4"
            />

            <rect
              x="70"
              y="176"
              width="10"
              height="2"
              rx="1"
              fill="#00d4ff"
              opacity="0.7"
            />
            <rect
              x="82"
              y="176"
              width="18"
              height="2"
              rx="1"
              fill="#a855f7"
              opacity="0.6"
            />
            <rect
              x="102"
              y="176"
              width="12"
              height="2"
              rx="1"
              fill="#4ade80"
              opacity="0.5"
            />

            <rect
              x="67"
              y="181"
              width="8"
              height="2"
              rx="1"
              fill="#a855f7"
              opacity="0.8"
            />
            <rect
              x="77"
              y="181"
              width="25"
              height="2"
              rx="1"
              fill="#e2e8f0"
              opacity="0.3"
            />

            {/* Cursor blink */}
            <motion.rect x="103" y="181" width="1.5" height="2" rx="0.5" fill="#00d4ff" />

            {/* Laptop base */}
            <rect x="55" y="199" width="90" height="5" rx="2.5" fill="#1e293b" />
            <rect
              x="85"
              y="199"
              width="30"
              height="2"
              rx="1"
              fill="#0f172a"
              opacity="0.5"
            />
          </g>
        </svg>
      </motion.div>

      {/* Animated cursor blink overlay using Framer Motion */}
      <motion.div
        className="absolute"
        style={{
          bottom: "34%",
          right: "26%",
          width: "2px",
          height: "8px",
          background: "#00d4ff",
          borderRadius: "1px",
        }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "steps(1)" }}
      />
    </motion.div>
  );
}
