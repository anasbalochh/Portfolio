import { useEffect, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let iterations = 0;
    let frameCount = 0;
    const maxFrames = Math.ceil(text.length * 4); // Faster animation
    
    const animate = () => {
      frameCount++;
      const progress = frameCount / maxFrames;
      iterations = progress * text.length;
      
      setDisplayText(prev => 
        prev.split("")
          .map((char, index) => {
            if (index < iterations) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      
      if (frameCount < maxFrames) {
        requestAnimationFrame(animate);
      } else {
        setDisplayText(text);
      }
    };
    
    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [text]);

  return <span className={className}>{displayText}</span>;
}
