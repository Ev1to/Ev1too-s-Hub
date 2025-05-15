
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Social from "@/components/Social";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Apply smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Update the title and metadata
    document.title = "Dev.Prodigy | Front-end Developer Portfolio";
    
    // Add an Easter egg console message
    console.log(`
    ╔═══════════════════════════════════════════════╗
    ║                                               ║
    ║   Welcome to my portfolio source code!        ║
    ║                                               ║
    ║   Type 'showTerminal()' to see something cool ║
    ║                                               ║
    ╚═══════════════════════════════════════════════╝
    `);
    
    // Easter egg console function
    window.showTerminal = () => {
      console.clear();
      console.log("Loading terminal...");
      
      setTimeout(() => {
        console.log("%c> Dev.Prodigy Terminal v1.0", "color: #532dff; font-weight: bold;");
        console.log("%c> Type 'help' for a list of commands", "color: #888;");
        
        const commands = {
          help: () => {
            console.log("Available commands: about, skills, contact, clear");
          },
          about: () => {
            console.log("%cAbout Me:", "font-weight: bold");
            console.log("Front-end developer with 2+ years of professional experience");
            console.log("Passionate about creating clean, performant, and accessible web experiences");
            console.log("Currently balancing coding and school responsibilities");
          },
          skills: () => {
            console.log("%cSkills:", "font-weight: bold");
            console.log("• HTML5/CSS3: ████████ 90%");
            console.log("• JavaScript: ███████ 85%");
            console.log("• React: ████████ 90%");
            console.log("• TypeScript: ████████ 80%");
            console.log("• UI/UX: ████████ 85%");
          },
          contact: () => {
            console.log("%cContact Me:", "font-weight: bold");
            console.log("Email: contact@example.com");
            console.log("GitHub: github.com/devprodigy");
            console.log("LinkedIn: linkedin.com/in/devprodigy");
          },
          clear: () => {
            console.clear();
            console.log("%c> Dev.Prodigy Terminal v1.0", "color: #532dff; font-weight: bold;");
            console.log("%c> Type 'help' for a list of commands", "color: #888;");
          }
        };
        
        // Override console to create a simple command system
        const originalConsole = window.console.log;
        window.console.log = function() {
          if (arguments[0] && typeof arguments[0] === 'string' && Object.keys(commands).includes(arguments[0].toLowerCase())) {
            commands[arguments[0].toLowerCase()]();
          } else {
            originalConsole.apply(console, arguments);
          }
        };
      }, 1000);
    };
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
      // Clean up by removing the global function
      delete window.showTerminal;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Social />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
