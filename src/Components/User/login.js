import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import SignUpPage from "./signup";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      // Fetch user data from the JSON file
      const response = await fetch("/database/user.js");
      const users = await response.json();

      // Find the user with the matching email
      const user = users.find((user) => user.email === email);

      if (user) {
        // Check if the password matches
        if (user.password === password) {
          setError("Login successful!");
        } else {
          setError("Incorrect password.");
        }
      } else {
        setError("User not found.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "linen",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 12px 12px 12px 12px rgba(0, 0.1, 0.1, 0.1)",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "1.5rem", color: "#333" }}>Login</h2>
        {error && (
          <p
            style={{
              color: error.includes("success") ? "green" : "red",
              marginBottom: "1rem",
            }}
          >
            {error}
          </p>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "1.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "0.75rem",
            backgroundColor: "#27143e",
            color: "bisque",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Login
        </button>
        <p style={{ color: "#666", fontSize: "0.875rem" }}>
          Don't have an account?{" "}
          <Link
            to="/signup" // Use the "to" prop to specify the route
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;