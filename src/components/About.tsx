
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type Skill = {
  name: string;
  level: number;
};

const skills: Skill[] = [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "UI/UX Design", level: 65 },
];

const timeline = [
  {
    year: "2023-Present",
    title: "Frontend Developer",
    company: "Tech Innovations Inc.",
    description: "Building responsive web applications using React and TypeScript. Implementing modern UI designs and optimizing performance."
  },
  {
    year: "2021-2023",
    title: "Web Developer Intern",
    company: "Digital Solutions Ltd.",
    description: "Assisted in developing web applications, gained hands-on experience with JavaScript frameworks."
  },
  {
    year: "2020-2021",
    title: "Computer Science Student",
    company: "University of Technology",
    description: "Focused on web development and software engineering principles. Created several personal projects."
  },
];

const About = () => {
  return (
    <section id="about" className="section bg-accent/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A passionate frontend developer with a keen eye for creating beautiful, functional websites
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">My Journey</h3>
            <p className="text-foreground/80">
              I'm a 23-year-old frontend developer with a passion for creating intuitive and dynamic user experiences. 
              I discovered my love for web development during college and have been honing my skills ever since.
            </p>
            <p className="text-foreground/80">
              With over 2 years of professional experience, I specialize in building responsive websites 
              and applications using modern JavaScript frameworks like React. I'm constantly learning and 
              experimenting with new technologies to stay at the forefront of web development.
            </p>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Experience Timeline</h3>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-electric-purple">
                    <span className="absolute left-[-8px] top-0 w-4 h-4 bg-electric-purple rounded-full" />
                    <p className="text-sm text-electric-purple font-medium">{item.year}</p>
                    <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                    <p className="text-foreground/60 text-sm">{item.company}</p>
                    <p className="mt-1 text-foreground/80 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gradient">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-foreground/60 text-sm">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
            
            <Card className="mt-10 bg-card/50 backdrop-blur-sm border-electric-purple/30">
              <CardContent className="p-6 space-y-4">
                <h4 className="font-semibold text-xl">Education</h4>
                <div>
                  <p className="font-medium">Bachelor of Science in Computer Science</p>
                  <p className="text-foreground/70 text-sm">University of Technology, 2018-2022</p>
                </div>
                
                <h4 className="font-semibold text-xl pt-4">Certifications</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-electric-purple rounded-full"></span>
                    <span>Advanced React Development (Meta)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-electric-purple rounded-full"></span>
                    <span>Responsive Web Design (freeCodeCamp)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-electric-purple rounded-full"></span>
                    <span>JavaScript Algorithms & Data Structures</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
