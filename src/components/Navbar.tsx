
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state based on scroll position
      setScrolled(window.scrollY > 20);
      
      // Get all sections for intersection detection
      const sections = document.querySelectorAll("section[id]");
      
      // Find which section is currently in view
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const id = section.getAttribute("id") || "";
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/90 backdrop-blur-md border-b border-border py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          className="text-xl md:text-2xl font-bold font-mono text-gradient"
        >
          <span className="text-electric-purple">Dev</span>
          <span className="text-foreground">.Prodigy</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(item.href.replace("#", ""), e)}
                  className={cn(
                    "text-sm font-semibold transition-all duration-300 relative",
                    activeSection === item.href.replace("#", "") 
                      ? "text-electric-purple" 
                      : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  {item.label}
                  {activeSection === item.href.replace("#", "") && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-electric-purple animate-neon-pulse rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="block md:hidden">
          <button
            className="p-2 text-foreground hover:text-electric-purple transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
