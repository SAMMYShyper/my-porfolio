import { useState } from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// Sample projects - replace with your actual projects
const projectsData: Project[] = [
  {
    id: 1,
    title: "High-Performance Data Processor",
    description: "Built a multi-threaded C++ application for processing large datasets with 10x performance improvement over previous solution.",
    technologies: ["C++", "CMake", "Boost", "Threading"],
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Algorithm Visualizer",
    description: "Interactive web app visualizing sorting and graph algorithms. Built to learn web development fundamentals.",
    technologies: ["JavaScript", "React", "Canvas API"],
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://yourproject.com",
  },
  {
    id: 3,
    title: "Memory Management Library",
    description: "Custom memory allocator with pool-based allocation strategies, reducing fragmentation by 40%.",
    technologies: ["C++", "Memory Management", "Profiling"],
    githubUrl: "https://github.com/yourusername/project3",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');

  const allTechnologies = Array.from(
    new Set(projectsData.flatMap(p => p.technologies))
  );

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.technologies.includes(filter));

  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      
      <div className="filter-buttons">
        <button 
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        {allTechnologies.map(tech => (
          <button
            key={tech}
            className={filter === tech ? 'active' : ''}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className="technologies">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub →
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
