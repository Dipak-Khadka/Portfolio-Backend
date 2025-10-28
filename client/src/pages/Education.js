
// // src/pages/Education.js
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Calendar, MapPin, Award } from 'lucide-react';
// import AnimatedSection from '../components/AnimatedSection';

// const Education = () => {
//   const educationData = [
//     {
//       id: 1,
//       degree: "Software Engineering Technician",
//       institution: "Centennial College",
//       location: "Toronto, ON",
//       startDate: "2025(Jan)",
//       endDate: "2026(Apr)",
//       gpa: "3.96/4.5",
//       achievements: [
//         "Top-performing student with consistent academic excellence",
//         "Led impactful software projects",
//         "Member of the Computer Science Club"
//       ]
//     },
//     {
//       id: 2,
//       degree: "High School- Major in Computer Science",
//       institution: "NIST College",
//       location: "Banepa, Nepal",
//       startDate: "2021",
//       endDate: "2023",
//       gpa: "3.64/4.0",
//       achievements: [
//         "President of the College",
//         "Winner of Multiple Hackathons",
//         "Graduated at the Top of the Program"
//       ]
//     }
//   ];

//   const certifications = [
//     {
//       id: 1,
//       name: "AWS Certified Developer Associate",
//       issuer: "Amazon Web Services",
//       date: "2023",
//       credentialId: "AWS-ASA-88954"
//     },
//     {
//       id: 2,
//       name: "React Developer Certification",
//       issuer: "Meta",
//       date: "2023",
//       credentialId: "META-REACT-20018"
//     },
//     {
//       id: 3,
//       name: "Google Analytics Certified",
//       issuer: "Google",
//       date: "2022",
//       credentialId: "GOOGLE-GA-589745"
//     }
//   ];

//   return (
//     <div className="page education-page">
//       <div className="container">
//         <AnimatedSection>
//           <h2 className="page-title">Education & Qualifications</h2>
//           <p className="page-subtitle">My academic background and professional certifications</p>
//         </AnimatedSection>

//         {/* Education Section */}
//         <AnimatedSection delay={0.2} className="education-section">
//           <h3 className="section-title">Education</h3>
//           <div className="education-timeline">
//             {educationData.map((edu, index) => (
//               <motion.div
//                 key={edu.id}
//                 className="timeline-item"
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.4 + index * 0.2 }}
//                 whileHover={{ scale: 1.02, y: -5 }}
//               >
//                 <div className="timeline-marker"></div>
//                 <div className="timeline-content">
//                   <div className="education-header">
//                     <h4>{edu.degree}</h4>
//                     <div className="education-meta">
//                       <span className="institution">{edu.institution}</span>
//                       <span className="location">
//                         <MapPin size={16} />
//                         {edu.location}
//                       </span>
//                       <span className="date">
//                         <Calendar size={16} />
//                         {edu.startDate} - {edu.endDate}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="gpa">
//                     <strong>GPA: {edu.gpa}</strong>
//                   </div>

//                   <div className="achievements">
//                     <h5>Key Achievements:</h5>
//                     <ul>
//                       {edu.achievements.map((achievement, achIndex) => (
//                         <li key={achIndex}>{achievement}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </AnimatedSection>

//         {/* Certifications Section */}
//         <AnimatedSection delay={0.6} className="certifications-section">
//           <h3 className="section-title">Professional Certifications</h3>
//           <div className="certifications-grid">
//             {certifications.map((cert, index) => (
//               <motion.div
//                 key={cert.id}
//                 className="certification-card"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8 + index * 0.1 }}
//                 whileHover={{ scale: 1.05, y: -5 }}
//               >
//                 <div className="cert-icon">
//                   <Award size={32} />
//                 </div>
//                 <div className="cert-content">
//                   <h4>{cert.name}</h4>
//                   <p className="cert-issuer">{cert.issuer}</p>
//                   <div className="cert-details">
//                     <span className="cert-date">
//                       <Calendar size={14} />
//                       {cert.date}
//                     </span>
//                     <span className="credential-id">
//                       ID: {cert.credentialId}
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </AnimatedSection>

