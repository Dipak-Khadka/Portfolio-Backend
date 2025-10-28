// src/pages/Services.js
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Database, Palette, ShoppingCart } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Vue, and Angular. Responsive design that works on all devices.",
      icon: Globe,
      features: ["Responsive Design", "Modern Frameworks", "SEO Optimized", "Fast Loading"],
      price: "Starting at $1,500"
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      icon: Smartphone,
      features: ["iOS & Android", "Cross-platform", "Native Performance", "App Store Ready"],
      price: "Starting at $2,500"
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Robust server-side solutions with APIs, databases, and cloud deployment. Scalable architecture for growing businesses.",
      icon: Database,
      features: ["RESTful APIs", "Database Design", "Cloud Deployment", "Security First"],
      price: "Starting at $2,000"
    },
    {
      id: 4,
      title: "Full-Stack Development",
      description: "Complete end-to-end solutions combining frontend and backend development for comprehensive web applications.",
      icon: Code,
      features: ["Frontend + Backend", "Database Integration", "User Authentication", "Payment Processing"],
      price: "Starting at $3,500"
    },
    {
      id: 5,
      title: "UI/UX Design",
      description: "User-centered design that creates engaging and intuitive experiences. Wireframing, prototyping, and visual design.",
      icon: Palette,
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      price: "Starting at $1,200"
    },
    {
      id: 6,
      title: "E-Commerce Solutions",
      description: "Complete online store solutions with payment processing, inventory management, and customer management systems.",
      icon: ShoppingCart,
      features: ["Online Store", "Payment Gateway", "Inventory System", "Customer Management"],
      price: "Starting at $3,000"
    }
  ];

  return (
    <div className="page services-page">
      <div className="container">
        <AnimatedSection>
          <h2 className="page-title">My Services</h2>
          <p className="page-subtitle">Comprehensive development solutions to bring your ideas to life</p>
        </AnimatedSection>
        
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.id} delay={index * 0.1} className="service-card">
                <motion.div
                  className="service-card-inner"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="service-header">
                    <motion.div 
                      className="service-icon"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon size={32} />
                    </motion.div>
                    <h3>{service.title}</h3>
                  </div>
                  
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 + featureIndex * 0.1 }}
                        >
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="service-footer">
                    <div className="service-price">{service.price}</div>
                    <motion.button
                      className="btn primary-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
        
        {/* Process Section */}
        <AnimatedSection delay={0.8} className="process-section">
          <h3 className="section-title">My Development Process</h3>
          <div className="process-steps">
            {[
              { step: 1, title: "Discovery", description: "Understanding your requirements and goals" },
              { step: 2, title: "Planning", description: "Creating detailed project roadmap and timeline" },
              { step: 3, title: "Design", description: "Wireframing and visual design creation" },
              { step: 4, title: "Development", description: "Coding and building your solution" },
              { step: 5, title: "Testing", description: "Quality assurance and bug fixing" },
              { step: 6, title: "Launch", description: "Deployment and go-live support" }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="process-step"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="step-number">{process.step}</div>
                <div className="step-content">
                  <h4>{process.title}</h4>
                  <p>{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Services;