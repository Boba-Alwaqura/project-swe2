import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function SignUp({ setUser, users, setUsers }) {
  const navigate = useNavigate();
  const [error, setError] = useState(""); 

  const handleSignUp = (e) => {
    e.preventDefault();
    
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

  
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      setError("You already have an account!");
      return;
    }

    
    const newUser = { fullName, email, password };
    setUsers([...users, newUser]); 
    setUser(newUser); 
    navigate("/");
  };

  return (
    <div className="auth-page">
      <form className="glass-card auth-card" onSubmit={handleSignUp}>
        <h1>Create Account</h1>
        <p>Join us and start your journey.</p>

        <div className="auth-input">
          <label>Full Name</label>
          <input type="text" name="fullName" placeholder="Enter your full name" required />
        </div>

        <div className="auth-input">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />
        </div>

        <div className="auth-input">
          <label>Password</label>
          <input type="password" name="password" placeholder="Create a password" required />
        </div>

        <div className="auth-input">
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" placeholder="Re-enter your password" required />
        </div>

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        <button type="submit" className="glow-btn auth-btn">Create Account</button>

        <p className="switch-text">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </form>
    </div>
  );
}
