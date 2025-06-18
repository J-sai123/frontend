import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3002/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobileNumber, password }),
      });

      const data: { message: string } = await response.json();

      if (response.ok) {
        alert('Login successful');
        // Optional: Store token in localStorage/sessionStorage
        navigate('/dashboard');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      alert('Error during login');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>

      <div className="mb-4">
        <label className="block mb-1">Mobile Number</label>
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
