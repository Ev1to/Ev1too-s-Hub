import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter(entry => entry.isIntersecting);
        
        if (visibleSections.length > 0) {
          const mostVisible = visibleSections.reduce((max, section) => {
            return section.intersectionRatio > max.intersectionRatio ? section : max;
          }, visibleSections[0]);
          
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-80px 0px -80px 0px'
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { 
      href: 'https://github.com/Ev1to', 
      label: 'GitHub',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      )
    },
    { 
      href: 'https://discord.gg/Te9wejMVBb', 
      label: 'Join My Discord Server',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028z"/>
        </svg>
      )
    },
    { 
      href: 'https://x.com/ammar31291', 
      label: 'Twitter',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
  ];

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm border-b border-primary/20 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold relative group">
            <span className="text-primary glow-text">&lt;</span>
            <span className="text-gradient">Ev1to's Hub</span>
            <span className="text-primary glow-text">/&gt;</span>
            <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-lg group-hover:bg-primary/30 transition-all duration-500 -z-10"></div>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 transition-all duration-300 ${
                    activeSection === href.slice(1)
                      ? 'text-primary glow-text'
                      : 'text-foreground/70 hover:text-primary'
                  }`}
                >
                  {label}
                  {activeSection === href.slice(1) && (
                    <span className="absolute inset-0 bg-primary/10 rounded-lg blur-lg -z-10"></span>
                  )}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4 border-l border-primary/20 pl-8">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors relative group"
                  aria-label={label}
                >
                  {icon}
                  <span className="absolute -inset-2 bg-primary/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
    <div 
      className="absolute inset-0"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(120, 180, 255, 0.15) 0%, rgba(0, 0, 40, 0.2) 50%, transparent 100%)',
      }}
    ></div>
    <div className="container mx-auto px-4 text-center relative z-10">
      <div className="inline-block mb-4 px-6 py-2 border border-primary/20 rounded-full bg-accent/30 backdrop-blur-sm">
        <span className="text-primary glow-text">Available for Work</span>
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text">
        Ammar Yasser
      </h1>
      <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
        Frontend Developer Building beautiful web experiences with modern technologies
      </p>
      <div className="flex items-center justify-center space-x-4">
        <a 
          href="#contact"
          className="px-8 py-3 bg-primary/20 backdrop-blur-sm border border-primary/50 text-primary rounded-full hover:bg-primary/30 transition-all duration-300 glow-text"
        >
          Get in Touch
        </a>
        <a 
          href="#projects"
          className="px-8 py-3 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-full hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
        >
          View Projects
        </a>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-accent/30">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-foreground/80 mb-6">
        Hi, I'm Ammar Yasser, a 17-year-old front-end developer from Egypt. I started my coding journey in 2023 and quickly developed a passion for creating modern, responsive, and user-friendly web interfaces. My skill set includes HTML, CSS, Tailwind CSS, JavaScript, and React, and I use Git to manage and collaborate on projects efficiently.

While still in high school, I've already begun working as a freelancer, taking on real-world projects that challenge me to grow and improve. My goal is bold and clear: to build the biggest coding agency in Egypt — and eventually expand it onto the international stage.

Right now, I'm open to freelance opportunities and internships, always eager to collaborate, learn, and contribute to meaningful projects.


        </p>
        <p className="text-lg text-foreground/80">
        Let's build something great together.
        </p>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'UI Design', level: 85 },
    { name: 'Git', level: 90 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center glow-text">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="relative group">
              <div className="p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-primary glow-text">{skill.name}</h3>
                <div className="relative">
                  <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary/80 to-secondary/80 rounded-full relative"
                      style={{ width: `${skill.level}%` }}
                    >
                      {/* Animated glow effect */}
                      <div className="absolute inset-0 animate-pulse-slow bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"></div>
                      
                      {/* Scanner line effect */}
                      <div className="absolute top-0 bottom-0 w-[2px] bg-white/90 blur-[2px] animate-scanner-line"></div>
                      
                      {/* Glitch segments */}
                      <div className="absolute inset-0 animate-glitch-opacity">
                        <div className="absolute inset-0 bg-primary/30"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Percentage indicator */}
                  <span className="absolute -top-1 right-0 text-sm text-primary/80 transform -translate-y-full">
                    {skill.level}%
                  </span>
                </div>
              </div>
              {/* Background glow on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'LUXE',
      description: 'A modern e-commerce platform built with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://luxe-o.netlify.app/'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      tech: ['React', 'Firebase', 'Tailwind'],
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with modern design',
      tech: ['React', 'TypeScript', 'Tailwind'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-background p-6 rounded-lg border border-border hover:border-electric-purple transition-colors">
              <h3 className="text-xl font-semibold mb-3">
                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="text-foreground/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-accent rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center glow-text">Get in Touch</h2>
      <div className="flex flex-col items-center justify-center space-y-6 max-w-lg mx-auto">
        <a 
          href="https://github.com/Ev1to"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-primary mr-4">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          <span className="text-lg">GitHub</span>
          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-primary">@Ev1to →</span>
          </div>
        </a>

        <a 
          href="https://discord.gg/Te9wejMVBb"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-primary mr-4">
            <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028z"/>
          </svg>
          <span className="text-lg">Discord</span>
          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-primary">Join Server →</span>
          </div>
        </a>

        <a 
          href="https://x.com/ammar31291"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-primary mr-4">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span className="text-lg">Twitter</span>
          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-primary">@ammar31291 →</span>
          </div>
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 border-t border-primary/20">
    <div className="container mx-auto px-4 text-center text-foreground/70">
      <p>
        © 2025 <span className="text-primary glow-text">&lt;Ev1to/&gt;</span>. All rights reserved.
      </p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
