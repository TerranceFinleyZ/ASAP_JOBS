import React, { useState } from 'react';

// Main App component that renders the Navbar
export default function App() {
  return (
    <div className="fixed w-full z-50 top-0">
      <Navbar />
    </div>
  );
}

// Navbar component definition
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-custom-blue shadow-lg rounded-b-lg p-4 md:p-6  top-0 z-50">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
      {/* Logo Holder */}
      <div className="flex-shrink-0 mr-6">
        <a href="#" className="text-4xl font-bold transition-colors duration-300 relative inline-block">
          {/*
            The parent <a> tag is set to relative and inline-block to contain the absolutely
            positioned children correctly and allow text flow around it.
          */}
          {/* ASAP in the background */}
          <span
            className="text-white italic absolute top-0 left-0 z-10"
            style={{ fontSize: '1.2em' }} // Make ASAP slightly larger to be a background
          >
            ASAP
          </span>
          {/* JOBS in the foreground, overlapping and below ASAP */}
          <span
            className="text-pink-400 italic absolute left-0 z-20"
            style={{
              textShadow: '0 0 18px rgba(216, 64, 140, 1.7), 0 0 15px rgba(211, 88, 149, 1.4)', // Added glow effect
              fontSize: '0.8em', // Make JOBS larger to be foreground
              top: '0.7em', // Adjust this value to control how much JOBS is below ASAP
              left: '2.3em' // Adjust this value to control horizontal overlap
            }}
          >
            JOBS
          </span>
          {/*
            A placeholder span or div is needed to ensure the parent <a> tag
            has a height and width that accommodates both absolutely positioned elements.
            We'll make it invisible.
          */}
          <span className="invisible opacity-0" style={{ fontSize: '1.2em', lineHeight: '1.5em' }}>
            ASAP JOBS {/* This span helps define the overall size of the container */}
          </span>
        </a>
      </div>
    

        {/* Mobile menu button */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 transition-colors duration-300"
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links and Sign In Button - Desktop */}
        <div className="hidden md:flex items-center space-x-6 text-2xl">
          <NavLink href="#Hero">Home</NavLink>
          <NavLink href="#Req">Req</NavLink>
          <NavLink href="#Sims">Sims</NavLink>
          <SignInButton />
        </div>

        {/* Mobile Menu - Toggles based on isOpen state */}
        <div
          className={`w-full md:hidden mt-4 transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-3 p-4 bg-pink-600 rounded-lg shadow-inner">
            <NavLink href="#Hero">Home</NavLink>
            <NavLink href="#Req">Req</NavLink>
            <NavLink href="#Sims">Sims</NavLink>
            <SignInButton isMobile={true} />
          </div>
        </div>
      </div>
    </nav>
  );
};

// NavLink component for consistent styling
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={(href)}
    className="text-white hover:text-pink-600 font-medium py-2 px-3 rounded-md transition-colors duration-300"
  >
    {children}
  </a>
);

// SignInButton component for consistent styling
interface SignInButtonProps {
  isMobile?: boolean;
}

const SignInButton: React.FC<SignInButtonProps> = ({ isMobile = false }) => (
  <a href='https://app.hubspot.com/login?/'>
    <button
    className={`
      ${isMobile ? 'w-full' : ''}
      bg-[#ff66ff] hover:bg-red-600
      text-white font-semibold py-2 px-5
      rounded-full shadow-md
      transition-all duration-300 ease-in-out
      transform hover:scale-105
      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75
    `}
   
  >
    Sign-In
  </button>
  </a>
);
