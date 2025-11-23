// src/api/contact-api.js

const API_URL = 'http://localhost:5000';

// Create a new contact message
const createContact = async (contactData) => {
  try {
    console.log('Sending contact data:', contactData); // Debug
    
    const response = await fetch(`${API_URL}/api/contacts`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactData)
    });
    
    console.log('Response status:', response.status); // Debug
    
    const data = await response.json();
    console.log('Response data:', data); // Debug
    
    // Check if response was successful (status 200-299)
    if (!response.ok) {
      return { error: data.error || 'Failed to send message' };
    }
    
    return data;
  } catch (err) {
    console.error('Contact submission error:', err);
    return { error: 'Could not submit contact form' };
  }
};

// Get all contacts (for admin use)
const listContacts = async () => {
  try {
    const response = await fetch(`${API_URL}/api/contacts`, {
      method: 'GET'
    });
    return await response.json();
  } catch (err) {
    console.log(err);
    return { error: 'Could not fetch contacts' };
  }
};

export { createContact, listContacts };
