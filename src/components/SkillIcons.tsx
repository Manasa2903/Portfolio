import { useState } from "react";

// Devicons — full-colour brand SVGs, no CSS filter needed
const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

// path inside devicons: folder/file (without .svg)
const slugMap: Record<string, string> = {
  React: "react/react-original",
  TypeScript: "typescript/typescript-original",
  JavaScript: "javascript/javascript-original",
  "React Native": "react/react-original",
  HTML5: "html5/html5-original",
  CSS3: "css3/css3-original",
  Redux: "redux/redux-original",
  "Ant Design": "antdesign/antdesign-original",
  "Material UI": "materialui/materialui-original",
  "Node.js": "nodejs/nodejs-original",
  "Express.js": "express/express-original",
  MongoDB: "mongodb/mongodb-original",
  Git: "git/git-original",
  "Vertex AI": "googlecloud/googlecloud-original",
  Python: "python/python-original",
};

// Custom base64 icons for skills without a devicon
const customIconMap: Record<string, string> = {
  LangChain:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAM1BMVEUcPDwRNjYAMC8AKSd2goaZoaapr7T//v/g4ej49/+/xMn8+/8AFRNAVliSm6BUZWfLztSDUJcgAAAAu0lEQVR4AdWRR2JFIQhFLcgF+/5XG54lPZn/M+Qo1b0iPnzBf1LRU/oC+fjuGD/gY4NANUvRSwEUEta/DAXVKtchxSaKbH99gwWaC4Tzrw/NFkTzLvCTDxxiXxbcJlChhYOL85FlRhcTzJEnJ9SxQkuatQpVSkkE3ytBlwy8pdUPA2gCbWxupV0NGRhuVEEnGad483sUgynlScV6Xf/WKHcJhmh5SqEsJ+Hz+iz6Y31n8f0L5ON/J3tB3gAtjgsX/sngiAAAAABJRU5ErkJggg==",
  MCP: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEVHcEwAAAAAAAAAAAAAAAAnJyd3d3ddXV3Dw8P///+Kiorb29uZmZn29vYPDw/t7e2lpaUyMjJPT0/W1tZcBe60AAAABXRSTlMALsj/x4sesyUAAACzSURBVHgBddOFAcQgEARAePRw6b/WuLAfT4DBhTH+E6+X5ItBitLmjnAG5Swtl7vKstE8eRci6TPOwOzyTRQBB8tFWAIcjMKCxSXA04qodPWKvVgxOpI+Ec1tvcoXorWt4RP/jYzoJ76Yob6jWs2CLZ869JY8mhE3rn2IYAOuVQc0mAQnhLkMsRLFDDagSDZHW8EWhAsMEe0fPTXxiZ30N1YCZfJfh23NuEAdSq5bXn4ehxk+XxCYu+Sq9wAAAABJRU5ErkJggg==",
};

// Icons that are black by default and need to be inverted on a dark background
const needsInvert = new Set(["Express.js"]);

// Emoji fallback for skills with no devicon equivalent
const emojiMap: Record<string, string> = {
  "ag-Grid": "📊",
  ECharts: "📈",
  "REST APIs": "🔌",
  "MERN Stack": "💻",
  "Prompt Engineering": "✍️",
  RAG: "🔍",
  LangGraph: "🕸️",
  WebSockets: "🔄",
  Performance: "⚡",
  "API Integration": "🧩",
};

interface SkillIconProps {
  name: string;
  color: string;
  className?: string;
}

export function SkillIcon({ name, color, className = "w-8 h-8" }: SkillIconProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const slug = slugMap[name];
  const customIcon = customIconMap[name];

  if (customIcon) {
    return <img src={customIcon} alt={name} className={className} />;
  }

  if (slug && !imgFailed) {
    return (
      <img
        src={`${CDN}/${slug}.svg`}
        alt={name}
        className={className}
        style={
          needsInvert.has(name) ? { filter: "invert(1) brightness(0.9)" } : undefined
        }
        onError={() => setImgFailed(true)}
      />
    );
  }

  // Emoji fallback
  const emoji = emojiMap[name];
  if (emoji) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{ fontSize: "1.6rem", lineHeight: 1 }}
      >
        {emoji}
      </div>
    );
  }

  // Last resort: colored initials badge
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={`flex items-center justify-center rounded-md font-bold text-xs font-mono ${className}`}
      style={{ color, border: `1.5px solid ${color}50`, background: `${color}15` }}
    >
      {initials}
    </div>
  );
}
