import React, { useState } from "react";
import { cn } from "@/lib/utils";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  codeSnippet: string;
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce UI Kit",
    description: "A modern, responsive e-commerce interface built with React and Tailwind CSS. Features include product filters, cart functionality, and animations.",
    tags: ["React", "Tailwind CSS", "Redux"],
    codeSnippet: `type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => 
        dispatch(addToCart(product))
      }>
        Add to Cart
      </button>
    </div>
  );
};`,
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Real-time weather application with location detection, forecasts, and interactive maps. Optimized for mobile devices.",
    tags: ["TypeScript", "Next.js", "API Integration"],
    codeSnippet: `// Fetch weather data based on geolocation
const getWeatherData = async (lat, lon) => {
  try {
    const response = await fetch(
      \`https://api.weather.com/v1/forecast?lat=\${lat}&lon=\${lon}\`
    );
    const data = await response.json();
    return processWeatherData(data);
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    return null;
  }
};`,
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative task management platform with real-time updates, drag-and-drop interfaces, and team collaboration features.",
    tags: ["React", "Firebase", "Styled Components"],
    codeSnippet: `// Handle task status updates with drag and drop
const onDragEnd = (result) => {
  const { destination, source, draggableId } = result;
  
  if (!destination) return;
  
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }
  
  // Update task status in Firebase
  updateTaskStatus(draggableId, destination.droppableId);
};`,
    liveUrl: "#",
    githubUrl: "#"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div 
      className={cn(
        "code-block transition-all duration-500",
        expanded ? "lg:col-span-2 row-span-2" : ""
      )}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="flex items-center mb-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="ml-3 text-foreground/60 text-sm font-mono">{project.title}.jsx</span>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 text-electric-purple">{project.title}</h3>
          <p className="text-foreground/70 text-sm mb-4">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="bg-muted px-2 py-1 rounded-full text-xs font-medium text-foreground/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <pre className={cn(
          "bg-dark font-mono text-sm p-4 rounded-md overflow-auto text-foreground/80 border border-border mb-4 transition-all",
          expanded ? "h-80" : "h-32"
        )}>
          <code>{project.codeSnippet}</code>
        </pre>
        
        <div className="mt-auto flex gap-4">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-electric-purple hover:text-deep-royal text-sm font-medium transition-colors"
          >
            {expanded ? "View Less" : "View More"}
          </button>
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground text-sm font-medium transition-colors"
            >
              Live Demo →
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground text-sm font-medium transition-colors"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-accent/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A collection of work that demonstrates my technical skills and creative problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
