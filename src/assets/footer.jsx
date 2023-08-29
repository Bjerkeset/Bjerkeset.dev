import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="bg-gradient-divider h-0.5"></div>
      <footer className="bg-background-main p-8 ">
        <div className="flex flex-col gap-4 items-center">
          <ul className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-0">
            <li>
              <a href="#homepage" className=" text-gray-500 hover:underline">
                HOMEPAGE
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-gray-500 hover:underline">
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#about" className=" text-gray-500 hover:underline">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#contact" className=" text-gray-500 hover:underline">
                CONTACT
              </a>
            </li>
          </ul>
          <div className="flex gap-4">
            <a
              href="https://github.com/Bjerkeset/fed1-Portfolio-Bjerkeset"
              className="text-4xl text-gray-500 hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com/"
              className="text-4xl text-gray-500 hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
