import { Code2, Heart } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <div className="flex items-center gap-2 font-mono">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold">{"<AJ />"}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building the future, one line at a time
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-6 text-sm"
          >
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </button>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground flex items-center gap-2"
          >
            <span>© {currentYear} Alex Johnson</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            </span>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t">
          <p className="text-xs text-center text-muted-foreground font-mono">
            Crafted with React, TypeScript, Tailwind CSS, and Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
