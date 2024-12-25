import React from "react";

function Header() {
  return (
    <header className="bg-transparent shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-white">
          <a href="#home" className="hover:text-gray-300 transition">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300 transition">
            About
          </a>
          <a href="#product" className="hover:text-gray-300 transition">
            Product
          </a>
          <a href="#contact" className="hover:text-gray-300 transition">
            Contact
          </a>
          <a href="/login" className="hover:text-gray-300 transition">
            Login
          </a>
        </nav>

        {/* Contact Details */}
        <div className="hidden lg:flex items-center space-x-4 text-white">
          <div className="flex items-center space-x-2">
            <span>📞</span>
            <p>+91 80816 38914</p>
          </div>
          <div className="flex items-center space-x-2">
            <span>📧</span>
            <p>contactus@vidyamint.com</p>
          </div>
        </div>

        {/* Book a Demo Button */}
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-medium transition">
            Book A Demo
          </button>
        </div>

        {/* Mobile Menu Button (Optional) */}
        <div className="md:hidden text-white">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
