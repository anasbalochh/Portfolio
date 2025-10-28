import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Terminal, User, Code, Briefcase, Mail } from "lucide-react";

export function RoboticNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);

      // Determine active section
      const sections = ["hero", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", icon: Terminal, label: "INIT" },
    { id: "about", icon: User, label: "PROFILE" },
    { id: "skills", icon: Code, label: "SKILLS" },
    { id: "projects", icon: Briefcase, label: "PROJECTS" },
    { id: "contact", icon: Mail, label: "CONTACT" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="fixed top-4 right-4 z-40 flex flex-col gap-2">
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => scrollToSection(item.id)}
            className={`group relative flex items-center gap-3 ${
              activeSection === item.id ? "opacity-100" : "opacity-50 hover:opacity-100"
            } transition-opacity`}
          >
            {/* Label (appears on hover) */}
            <span className="absolute right-14 bg-slate-900 border border-cyan-500/50 px-3 py-1 rounded font-mono text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>

            {/* Icon button */}
            <div className={`w-10 h-10 rounded border-2 ${
              activeSection === item.id 
                ? "border-cyan-400 bg-cyan-500/20" 
                : "border-cyan-500/30 bg-slate-900/50"
            } backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110`}>
              <item.icon className="w-5 h-5 text-cyan-400" />
            </div>
          </motion.button>
        ))}

        {/* Connection line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-cyan-500/50 to-cyan-500/30 -z-10" />
      </nav>
    </>
  );
}
