import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import{toast}from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  // state section
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // form validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Register Data:", formData);
      alert("Registered successfully 🎉");

      // clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });

      // redirect to login page
      navigate("/login");
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Create Account</h1>
      <p>join us and start your journey</p>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your full name"
            onChange={handleInputChange}
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleInputChange}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            placeholder="Enter your phone number"
            onChange={handleInputChange}
          />
          {errors.phone && <span className="error-msg">{errors.phone}</span>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Create a password"
            onChange={handleInputChange}
          />
          {errors.password && (
            <span className="error-msg">{errors.password}</span>
          )}
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Re-enter your password"
            onChange={handleInputChange}
          />
          {errors.confirmPassword && (
            <span className="error-msg">{errors.confirmPassword}</span>
          )}
        </div>

        <button type="submit" className="btn-primary">
          Register
        </button>
      </form>

      <p className="link-text">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
