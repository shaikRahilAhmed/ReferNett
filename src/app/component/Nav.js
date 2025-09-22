"use client";
import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Desktop menu */}
      <div className="hidden md:flex gap-6 items-center">
        <Link href="/" className="hover:text-primary transition">Home</Link>
        <Link href="/about" className="hover:text-primary transition">About</Link>
        <Link href="/features" className="hover:text-primary transition">Features</Link>
        <Link href="/contact" className="hover:text-primary transition">Contact</Link>
        <Link href="/getStarted">
          <button className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:scale-105 transition">
            Get Started
          </button>
        </Link>
      </div>

      {/* Mobile hamburger button */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <span className="font-bold text-lg"></span> 
        <button onClick={() => setOpen(!open)} className="text-2xl focus:outline-none">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile sidebar menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col p-6 gap-6 bg-gray-200">
          <Link href="/" className="hover:text-primary transition" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-primary transition" onClick={() => setOpen(false)}>About</Link>
          <Link href="/features" className="hover:text-primary transition" onClick={() => setOpen(false)}>Features</Link>
          <Link href="/contact" className="hover:text-primary transition" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/getStarted" onClick={() => setOpen(false)}>
            <button className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:scale-105 transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Nav;
