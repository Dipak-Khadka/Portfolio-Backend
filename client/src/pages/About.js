// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

// Import your assets
import DipakPhoto from '../assets/DipakKhadka.jpeg';
import DipakResume from '../assets/Dipak_Khadka.pdf';

const About = () => {
  return (
    <div className="page about-page">
      <div className="container">
        <AnimatedSection>
          <h2 className="page-title">About Me</h2>
        </AnimatedSection>
        
        <div className="about-content">
          <AnimatedSection delay={0.2} className="about-info">
            <div className="profile-section">
              <motion.div 
                className="profile-image"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Use imported image */}
                <img 
                  src={DipakPhoto}
                  alt="Dipak Khadka - Profile" 
                />
              </motion.div>
              
              <div className="profile-text">
                <h3>Dipak Khadka</h3>
                <p>
                  I'm a full-stack developer with 3+ years of experience working with JavaScript, React, C#, Java, and Python.
                  I enjoy building clean, maintainable code and creating web applications that are both functional
                  and user-friendly.
                </p>
                
                <p>
                  Beyond coding, I explore new technologies, contribute to open-source projects,
                  and enjoy tackling challenging problems that help me grow as a developer.
                </p>
                
                {/* Use imported PDF for download */}
                <motion.a
                  href={DipakResume}
                  className="btn primary-btn download-resume"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  download
                >
                  <Download size={18} />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4} className="skills-section">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {[
                'React', 'JavaScript', 'Node.js', 'Python', 
                'MongoDB', 'MySQL', 'Git', 'AWS', 'HTML5', 
                'CSS3', 'Express.js', 'Redux'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.6} className="social-links">
            <h3>Connect With Me</h3>
            <div className="social-buttons">
              <motion.a
                href="https://github.com"
                className="social-btn"
                whileHover={{ scale: 1.1, y: -3 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/dipak-khadka-567a70317/"
                className="social-btn"
                whileHover={{ scale: 1.1, y: -3 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default About;
