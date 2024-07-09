import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent shadow-lg p-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex justify-around items-center">
        <div className="flex items-center">
          <img
            className="w-24 md:w-32"
            src="logo.png"
            alt="Company Logo"
          />
        </div>
        <div className="hidden sm:flex sm:space-x-8">
          <Link
            to="/"
            className="text-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium underline-animation"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium underline-animation"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium underline-animation"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="text-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium underline-animation"
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            className="text-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium underline-animation"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium underline-animation"
          >
            Contact
          </Link>
        </div>
        <div className="-mr-2 flex items-center sm:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium underline-animation"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium underline-animation"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium underline-animation"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium underline-animation"
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className="text-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium underline-animation"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-500 hover:text-white block px-3 py-2 rounded-md text-base underline-animation font-medium "
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
