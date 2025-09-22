"use client";
import React from "react";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "50px", maxWidth: "400px", margin: "0 auto" }}>
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#000" }}>
          Create a new account
        </h2>
      </div>

      {/* Form */}
      <form action="#" method="POST" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* Full Name */}
        <div>
          <label htmlFor="name" style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#3b82f6" }}>
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter your full name"
            style={{ width: "100%", padding: "8px", fontSize: "14px", borderRadius: "4px", border: "1px solid #ccc", marginTop: "5px" }}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#3b82f6" }}>
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            style={{ width: "100%", padding: "8px", fontSize: "14px", borderRadius: "4px", border: "1px solid #ccc", marginTop: "5px" }}
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#3b82f6" }}>
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Create a password"
            style={{ width: "100%", padding: "8px", fontSize: "14px", borderRadius: "4px", border: "1px solid #ccc", marginTop: "5px" }}
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirm-password" style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#3b82f6" }}>
            Confirm Password
          </label>
          <input
            id="confirm-password"
            name="confirm-password"
            type="password"
            required
            placeholder="Re-enter your password"
            style={{ width: "100%", padding: "8px", fontSize: "14px", borderRadius: "4px", border: "1px solid #ccc", marginTop: "5px" }}
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            style={{ width: "100%", padding: "10px", fontSize: "14px", fontWeight: "600", color: "#fff", backgroundColor: "#6366f1", borderRadius: "4px", border: "none", cursor: "pointer" }}
          >
            Register
          </button>
        </div>
      </form>

      {/* Footer link */}
      <p style={{ textAlign: "center", fontSize: "14px", color: "#4b5563", marginTop: "30px" }}>
        Already have an account?{" "}
        <Link href="/login" style={{ fontWeight: "600", color: "#6366f1", textDecoration: "none" }}>
          Login here
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
