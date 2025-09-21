import React from 'react'

const Footer = () => {
  return (
     <footer className="mt-20 py-6 bg-gray-500 text-light text-center rounded-t-xl">
        <p className="text-sm">
          © {new Date().getFullYear()} ReferNet. All rights reserved.
        </p>
      </footer>
  )
}

export default Footer
