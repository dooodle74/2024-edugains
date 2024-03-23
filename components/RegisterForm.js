// components/RegisterForm.js
import { useState } from 'react';
import User from '../models/User'; // Import the User model

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isInstructor, setIsInstructor] = useState(false); // Default to false

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = new User(isInstructor, username, password);
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      
      if (response.ok) {
        // Redirect to login page after successful registration
        router.push('/login');
      } else {
        throw new Error('Failed to register user');
      }
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isInstructor}
            onChange={(e) => setIsInstructor(e.target.checked)}
          />
          Instructor
        </label>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;