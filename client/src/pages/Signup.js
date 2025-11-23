// src/pages/Signup.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, AlertCircle, CheckCircle } from 'lucide-react';
import { signup } from '../api/auth-api';
import AnimatedSection from '../components/AnimatedSection';

const Signup = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    // Call signup API
    const result = await signup(formData);

    if (result.error) {
      setError(result.error);
      setLoading(false);
    } else {
      setSuccess(true);
      setFormData({ name: '', email: '', password: '' });
      
      // Redirect to signin after 2 seconds
      setTimeout(() => {
        setCurrentPage('signin');
      }, 2000);
    }
  };

  return (
    <AnimatedSection>
      <div className="signup-container" style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.formWrapper}
        >
          <h1 style={styles.title}>Create Account</h1>
          <p style={styles.subtitle}>Join us and build your portfolio</p>

          {error && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={styles.errorBox}
            >
              <AlertCircle size={20} />
              <span>{error}</span>
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={styles.successBox}
            >
              <CheckCircle size={20} />
              <span>Signup successful! Redirecting to signin...</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Name Field */}
            <div style={styles.formGroup}>
              <label style={styles.label}>
                <User size={18} />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                style={styles.input}
              />
            </div>

            {/* Email Field */}
            <div style={styles.formGroup}>
              <label style={styles.label}>
                <Mail size={18} />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                style={styles.input}
              />
            </div>

            {/* Password Field */}
            <div style={styles.formGroup}>
              <label style={styles.label}>
                <Lock size={18} />
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="At least 6 characters"
                style={styles.input}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                ...styles.button,
                opacity: loading ? 0.6 : 1,
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </motion.button>
          </form>

          {/* Link to Signin */}
          <div style={styles.bottomText}>
            Already have an account?{' '}
            <button
              onClick={() => setCurrentPage('signin')}
              style={styles.linkButton}
            >
              Sign In
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  formWrapper: {
    background: 'white',
    borderRadius: '15px',
    padding: '40px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
    maxWidth: '500px',
    width: '100%',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '14px',
    color: '#666',
    textAlign: 'center',
    marginBottom: '30px',
  },
  errorBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 15px',
    background: '#fee',
    border: '1px solid #fcc',
    borderRadius: '8px',
    color: '#c33',
    marginBottom: '20px',
    fontSize: '14px',
  },
  successBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 15px',
    background: '#efe',
    border: '1px solid #cfc',
    borderRadius: '8px',
    color: '#3c3',
    marginBottom: '20px',
    fontSize: '14px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
  },
  input: {
    padding: '12px 15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '14px',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
    outline: 'none',
  },
  button: {
    padding: '12px 20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '10px',
  },
  bottomText: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#666',
    marginTop: '20px',
  },
  linkButton: {
    background: 'none',
    border: 'none',
    color: '#667eea',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: '14px',
  },
};

export default Signup;
