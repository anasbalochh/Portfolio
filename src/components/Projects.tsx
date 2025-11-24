import { useState, useRef, useEffect } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function Projects() {
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

  const projects = {
    fullstack: [
      {
        id: 1,
        title: "CloudSync Platform",
        description: "Enterprise-grade file synchronization platform with real-time collaboration, end-to-end encryption, and advanced permission management.",
        image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxNDI0MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS S3"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
      },
      {
        id: 2,
        title: "AI Analytics Dashboard",
        description: "Real-time analytics platform powered by machine learning for predictive insights and automated reporting.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjEzNzI3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["React", "Python", "TensorFlow", "D3.js", "MongoDB"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
      },
    ],
    frontend: [
      {
        id: 3,
        title: "Design System Pro",
        description: "Comprehensive component library with automated documentation, theming support, and accessibility built-in.",
        image: "https://images.unsplash.com/photo-1620403661092-1750c6d4148a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MTMyOTc2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["React", "TypeScript", "Storybook", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
      },
      {
        id: 4,
        title: "Interactive Portfolio Builder",
        description: "Drag-and-drop portfolio builder with live preview, custom themes, and one-click deployment.",
        image: "https://images.unsplash.com/photo-1622343795159-97183505d939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbmV0d29ya3xlbnwxfHx8fDE3NjEzNzY0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["Vue.js", "Motion", "Vite", "Firebase"],
        liveUrl: "#",
        githubUrl: "#",
      },
    ],
    backend: [
      {
        id: 5,
        title: "Microservices API Gateway",
        description: "Scalable API gateway with rate limiting, caching, load balancing, and comprehensive monitoring.",
        image: "https://images.unsplash.com/photo-1565229284535-2cbbe3049123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzYxNDI3NDAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["Node.js", "Express", "Docker", "Kubernetes", "Nginx"],
        liveUrl: "#",
        githubUrl: "#",
      },
      {
        id: 6,
        title: "Real-time Chat Infrastructure",
        description: "Horizontally scalable chat system supporting millions of concurrent connections with message persistence.",
        image: "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcGF0dGVybnxlbnwxfHx8fDE3NjE0Mjc3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        tags: ["WebSocket", "Redis", "PostgreSQL", "RabbitMQ"],
        liveUrl: "#",
        githubUrl: "#",
      },
    ],
  };

  return (
    <section id="projects" className="py-32 px-4 bg-muted/30 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4" variant="outline">Portfolio</Badge>
          <h2 className="mb-4">Featured Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated selection of projects showcasing expertise across the full development stack.
          </p>
        </motion.div>

        <Tabs defaultValue="fullstack" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
          </TabsList>

          <TabsContent value="fullstack" className="mt-0">
            <ProjectGrid projects={projects.fullstack} isVisible={isVisible} />
          </TabsContent>

          <TabsContent value="frontend" className="mt-0">
            <ProjectGrid projects={projects.frontend} isVisible={isVisible} />
          </TabsContent>

          <TabsContent value="backend" className="mt-0">
            <ProjectGrid projects={projects.backend} isVisible={isVisible} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ProjectGrid({ projects, isVisible }: { projects: any[]; isVisible: boolean }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={project.featured ? "md:col-span-2" : ""}
        >
          <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all h-full">
            <div className={`relative ${project.featured ? 'h-80' : 'h-56'} overflow-hidden`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
              
              {project.featured && (
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-primary to-purple-600 border-0 text-white">
                  Featured
                </Badge>
              )}
            </div>

            <div className="p-6">
              <h3 className="mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary" className="font-mono text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="default" size="sm" className="group/btn" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
