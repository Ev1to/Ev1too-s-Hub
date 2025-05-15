
import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Easter egg: Console message
    console.log(
      "%cWelcome to my portfolio! 👋",
      "color: #532dff; font-size: 24px; font-weight: bold;"
    );
    console.log(
      "%cFeel free to explore the source code. There might be some easter eggs hidden...",
      "color: #3b0dda; font-size: 14px;"
    );

    // Parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;
      
      const backgroundElements = heroRef.current.querySelectorAll(".parallax-bg");
      const foregroundElements = heroRef.current.querySelectorAll(".parallax-fg");
      
      backgroundElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
      });
      
      foregroundElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.transform = `translate(${-x * 1}px, ${-y * 1}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#skills");
    if (nextSection) {
      window.scrollTo({
        top: nextSection.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth",
      });
    }
  };

  const currentYear = new Date().getFullYear();
  const experienceStart = currentYear - 2;

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_20%,transparent_100%)] -z-10" />
      
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-electric-purple/20 blur-[6rem] -z-10 parallax-bg" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-deep-royal/20 blur-[6rem] -z-10 parallax-bg" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-6 max-w-4xl mx-auto parallax-fg">
          <div className="inline-block border border-electric-purple/30 rounded-full px-6 py-2 bg-background/50 backdrop-blur-sm text-sm md:text-base font-mono text-electric-purple">
            Crafting pixel-perfect experiences since {experienceStart}
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight">
            <span className="block">Building </span>
            <span className="text-gradient glow-text">Tomorrow's Web,</span>
            <span className="block"> Today</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Front-end alchemy: Turning coffee into clean code. Let's build something that outshines my report card.
          </p>

          <div className="inline-block mt-8 neon-border rounded-lg overflow-hidden">
            <div className="bg-background/80 backdrop-blur-sm text-sm md:text-base px-8 py-3 font-mono">
              <span className="text-electric-purple font-semibold">2 Years Code</span>
              <span className="mx-3 text-foreground/50">|</span>
              <span className="text-deep-royal font-semibold">17 Years Genius</span>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-electric-purple rounded-full p-2 hover:bg-deep-royal transition-colors duration-300 animate-float shadow-lg shadow-electric-purple/20"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} className="text-white" />
      </button>
    </section>
  );
};

export default Hero;