//         {/* Skills Acquired Section */}
//         <AnimatedSection delay={1.0} className="skills-acquired-section">
//           <h3 className="section-title">Key Skills & Technologies</h3>
//           <div className="key-skills-grid">
//             <div className="skill-block">
//               Programming Languages
//               {['JavaScript', 'Python', 'Java', 'C++', 'TypeScript'].map((skill, index) => (
//                 <motion.span
//                   key={skill}
//                   className="skill-tag"
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 1.2 + index * 0.1 }}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   {skill}
//                 </motion.span>
//               ))}
//             </div>
//             <div className="skill-block">
//               Frameworks & Libraries
//               {['React', 'Node.js', 'Express', 'Django', 'Spring Boot'].map((skill, index) => (
//                 <motion.span
//                   key={skill}
//                   className="tech-tag"
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 1.4 + index * 0.1 }}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   {skill}
//                 </motion.span>
//               ))}
//             </div>
//             <div className="skill-block">
//               Tools & Technologies
//               {['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL'].map((skill, index) => (
//                 <motion.span
//                   key={skill}
//                   className="tech-tag"
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 1.6 + index * 0.1 }}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   {skill}
//                 </motion.span>
//               ))}
//             </div>
//           </div>
//         </AnimatedSection>
//       </div>
//     </div>
//   );
// };

// export default Education;


// src/pages/Education.js
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Software Engineering Technician",
      institution: "Centennial College",
      location: "Toronto, ON",
      startDate: "2025(Jan)",
      endDate: "2026(Apr)",
      gpa: "3.96/4.5",
      achievements: [
        "Top-performing student with consistent academic excellence",
        "Led impactful software projects",
        "Member of the Computer Science Club"
      ]
    },
    {
      id: 2,
      degree: "High School- Major in Computer Science",
      institution: "NIST College",
      location: "Banepa, Nepal",
      startDate: "2021",
      endDate: "2023",
      gpa: "3.64/4.0",
      achievements: [
        "President of the College",
        "Winner of Multiple Hackathons",
        "Graduated at the Top of the Program"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-ASA-88954"
    },
    {
      id: 2,
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      credentialId: "META-REACT-20018"
    },
    {
      id: 3,
      name: "Google Analytics Certified",
      issuer: "Google",
      date: "2022",
      credentialId: "GOOGLE-GA-589745"
    }
  ];

  return (
    <div className="page education-page">
      <div className="container">
        <AnimatedSection>
          <h2 className="page-title">Education & Qualifications</h2>
          <p className="page-subtitle">My academic background and professional certifications</p>
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection delay={0.2} className="education-section">
          <h3 className="section-title">Education</h3>
          <div className="education-timeline">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="education-header">
                    <h4>{edu.degree}</h4>
                    <div className="education-meta">
                      <span className="institution">{edu.institution}</span>
                      <span className="location">
                        <MapPin size={16} />
                        {edu.location}
                      </span>
                      <span className="date">
                        <Calendar size={16} />
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                  </div>

                  <div className="gpa">
                    <strong>GPA: {edu.gpa}</strong>
                  </div>

                  <div className="achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Certifications Section */}
        <AnimatedSection delay={0.6} className="certifications-section">
          <h3 className="section-title">Professional Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="certificate-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="certificate-icon">
                  <Award size={32} />
                </div>
                <div className="certificate-content">
                  <h4 className="certificate-title">{cert.name}</h4>
                  <p className="certificate-org">{cert.issuer}</p>
                  <div className="certificate-details">
                    <span className="certificate-date">
                      <Calendar size={14} />
                      {cert.date}
                    </span>
                    <span className="credential-id">
                      ID: {cert.credentialId}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* FIXED: Key Skills & Technologies Section */}
        <AnimatedSection delay={1.0} className="key-skills">
          <h3 className="key-skills-title">Key Skills & Technologies</h3>
          <div className="key-skills-grid">
            <motion.div
              className="skill-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <h4>Programming</h4>
              <div className="skill-tags">
                {['JavaScript', 'Python', 'Java', 'C++', 'TypeScript'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="skill-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <h4>Frameworks & Libraries</h4>
              <div className="skill-tags">
                {['React', 'Node.js', 'Express', 'Django', 'Spring Boot'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="skill-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <h4>Tools & Technologies</h4>
              <div className="skill-tags">
                {['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Education;
