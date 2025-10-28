import { useEffect, useRef, useState } from "react";
import { Code2, Palette, Rocket, Zap, Shield, Users } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code2,
      title: "Clean Architecture",
      description: "Building maintainable systems with SOLID principles and design patterns.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "UI/UX Excellence",
      description: "Crafting pixel-perfect interfaces with seamless user experiences.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Rocket,
      title: "Performance First",
      description: "Optimizing for speed with lazy loading, caching, and best practices.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Rapid Development",
      description: "Leveraging modern tools and frameworks for efficient delivery.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Security Minded",
      description: "Implementing secure authentication, authorization, and data protection.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Working effectively in agile teams with clear communication.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "20+", label: "Happy Clients" },
    { value: "100%", label: "Dedication" },
  ];

  return (
    <section id="about" className="py-32 px-4 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4" variant="outline">About Me</Badge>
          <h2 className="mb-4">Crafting Digital Excellence</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate full-stack developer dedicated to creating innovative solutions 
            that bridge the gap between complex technology and elegant user experiences.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <Card className="p-6 text-center border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                <div className="text-4xl font-mono mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <Card className="group p-6 h-full hover:border-primary/50 transition-all cursor-pointer relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${highlight.color} p-2.5 mb-4 group-hover:scale-110 transition-transform`}>
                    <highlight.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Personal statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16"
        >
          <Card className="p-8 border-2 bg-gradient-to-br from-background to-muted/30">
            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground mb-4">
                My journey into development began with a simple fascination: how can we use technology 
                to solve real problems? This question has driven me to continuously learn, experiment, 
                and push the boundaries of what's possible.
              </p>
              <p className="text-muted-foreground">
                Today, I specialize in building full-stack applications that don't just work—they delight. 
                From architecting scalable backend systems to crafting intuitive user interfaces, 
                I'm committed to delivering solutions that make a meaningful impact.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
