// src/pages/Signin.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import { signin } from '../api/auth-api';
import AnimatedSection from '../components/AnimatedSection';

const Signin = ({ setCurrentPage, setUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
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
  if (!formData.email || !formData.password) {
    setError('All fields are required');
    setLoading(false);
    return;
  }

  // Call signin API
  const result = await signin(formData);

  console.log('Signin result:', result); // Debug

  if (result.error) {
    setError(result.error);
    setLoading(false);
  } else {
    // SUCCESS! Store token and user data
    const jwt = { 
      token: result.token, 
      user: result.user 
    };
    
    // Save to localStorage
    localStorage.setItem('jwt', JSON.stringify(jwt));
    console.log('JWT saved to localStorage:', jwt); // Debug
    
    // Update user state in App.js
    setUser(result.user);
    
    // Redirect to home
    setCurrentPage('home');
  }
};


  return (
    <AnimatedSection>
      <div className="signin-container" style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.formWrapper}
        >
          <h1 style={styles.title}>Welcome Back</h1>
          <p style={styles.subtitle}>Sign in to access your portfolio</p>

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

          <form onSubmit={handleSubmit} style={styles.form}>
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
                placeholder="Enter your password"
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
              {loading ? 'Signing In...' : 'Sign In'}
            </motion.button>
          </form>

          {/* Link to Signup */}
          <div style={styles.bottomText}>
            Don't have an account?{' '}
            <button
              onClick={() => setCurrentPage('signup')}
              style={styles.linkButton}
            >
              Sign Up
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

export default Signin;
