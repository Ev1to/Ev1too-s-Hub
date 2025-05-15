
import React, { useRef, useEffect } from "react";
import { Github, Linkedin, Twitter, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

type SocialLink = {
  name: string;
  url: string;
  icon: React.FC<{ className?: string }>;
  color: string;
};

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: ({ className }) => <Github className={className} />,
    color: "hover:text-white"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: ({ className }) => <Linkedin className={className} />,
    color: "hover:text-[#0077b5]"
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: ({ className }) => <Twitter className={className} />,
    color: "hover:text-[#1DA1F2]"
  },
  {
    name: "Discord",
    url: "https://discord.com",
    icon: ({ className }) => <MessageSquare className={className} />,
    color: "hover:text-[#5865F2]"
  }
];

const Social = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  const iconsContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const orb = orbRef.current;
    const iconsContainer = iconsContainerRef.current;
    if (!orb || !iconsContainer) return;
    
    let rotationDegrees = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let isHoveringOrb = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHoveringOrb) return;
      
      const deltaX = e.clientX - lastMouseX;
      const deltaY = e.clientY - lastMouseY;
      
      // Use deltaX for horizontal rotation (around Y axis)
      // Use deltaY for vertical rotation (around X axis)
      rotationDegrees += deltaX * 0.2;
      
      if (iconsContainer) {
        iconsContainer.style.transform = `rotateY(${rotationDegrees}deg)`;
      }
      
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };
    
    const handleMouseEnter = (e: MouseEvent) => {
      isHoveringOrb = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };
    
    const handleMouseLeave = () => {
      isHoveringOrb = false;
    };
    
    orb.addEventListener("mouseenter", handleMouseEnter);
    orb.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      orb.removeEventListener("mouseenter", handleMouseEnter);
      orb.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="contact" className="section bg-background relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Whether you're looking for a developer, have a question, or just want to say hi — I'd love to hear from you.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div 
              className="flex flex-col items-center bg-card p-8 rounded-lg border border-border"
            >
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-foreground/70 mb-6 text-center">
                Ready to start a project? Send me a message and let's create something amazing together.
              </p>
              
              <a 
                href="mailto:contact@example.com" 
                className="px-8 py-3 bg-electric-purple hover:bg-deep-royal transition-colors rounded-lg text-white font-medium"
              >
                Send Email
              </a>
              
              <div className="mt-8 w-full">
                <div className="flex justify-center items-center gap-4 mt-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "text-foreground/70 hover:scale-110 transition-all p-2",
                        social.color
                      )}
                      aria-label={social.name}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={orbRef}
            className="w-full md:w-1/2 h-80 flex items-center justify-center perspective-800 order-1 md:order-2"
          >
            <div 
              ref={iconsContainerRef}
              className="relative w-52 h-52 transition-transform duration-300 transform-style-3d animate-rotate-slow"
            >
              {socialLinks.map((social, index) => {
                // Position icons in 3D space around the center point
                const angle = (index / socialLinks.length) * Math.PI * 2;
                const radius = 120; // Distance from center
                const x = Math.sin(angle) * radius;
                const z = Math.cos(angle) * radius;
                
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `translate(-50%, -50%) translate3d(${x}px, 0, ${z}px)`,
                    }}
                    aria-label={social.name}
                  >
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-electric-purple/10 backdrop-blur-sm border border-electric-purple/30 shadow-lg text-white transition-all duration-300 hover:bg-electric-purple">
                      <social.icon className="w-6 h-6" />
                    </div>
                  </a>
                );
              })}
              
              {/* Center orb */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-electric-purple to-deep-royal opacity-80 blur-sm" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-electric-purple to-deep-royal animate-pulse shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
