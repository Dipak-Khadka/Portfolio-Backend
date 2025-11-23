// src/pages/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { createContact } from '../api/contact-api';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage(''); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare contact data - backend expects lowercase field names
      const contactData = {
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        message: formData.message
      };

      console.log('Submitting contact data:', contactData);

      // Submit to database
      const result = await createContact(contactData);

      console.log('Submit result:', result); // Debug

      // Check if submission was successful
      // Backend returns { message: "Contact created successfully!" }
      if (result.error) {
        setErrorMessage(result.error || 'Failed to send message. Please try again.');
        setIsSubmitting(false);
      } else if (result.message || !result.error) {
        // Success! Either has success message or no error
        console.log('Contact saved successfully:', result);
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
          });
        }, 3000);
      } else {
        setErrorMessage('Unexpected response from server');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('An error occurred. Please try again later.');
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'dipakkhadka0008@gmail.com',
      link: 'mailto:dipakkhadka0008@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (437) 455 6003',
      link: 'tel:+14374556003'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Toronto, Ontario, Canada',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <div className="page contact-page">
      <div className="container">
        <AnimatedSection>
          <h2 className="page-title">Get In Touch</h2>
          <p className="page-subtitle">
            Let's discuss your next project and bring your ideas to life
          </p>
        </AnimatedSection>

        <div className="contact-content">
          {/* Contact Info Panel */}
          <AnimatedSection delay={0.2} className="contact-info-panel">
            <h3>Contact Information</h3>
            <p>
              Feel free to reach out through any of these channels. I'm always excited to discuss new opportunities and projects.
            </p>

            <div className="contact-info-list">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-item"
                    whileHover={{ scale: 1.05, x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="contact-icon">
                      <Icon size={24} />
                    </div>
                    <div className="contact-details">
                      <h4>{info.title}</h4>
                      <p>{info.details}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              className="availability-status"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="status-indicator available"></div>
              <span>Currently available for new projects</span>
            </motion.div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.4} className="contact-form-section">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Send me a message</h3>

                {/* Error Message */}
                {errorMessage && (
                  <motion.div
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      padding: '12px',
                      backgroundColor: '#fee',
                      color: '#c00',
                      borderRadius: '8px',
                      marginBottom: '20px',
                      border: '1px solid #fcc'
                    }}
                  >
                    ⚠️ {errorMessage}
                  </motion.div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <motion.input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      whileFocus={{ scale: 1.02 }}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <motion.input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      whileFocus={{ scale: 1.02 }}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      whileFocus={{ scale: 1.02 }}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <motion.input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      whileFocus={{ scale: 1.02 }}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    required
                    whileFocus={{ scale: 1.02 }}
                    disabled={isSubmitting}
                  ></motion.textarea>
                </div>

                <motion.button
                  type="submit"
                  className="btn primary-btn submit-btn"
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  disabled={isSubmitting}
                  style={{ opacity: isSubmitting ? 0.6 : 1 }}
                >
                  <Send size={18} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            ) : (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="success-icon"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  ✅
                </motion.div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
                  ✓ Message saved to database
                </p>
                <motion.div
                  className="loading-bar"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 3 }}
                />
              </motion.div>
            )}
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
