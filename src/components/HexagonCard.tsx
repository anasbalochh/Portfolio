import { ReactNode } from "react";
import { motion } from "motion/react";

interface HexagonCardProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
}

export function HexagonCard({ children, className = "", delay = 0 }: HexagonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative group ${className}`}
    >
      {/* Hexagon border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
      
      {/* Card content */}
      <div className="relative bg-slate-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />
        
        {children}
      </div>
    </motion.div>
  );
}
