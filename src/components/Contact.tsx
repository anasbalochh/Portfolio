import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Clock } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:alex@example.com",
      label: "alex@example.com",
      color: "from-red-500 to-pink-500",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
      label: "@alexjohnson",
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "Alex Johnson",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      label: "@alexjohnson",
      color: "from-sky-400 to-blue-500",
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
    },
    {
      icon: Clock,
      label: "Timezone",
      value: "PST (UTC-8)",
    },
  ];

  return (
    <section id="contact" className="py-32 px-4 bg-muted/30 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4" variant="outline">Get In Touch</Badge>
          <h2 className="mb-4">Let's Build Something Amazing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to connect? I'm always open to discussing 
            new opportunities, creative ideas, or partnership possibilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 border-2">
              <h3 className="mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Your Name
                  </label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-2"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-2"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-2 resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group">
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Social Links */}
            <div className="grid sm:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="group p-6 hover:border-primary/50 transition-all cursor-pointer border-2 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 relative"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} p-2.5 group-hover:scale-110 transition-transform`}>
                        <link.icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <div className="font-medium mb-1">{link.name}</div>
                        <div className="text-sm text-muted-foreground">{link.label}</div>
                      </div>
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="p-8 border-2 bg-gradient-to-br from-background to-primary/5">
                <h3 className="mb-6">Quick Info</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="p-8 border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-purple-500/5">
                <h3 className="mb-3">Ready to Collaborate?</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you have a project in mind, need technical consultation, 
                  or just want to chat about tech, I'd love to hear from you.
                </p>
                <Button size="lg" className="w-full" asChild>
                  <a href="mailto:alex@example.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me Directly
                  </a>
                </Button>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
