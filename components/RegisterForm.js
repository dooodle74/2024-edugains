import { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter hook

import User from '@/models/User'; // Import the User model

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isinstructor, setIsInstructor] = useState(false); // Default to false
  const [error, setError] = useState(null); // State to hold error message
  const router = useRouter(); // Initialize useRouter hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = new User(isinstructor, username, password);

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
        router.push('/login'); // Redirect to /login route
      } else {
        // Display error message if registration fails
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if present */}
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
            checked={isinstructor}
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