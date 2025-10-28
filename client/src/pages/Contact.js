// // src/pages/Contact.js
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
// import AnimatedSection from '../components/AnimatedSection';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
  
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the form data to a server
//     console.log('Form Data:', formData);
//     setIsSubmitted(true);
    
//     // Reset form after 3 seconds and redirect to home
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         message: ''
//       });
//       // You could redirect to home page here if needed
//       // window.location.href = '/';
//     }, 3000);
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: "Email",
//       details: "dipakkhadka0008@gmail.com",
//       link: "mailto:dipakkhadka0008@gmail.com"
//     },
//     {
//       icon: Phone,
//       title: "Phone",
//       details: "+1 (437) 455 6003",
//       link: "tel:+1"
//     },
//     {
//       icon: MapPin,
//       title: "Location",
//       details: "Toronto, Ontario, Canada",
//       link: "https://maps.google.com"
//     }
//   ];

//   return (
//     <div className="page contact-page">
//       <div className="container">
//         <AnimatedSection>
//           <h2 className="page-title">Get In Touch</h2>
//           <p className="page-subtitle">Let's discuss your next project and bring your ideas to life</p>
//         </AnimatedSection>
        
//         <div className="contact-content">
//           {/* Contact Information Panel */}
//           <AnimatedSection delay={0.2} className="contact-info-panel">
//             <h3>Contact Information</h3>
//             <p>Feel free to reach out through any of these channels. I'm always excited to discuss new opportunities and projects.</p>
            
//             <div className="contact-info-list">
//               {contactInfo.map((info, index) => {
//                 const Icon = info.icon;
//                 return (
//                   <motion.a
//                     key={index}
//                     href={info.link}
//                     className="contact-info-item"
//                     whileHover={{ scale: 1.05, x: 10 }}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ type: "spring", stiffness: 300, delay: 0.4 + index * 0.1 }}
//                   >
//                     <div className="contact-icon">
//                       <Icon size={24} />
//                     </div>
//                     <div className="contact-details">
//                       <h4>{info.title}</h4>
//                       <p>{info.details}</p>
//                     </div>
//                   </motion.a>
//                 );
//               })}
//             </div>
            
//             {/* Availability Status */}
//             <motion.div
//               className="availability-status"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8 }}
//             >
//               <div className="status-indicator available"></div>
//               <span>Currently available for new projects</span>
//             </motion.div>
//           </AnimatedSection>
          
//           {/* Contact Form */}
//           <AnimatedSection delay={0.4} className="contact-form-section">
//             {!isSubmitted ? (
//               <form onSubmit={handleSubmit} className="contact-form">
//                 <h3>Send me a message</h3>
                
//                 <div className="form-row">
//                   <div className="form-group">
//                     <label htmlFor="firstName">First Name *</label>
//                     <motion.input
//                       type="text"
//                       id="firstName"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       required
//                       whileFocus={{ scale: 1.02 }}
//                     />
//                   </div>
                  
//                   <div className="form-group">
//                     <label htmlFor="lastName">Last Name *</label>
//                     <motion.input
//                       type="text"
//                       id="lastName"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       required
//                       whileFocus={{ scale: 1.02 }}
//                     />
//                   </div>
//                 </div>
                
//                 <div className="form-row">
//                   <div className="form-group">
//                     <label htmlFor="email">Email Address *</label>
//                     <motion.input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                       whileFocus={{ scale: 1.02 }}
//                     />
//                   </div>
                  
//                   <div className="form-group">
//                     <label htmlFor="phone">Phone Number</label>
//                     <motion.input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       whileFocus={{ scale: 1.02 }}
//                     />
//                   </div>
//                 </div>
                
//                 <div className="form-group">
//                   <label htmlFor="message">Message *</label>
//                   <motion.textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     rows="5"
//                     required
//                     whileFocus={{ scale: 1.02 }}
//                   ></motion.textarea>
//                 </div>
                
//                 <motion.button
//                   type="submit"
//                   className="btn primary-btn submit-btn"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Send size={18} />
//                   Send Message
//                 </motion.button>
//               </form>
//             ) : (
//               <motion.div
//                 className="success-message"
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <motion.div
//                   className="success-icon"
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 1 }}
//                 >
//                   ✅
//                 </motion.div>
//                 <h3>Message Sent Successfully!</h3>
//                 <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
//                 <motion.div
//                   className="loading-bar"
//                   initial={{ width: 0 }}
//                   animate={{ width: '100%' }}
//                   transition={{ duration: 3 }}
//                 />
//               </motion.div>
//             )}
//           </AnimatedSection>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// src/pages/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setIsSubmitted(true);

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
                  ></motion.textarea>
                </div>

                <motion.button
                  type="submit"
                  className="btn primary-btn submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={18} />
                  Send Message
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
