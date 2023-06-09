import React from 'react';

const MobileNav = ({ isOpen, setIsOpen, navHeight }) => {
  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`lg:hidden bg-white z-50 fixed top-0 left-0 w-full font-medium shadow-md border-b-2 border-gray-700/20 px-1 text-lg transition-transform duration-500 transform ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{ paddingTop: `${navHeight}px` }}
    >
      <a
        href="#work"
        onClick={closeNav}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black hover:pl-6 transition-all duration-500"
      >
        My Work
      </a>
      <a
        href="#education"
        onClick={closeNav}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black hover:pl-6 transition-all duration-500"
      >
        Education
      </a>
      <a
        href="#about"
        onClick={closeNav}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black hover:pl-6 transition-all duration-500"
      >
        About
      </a>
      <a
        href="#contact"
        onClick={closeNav}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black hover:pl-6 transition-all duration-500"
      >
        Contact
      </a>
      <a
        href="/CV.pdf"
        onClick={closeNav}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black hover:pl-6 transition-all duration-500"
        download="Joonatan_Karhu_CV"
      >
        Download CV
      </a>
    </div>
  );
};

export default MobileNav;
