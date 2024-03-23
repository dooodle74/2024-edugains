import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import pool from '@/lib/db';  

//index.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

  //pool is the database name
  // Use the `pool` object to query your database
  // Example: const result = await pool.query('SELECT * FROM your_table');


const IndexPage = () => {
  // Simulated authentication status (replace with your actual authentication logic)
  const isLoggedIn = true; // Assume user is logged in
  const isAdmin = true; // Assume user is an admin
  const [content, setContent] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Determine the content based on the user's role
    if (isLoggedIn) {
      if (isAdmin) {
        setContent(<UserContent />);
      } else {
        setContent(<InstructorContent />);
      }
    } else {
      // Redirect to login page if user is not logged in
      router.push('/login');
    }
  }, []);

  return (
    <div>
      <h1>Welcome to the Index Page</h1>
      {content}
    </div>
  );
};

// User-specific content component
const UserContent = () => {
  return <p>User-specific content goes here</p>;
};

// Instructor-specific content component
const InstructorContent = () => {
  return <p>Instructor-specific content goes here</p>;
};

// Login prompt component
const LoginPrompt = () => {
  return <p>Please log in to view content</p>;
};

export default IndexPage;