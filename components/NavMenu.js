// components/NavMenu.js
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const NavMenu = ({ isMenuOpen, toggleMenu }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile based on screen width
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Listen to resize events to update isMobile state
  useEffect(() => {
    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      toggleMenu(); // Close the menu on mobile screens
    }
  };

  // Smooth scroll to anchor links and update URL hash
  const handleSmoothScroll = (e, target) => {
    e.preventDefault();

    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Update the URL hash
    window.history.pushState(null, null, `#${target}`);

    handleClick(); // Close the menu after clicking
  };

  return (
    <div className={`${isMenuOpen ? "block" : "hidden"} md:block absolute md:relative top-4 md:top-0 right-4 md:right-0 w-[90%] md:w-auto max-w-[18.75rem] md:max-w-full z-20`}>
      <button onClick={toggleMenu} className="text-slate-500 hover:text-slate-600 focus:outline-none md:hidden absolute top-4 right-4 w-8 h-8 flex items-center justify-center">
        <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
      </button>
      <ul className="md:flex space-y-4 md:space-y-0 space-x-0 md:space-x-12 2xl:space-x-20 font-montserrat rounded-lg md:rounded-none shadow-lg md:shadow-none bg-white md:bg-transparent md:flex-row flex-col items-center p-6 md:p-0">
        <li>
          <a href="#about-me" onClick={(e) => handleSmoothScroll(e, "about-me")} className="cursor-pointer text-[#212121] md:text-white hover:text-gray-300 font-bold">
            About me
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => handleSmoothScroll(e, "skills")} className="cursor-pointer text-[#212121] md:text-white hover:text-gray-300 font-bold">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleSmoothScroll(e, "projects")} className="cursor-pointer text-[#212121] md:text-white hover:text-gray-300 font-bold">
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact-me"
            onClick={(e) => handleSmoothScroll(e, "contact-me")}
            className="cursor-pointer bg-none md:bg-white text-[#212121] md:text-black md:hover:bg-black md:hover:text-white md:rounded-full md:py-3 md:px-4 font-bold md:uppercase"
          >
            Contact me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
