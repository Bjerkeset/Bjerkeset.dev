import React, { useState } from "react";
import "../App.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-background-main">
      <nav className="flex mx-4 py-4">
        <div className="ml-auto">
          <button onClick={toggleMenu} className="sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-gray-500 hover:text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <ul
            className={`hidden sm:flex gap-4 flex-row ${
              isOpen ? "flex flex-col mt-2" : ""
            }`}
          >
            <a
              className="text-stone-300 font-semibold hover:font-normal hover:underline underline-offset-4 transition-colors duration-500 ease-in-out"
              href="#homepage"
            >
              <li>HOMEPAGE</li>
            </a>
            <a
              className="text-stone-300 font-semibold hover:font-normal hover:underline underline-offset-4 transition-colors duration-500 ease-in-out"
              href="#portfolio"
            >
              <li>PORTFOLIO</li>
            </a>
            <a
              className="text-stone-300 font-semibold hover:font-normal hover:underline underline-offset-4 transition-colors duration-500 ease-in-out"
              href="#about"
            >
              <li>ABOUT</li>
            </a>
            <a
              className="text-stone-300 font-semibold hover:font-normal hover:underline underline-offset-4 transition-colors duration-500 ease-in-out"
              href="#contact"
            >
              <li>CONTACT</li>
            </a>
          </ul>
        </div>
      </nav>
      {isOpen && (
        <div className="px-4 pb-4 sm:hidden">
          <a href="#homepage" className=" text-white block py-2">
            HOMEPAGE
          </a>
          <a href="#portfolio" className="text-white block py-2">
            PORTFOLIO
          </a>
          <a href="#about" className="text-white block py-2">
            ABOUT
          </a>
          <a href="#contact" className="text-white block py-2">
            CONTACT
          </a>
        </div>
      )}
      <div className="bg-gradient-divider h-0.5"></div>
    </header>
  );
}

export default Navbar;
