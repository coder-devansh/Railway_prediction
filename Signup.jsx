import React, { useState } from 'react';
import './Auth.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signing up with ${email}`);
  };

  return (
    <div className="auth-container">
      <h2>📝 Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
