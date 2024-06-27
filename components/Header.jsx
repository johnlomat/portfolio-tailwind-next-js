import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Assuming md breakpoint is 768px (adjust as per your Tailwind CSS config)
        setIsMenuOpen(false); // Close the menu if screen size is md or larger
        document.body.style.overflow = "unset"; // Restore body scroll
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  useEffect(() => {
    if (isMenuOpen) {
      // Body scroll lock
      document.body.style.overflow = "hidden";
    } else {
      // Restore body scroll
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header className="static z-10 w-full bg-[#969696] py-4 md:absolute xl:bg-transparent">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex w-full max-w-[4.375rem] items-center md:w-auto md:max-w-full">
          <Link href="/" className="text-xl text-white">
            <Image
              src="/images/john-logo.svg"
              alt="John Lomat logo"
              width={100}
              height={62}
              className="brightness-[100] md:brightness-0"
            />
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
            onClick={toggleMenu}
          ></div>
        )}

        <NavMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
};

export default Header;
