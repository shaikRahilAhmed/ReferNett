"use client";
import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <div className="flex gap-6 items-center">
        <Link href="/" className="hover:text-primary transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-primary transition">
          About
        </Link>
        <Link href="/features" className="hover:text-primary transition">
          Features
        </Link>
        <Link href="/contact" className="hover:text-primary transition">
          Contact
        </Link>
        <Link href="/getStarted">
          <button className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:scale-105 transition">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
