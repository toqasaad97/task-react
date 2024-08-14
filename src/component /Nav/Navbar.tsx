import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="bg-[#2C3E50]">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="uppercase py-6 text-white text-3xl font-black">
            Start Framework
          </div>
          <div className="hidden md:flex gap-4 items-center text-white font-bold text-lg uppercase">
            <Link to="/about" className="text">About</Link>
            <Link to="/portfolio" className="text">Portfolio</Link>
            <Link to="/contact" className="text">Contact</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-[#2C3E50] text-white font-bold text-lg uppercase">
            <Link
              to="/about"
              className="block py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="block py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="block py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
