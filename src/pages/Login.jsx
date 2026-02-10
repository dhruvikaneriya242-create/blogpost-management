import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    alert("Login Successful ✅");
    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <h1 className="form-title">LOGIN</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>

      <p className="link-text">
        Don't have an account? <Link to="/">Register</Link>
      </p>
    </div>
  );
};

export default Login;
