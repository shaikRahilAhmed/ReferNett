import React from 'react'

const Nav = () => {
  return (
    <nav>
        <div className="flex gap-6 items-center">
            <a href="/" className="hover:text-primary transition">
            Home
          </a>
          <a href="/about" className="hover:text-primary transition">
            About
          </a>
          <a href="/features" className="hover:text-primary transition">
            Features
          </a>
          <a href="/contact" className="hover:text-primary transition">
            Contact
          </a>
          <a href='/getStarted'>
          <button className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:scale-105 transition">
            Get Started
          </button></a>
        </div>
    </nav>

    
  )
}

export default Nav
