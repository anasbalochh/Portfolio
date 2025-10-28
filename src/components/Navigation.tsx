import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Work", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX: scrollProgress / 100 }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          isScrolled ? "bg-background/80 backdrop-blur-xl border-b shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 font-mono group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold hidden sm:block">{"<AJ />"}</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1 items-center bg-muted/50 rounded-full p-1 backdrop-blur-sm">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-background transition-all"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="hidden md:block"
            >
              <Button 
                onClick={() => scrollToSection("contact")}
                className="rounded-full"
              >
                Let's Talk
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-xl border-b overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <Button onClick={() => scrollToSection("contact")} className="w-full mt-2">
                  Let's Talk
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
