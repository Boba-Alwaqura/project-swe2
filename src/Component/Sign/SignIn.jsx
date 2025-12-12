import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function SignIn({ setUser, users }) {
  const navigate = useNavigate();
  const [error, setError] = useState(""); // الحالة للرسالة

  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // تحقق من وجود المستخدم في users
    const existing = users.find(u => u.email === email && u.password === password);

    if (existing) {
      setUser(existing); // نخزن المستخدم الحالي
      navigate("/"); // نروح مباشرة للLanding
    } else {
      setError("Invalid email or password!"); // نعرض رسالة خطأ
    }
  };

  return (
    <div className="auth-page">
      <form className="glass-card auth-card" onSubmit={handleSignIn}>
        <h1>Sign In</h1>
        <p>Welcome back! Please sign in to continue.</p>

        <div className="auth-input">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />
        </div>

        <div className="auth-input">
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter your password" required />
        </div>
        
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        <button type="submit" className="glow-btn auth-btn">Sign In</button>

        <p className="switch-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
}
