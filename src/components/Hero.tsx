import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Terminal, Code2, Database, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const techStack = [
    { icon: Terminal, label: "CLI Tools", color: "from-green-500 to-emerald-600" },
    { icon: Code2, label: "Modern Frontend", color: "from-blue-500 to-cyan-600" },
    { icon: Database, label: "Scalable Backend", color: "from-purple-500 to-pink-600" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
                <Sparkles className="w-3 h-3 mr-1" />
                Available for new projects
              </Badge>
            </motion.div>

            <motion.h1
              className="mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm Alex Johnson
            </motion.h1>

            <div className="mb-6 h-12 flex items-center">
              <h2 className="text-muted-foreground font-mono">
                {'> '}{text}
                <span className="animate-pulse">_</span>
              </h2>
            </div>

            <motion.p
              className="text-muted-foreground mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              I craft exceptional digital experiences through clean code and innovative design. 
              Specializing in building scalable web applications that solve real-world problems 
              with elegant solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection("projects")}
                className="group"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Let's Connect
              </Button>
            </motion.div>

            {/* Tech stack indicators */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.label}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="p-4 rounded-xl border bg-card hover:border-primary/50 transition-all cursor-pointer">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tech.color} p-2 mb-2`}>
                      <tech.icon className="w-full h-full text-white" />
                    </div>
                    <p className="text-xs text-muted-foreground">{tech.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Interactive terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl" />
              
              {/* Terminal window */}
              <div className="relative rounded-xl border bg-card/50 backdrop-blur-sm overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2 font-mono">terminal@portfolio:~</span>
                </div>

                {/* Terminal content */}
                <div className="p-6 font-mono text-sm">
                  <TerminalLine delay={0}>cat skills.json</TerminalLine>
                  <TerminalLine delay={0.5} isOutput>
                    {`{`}
                  </TerminalLine>
                  <TerminalLine delay={0.7} isOutput indent>
                    "frontend": ["React", "Next.js", "TypeScript", "Tailwind"],
                  </TerminalLine>
                  <TerminalLine delay={0.9} isOutput indent>
                    "backend": ["Node.js", "Python", "PostgreSQL", "Redis"],
                  </TerminalLine>
                  <TerminalLine delay={1.1} isOutput indent>
                    "cloud": ["AWS", "Docker", "Kubernetes", "CI/CD"],
                  </TerminalLine>
                  <TerminalLine delay={1.3} isOutput indent>
                    "expertise": "Building scalable full-stack solutions"
                  </TerminalLine>
                  <TerminalLine delay={1.5} isOutput>
                    {`}`}
                  </TerminalLine>
                  <TerminalLine delay={1.8}>
                    <span className="text-green-500">✓</span> Ready to build amazing things
                  </TerminalLine>
                  <TerminalLine delay={2} className="mt-4">
                    <span className="text-primary">{'>'}</span> <span className="animate-pulse">_</span>
                  </TerminalLine>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TerminalLine({ 
  children, 
  delay = 0, 
  isOutput = false, 
  indent = false,
  className = ""
}: { 
  children: React.ReactNode; 
  delay?: number; 
  isOutput?: boolean; 
  indent?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      className={`${isOutput ? 'text-muted-foreground' : 'text-primary'} ${indent ? 'ml-4' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
