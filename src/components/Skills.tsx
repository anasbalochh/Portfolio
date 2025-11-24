import { useState, useEffect, useRef } from "react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { motion } from "motion/react";
import { 
  Code2, 
  Database, 
  Cloud, 
  Wrench, 
  Palette, 
  GitBranch,
  Terminal,
  Layout,
  Server,
  Smartphone,
  Shield,
  Zap
} from "lucide-react";

export function Skills() {
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

  const skillCategories = [
    {
      icon: Code2,
      category: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 92 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Motion", level: 88 },
        { name: "Vue.js", level: 85 },
      ],
    },
    {
      icon: Server,
      category: "Backend Development",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js / Express", level: 93 },
        { name: "Python / Django", level: 87 },
        { name: "GraphQL / REST", level: 90 },
        { name: "Microservices", level: 85 },
        { name: "WebSocket", level: 82 },
      ],
    },
    {
      icon: Database,
      category: "Database & Caching",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 88 },
        { name: "Redis", level: 85 },
        { name: "Prisma ORM", level: 87 },
        { name: "Database Design", level: 92 },
      ],
    },
    {
      icon: Cloud,
      category: "Cloud & DevOps",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS (EC2, S3, Lambda)", level: 88 },
        { name: "Docker / Kubernetes", level: 85 },
        { name: "CI/CD Pipelines", level: 87 },
        { name: "Nginx / Load Balancing", level: 83 },
        { name: "Monitoring & Logging", level: 80 },
      ],
    },
    {
      icon: Wrench,
      category: "Tools & Workflow",
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Git / GitHub", level: 95 },
        { name: "VS Code / Vim", level: 92 },
        { name: "Design Tools", level: 85 },
        { name: "Agile / Scrum", level: 88 },
        { name: "Testing (Jest, Cypress)", level: 87 },
      ],
    },
    {
      icon: Shield,
      category: "Security & Best Practices",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Auth (JWT, OAuth)", level: 90 },
        { name: "API Security", level: 88 },
        { name: "OWASP Standards", level: 85 },
        { name: "Code Review", level: 92 },
        { name: "Performance Optimization", level: 89 },
      ],
    },
  ];

  const additionalSkills = [
    { icon: Terminal, label: "CLI Tools" },
    { icon: Layout, label: "Responsive Design" },
    { icon: Smartphone, label: "PWA Development" },
    { icon: GitBranch, label: "Version Control" },
    { icon: Palette, label: "UI/UX Design" },
    { icon: Zap, label: "Performance" },
  ];

  return (
    <section id="skills" className="py-32 px-4 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4" variant="outline">Expertise</Badge>
          <h2 className="mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit honed through years of building production-grade applications.
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="p-6 h-full border-2 hover:border-primary/50 transition-all group">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} p-2 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{skill.name}</span>
                        <span className="text-sm font-mono text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="p-8 border-2">
            <h3 className="text-center mb-6">Additional Competencies</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {additionalSkills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                >
                  <Badge 
                    variant="outline" 
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
                  >
                    <skill.icon className="w-4 h-4 mr-2" />
                    {skill.label}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-background to-primary/5 border-2">
            <p className="text-muted-foreground italic max-w-3xl mx-auto">
              "Technology evolves rapidly, and so do I. I'm committed to continuous learning, 
              staying current with industry trends, and mastering new tools that enable better solutions. 
              Every project is an opportunity to grow."
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
