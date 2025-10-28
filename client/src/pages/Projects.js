// src/pages/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

// Import images from assets folder
import BlueValvet from '../assets/blue.png';
import TaskManagerImage from '../assets/task.jpg';
import BugImage from '../assets/bug.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Blue Valvet Wellness",
      description: "A responsive e-commerce website built with vanilla HTML, CSS, and JavaScript. Features include product catalog, shopping cart functionality, form validation, and mobile-responsive design with smooth animations.",
      image: BlueValvet, // Use imported image instead of placeholder
      role: "Full-Stack Developer",
      outcome: "Created a fully functional e-commerce interface with smooth user interactions and responsive design across all devices",
      technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      githubLink: "https://dipak-khadka.github.io/Final_Project",
      liveLink: "http://studentweb.cencol.ca/dkhadka8/Final_Project/index.html"
    },
    {
      id: 2,
      title: "Student Information Management System",
      description: "An interactive student data management interface built with HTML, CSS, and JavaScript. Features dynamic content rendering, form validation, data filtering, and responsive table layouts for managing student records.",
      image: TaskManagerImage, // Use imported image instead of placeholder
      role: "Frontend Developer",
      outcome: "Developed an intuitive interface for managing student data with efficient DOM manipulation and user-friendly interactions",
      technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
      githubLink: "https://dipak-khadka.github.io/Assignment5/",
      liveLink: "http://studentweb.cencol.ca/dkhadka8/Assignment5/index.html"
    },
    {
      id: 3,
      title: "Bug Smasher Game",
      description: "An interactive browser-based game built with vanilla JavaScript, HTML5 Canvas, and CSS animations. Features collision detection, score tracking, responsive controls, and engaging visual effects for an entertaining user experience.",
      image: BugImage, // Use imported image instead of placeholder
      role: "Game Developer & UI Designer",
      outcome: "Created an engaging interactive game demonstrating advanced JavaScript programming and animation techniques",
      technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
      githubLink: "https://dipak-khadka.github.io/assignment-6_Dipak/",
      liveLink: "http://studentweb.cencol.ca/dkhadka8/assignment-6_Dipak/index.html"
    }
  ];

  return (
    <div className="page projects-page">
      <div className="container">
        <AnimatedSection>
          <h2 className="page-title">My Projects</h2>
          <p className="page-subtitle">Here are some of the projects I've worked on recently</p>
        </AnimatedSection>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.2} className="project-card">
              <motion.div
                className="project-card-inner"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a
                        href={project.githubLink}
                        className="project-link-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.liveLink}
                        className="project-link-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-details">
                    <div className="detail-item">
                      <strong>Role:</strong> {project.role}
                    </div>
                    <div className="detail-item">
                      <strong>Outcome:</strong> {project.outcome}
                    </div>
                  </div>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
