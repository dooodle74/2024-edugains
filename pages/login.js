//login.js
import { useRouter } from 'next/router';
const LoginPage = () => {
  const router = useRouter();
  // Simulated login logic (replace with actual login logic)
  const handleLogin = () => {
    // Simulated successful login
    // Replace '/user' or '/admin' with the appropriate route
    router.push('/'); // Redirect to index page after login
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;