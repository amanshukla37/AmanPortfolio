import React from "react";
import "./Projects.css";
import chessIcon from "../../assets/chess_icon.jpeg";
import weatherApp from "../../assets/weather-app-screens-vector-removebg-preview.png";
import chatApp from "../../assets/chat-app-logo-icon-removebg-preview.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Connectify",
      description:
        "A responsive real-time chat app built with React.js, Socket.io, and Node.js. Facilitates seamless communication with dynamic rooms.",
      imageUrl: chatApp,
      repoUrl: "https://github.com/username/connectify",
      techStack: ["React.js", "Node.js", "Socket.io"],
    },
    {
      id: 3,
      title: "ChessMaster",
      description:
        "Challenge your mind with an interactive chess game suitable for all skill levels. Built with HTML and CSS, it features engaging gameplay.",
      imageUrl: chessIcon,
      repoUrl: "https://github.com/username/chessmaster",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "Weather Insights",
      description:
        "Stay updated with real-time weather updates and forecasts based on your location. Built with JavaScript, it provides a seamless UI.",
      imageUrl: weatherApp,
      repoUrl: "https://github.com/username/weather-insights",
      techStack: ["JavaScript", "API", "CSS"],
    },
  ];

  return (
    <section id="projects" className="project-section">
      <h2 className="section-title">Highlighted Projects</h2>
      <div className="projects-wrapper">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <li key={index} className="tech-item">
                    {tech}
                  </li>
                ))}
              </ul>
              {/* <div className="project-links">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link repo-link">GitHub Repo</a>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
