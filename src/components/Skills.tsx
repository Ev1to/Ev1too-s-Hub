
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
  level: number; // 1-5
  category: "frontend" | "tools" | "other";
  description: string;
};

const skills: Skill[] = [
  {
    name: "HTML5 & CSS3",
    level: 5,
    category: "frontend",
    description: "Advanced semantic markup and modern CSS techniques including Flexbox, Grid, and animations."
  },
  {
    name: "JavaScript/TypeScript",
    level: 5,
    category: "frontend",
    description: "Deep knowledge of ES6+ features, TypeScript, and modern JS patterns."
  },
  {
    name: "React",
    level: 5,
    category: "frontend",
    description: "Component architecture, hooks, context API, and React ecosystem libraries."
  },
  {
    name: "Next.js",
    level: 4,
    category: "frontend",
    description: "Server-side rendering, static site generation, and API routes."
  },
  {
    name: "Tailwind CSS",
    level: 5,
    category: "frontend",
    description: "Utility-first CSS framework for rapid UI development."
  },
  {
    name: "UI/UX Design",
    level: 4,
    category: "frontend",
    description: "Creating intuitive interfaces and engaging user experiences."
  },
  {
    name: "Git & GitHub",
    level: 4,
    category: "tools",
    description: "Version control, collaborative workflow, CI/CD pipelines."
  },
  {
    name: "Figma",
    level: 4,
    category: "tools",
    description: "UI design, prototyping, and design system creation."
  },
  {
    name: "Performance Optimization",
    level: 3,
    category: "other",
    description: "Web vitals, lazy loading, code splitting, and bundle optimization."
  },
  {
    name: "Testing",
    level: 3,
    category: "other",
    description: "Unit testing, integration testing with Jest, React Testing Library, and Cypress."
  },
];

// Skill categories for filtering
const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "tools", label: "Tools" },
  { id: "other", label: "Other" }
];

const SkillCard = ({ skill }: { skill: Skill }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "h-full bg-card p-6 rounded-lg transition-all duration-300 border border-border",
        isHovered && "animate-neon-pulse"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
      
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i}
            className={cn(
              "w-2 h-2 rounded-full transition-colors duration-300",
              i < skill.level 
                ? isHovered ? "bg-electric-purple" : "bg-deep-royal" 
                : "bg-muted"
            )}
          />
        ))}
      </div>
      
      <p className="text-sm text-foreground/70">
        {skill.description}
      </p>
    </div>
  );
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredSkills = selectedCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="section bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A curated collection of technologies I've mastered during my journey as a front-end developer.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-all duration-300",
                selectedCategory === category.id
                  ? "bg-electric-purple text-white"
                  : "bg-accent/50 text-foreground/70 hover:bg-accent"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
