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

const projectsData: Project[] = [
  {
    id: 1,
    title: "Titanic ML",
    description: "A Kaggle survival model focused on data cleaning, feature engineering, model selection, and clear analysis with Python.",
    technologies: ["Python", "Pandas", "scikit-learn", "NumPy", "Matplotlib", "Seaborn", "Machine Learning", "Data Analysis"],
    githubUrl: "https://github.com/SammysHyper/titanic_machine_learning",
  },
  {
    id: 2,
    title: "Orbit - Discord Bot",
    description: "A collaborative Discord assistant that centralizes prompts and responses so groups can make decisions faster in one shared channel.",
    technologies: ["Python", "Discord API", "OpenAI API"],
    githubUrl: "https://github.com/SammysHyper/sam_discord_bot",
    liveUrl: "",
  },
  {
    id: 3,
    title: "Ribbit - Autonomous Robot",
    description: "A 3D-printed autonomous frog robot with ultrasonic sensing, Arduino control logic, and a public STEM demo for younger students.",
    technologies: ["C++", "Arduino", "Ultrasonic Sensors", "3D Printing"],
    liveUrl: "https://youtu.be/OMRBRlsXD_Q?si=KGbRw5iiSUkhO-XG",
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
      <p className="section-kicker">Projects</p>
      <div className="projects-heading">
        <h2>Small builds, useful constraints.</h2>
        <p>Software, data, and hardware projects that kept the links intact and the scope honest.</p>
      </div>

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
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Video
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
