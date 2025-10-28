// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const Home = ({ setCurrentPage }) => {
  return (
    <div className="page home-page">
      <div className="container">
        <AnimatedSection className="hero-section">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            Welcome to My Portfolio
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Full Stack Developer & Creative Problem Solver
          </motion.p>
          
          <motion.div 
            className="mission-statement"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h3>My Mission</h3>
            <p>
              To create innovative, user-friendly web applications that solve real-world problems 
              and deliver exceptional user experiences through clean code and creative design.
            </p>
          </motion.div>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.button 
              className="btn primary-btn"
              onClick={() => setCurrentPage('about')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn About Me
            </motion.button>
            <motion.button 
              className="btn secondary-btn"
              onClick={() => setCurrentPage('projects')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
          </motion.div>
        </AnimatedSection>
        
        {/* Floating Animation Elements */}
        <div className="floating-elements">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-element"
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 2) * 40}%`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;