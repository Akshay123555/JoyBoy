import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: 'Alex Summers',
    email: 'alex@example.com',
    avatar: 'https://source.unsplash.com/100x100/?avatar'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Profile updated:', formData);
    
    // Navigate to the home page with a success message
    navigate('/');
  };

  return (
    <section className="section">
      <h2>👤 Edit Profile</h2>
      <div className="summary-card">
        <div className="avatar-preview">
          <img src={formData.avatar} alt="Profile" />
        </div>
        <form id="profileForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            required 
          />

          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            required 
          />

          <label htmlFor="avatar">Avatar URL:</label>
          <input 
            type="text" 
            id="avatar" 
            name="avatar" 
            value={formData.avatar} 
            onChange={handleChange}
          />

          <button type="submit">Update Profile</button>
        </form>
      </div>
    </section>
  );
}

export default Profile; 