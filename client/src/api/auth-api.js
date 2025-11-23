// src/api/auth-api.js

const API_URL = 'http://localhost:5000';

// Signup - Register new user
const signup = async (user) => {
  try {
    const response = await fetch(`${API_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Signup error:', err);
    return { error: 'Could not sign up' };
  }
};

// Signin - Login user
const signin = async (user) => {
  try {
    console.log('Attempting signin with:', user); // Debug log
    
    const response = await fetch(`${API_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    
    console.log('Response status:', response.status); // Debug log
    
    const data = await response.json();
    console.log('Response data:', data); // Debug log
    
    return data;
  } catch (err) {
    console.error('Signin error:', err);
    return { error: 'Could not sign in' };
  }
};

// Signout - Logout user
const signout = async () => {
  try {
    const response = await fetch(`${API_URL}/auth/signout`, {
      method: 'GET'
    });
    return await response.json();
  } catch (err) {
    console.log(err);
    return { error: 'Could not sign out' };
  }
};

export { signup, signin, signout };
