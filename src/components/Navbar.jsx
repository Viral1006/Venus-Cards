// import React, { useState } from 'react';
// import ContactModal from './ContactModal'; 

// const Navbar = () => {
//   // State to manage menu visibility
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Function to toggle menu visibility
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleContactClick = () => {
//     setIsModalOpen(true);
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <a href="#" className="text-white font-medium font-barlow-condensed text-2xl tracking-wide">Venus Computers</a>
//         </div>
//         {/* Desktop and tablet menu items */}
//         <div className="hidden md:flex md:items-center md:justify-center flex-1">
//           <a href="#" className="text-white hover:bg-gray-700 px-5 py-2 rounded-md">Home</a>
//           <a href="#" className="text-white hover:bg-gray-700 px-5 py-2 rounded-md">About</a>
//           <a href="#" className="text-white hover:bg-gray-700 px-5 py-2 rounded-md">Services</a>
//         </div>
//         {/* Contact Us */}
//         {/* <div>
//           <a href="#" className="text-white hover:bg-gray-700 px-5 py-2 rounded-[20px] border border-white">Contact Us</a>
//         </div> */}
//         <div>
//         <button className="text-white hover:bg-gray-700 px-5 py-2 rounded-[20px] border border-white" onClick={handleContactClick}>
//           Contact Us
//         </button>
//       </div>
//       <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//         {/* Responsive menu button */}
//         <div className="md:hidden">
//           <button className="text-white hover:text-gray-300 focus:outline-none" onClick={toggleMenu}>
//             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>
//       {/* Responsive dropdown menu */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="flex flex-col items-center mt-2">
//             <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>
//             <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">About</a>
//             <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Services</a>
//             <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md ">Contact Us</a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import ContactModal from './ContactModal'; 

// const Navbar = () => {
//   // State to manage menu visibility
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Function to toggle menu visibility
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleContactClick = () => {
//     setIsModalOpen(true);
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link to="/" className="text-white font-medium font-barlow-condensed text-2xl tracking-wide">Venus Computers</Link>
//         </div>
//         {/* Desktop and tablet menu items */}
//         <div className="hidden md:flex md:items-center md:justify-center flex-1">
//           <Link to="/" className="text-white hover:bg-gray-700 px-5 py-2 rounded-md">Home</Link>
//           <Link to="/aboutus" className="text-white hover:bg-gray-700 px-5 py-2 rounded-md">About</Link>
//           <Link to="/services" className="text-white hover:bg-gray-700 px-5 py-2 rounded-md">Services</Link>
//         </div>
//         {/* Contact Us */}
//         <div>
//           <button className="text-white hover:bg-gray-700 px-5 py-2 rounded-[20px] border border-white" onClick={handleContactClick}>
//             Contact Us
//           </button>
//         </div>
//         <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//         {/* Responsive menu button */}
//         <div className="md:hidden">
//           <button className="text-white hover:text-gray-300 focus:outline-none" onClick={toggleMenu}>
//             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>
//       {/* Responsive dropdown menu */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="flex flex-col items-center mt-2">
//             <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
//             <Link to="/aboutus" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">About</Link>
//             <Link to="/services" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Services</Link>
//             <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-md" onClick={handleContactClick}>Contact Us</button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white font-medium font-barlow-condensed text-2xl tracking-wide">Venus Computers</Link>
        </div>
        <div className="hidden md:flex md:items-center md:justify-center flex-1">
          <Link to="/" className="text-white hover:bg-gray-700 px-5 py-2 rounded-md">Home</Link>
          <Link to="/aboutus" className="text-white hover:bg-gray-700 px-5 py-2 rounded-md">About</Link>
          <Link to="/services" className="text-white hover:bg-gray-700 px-5 py-2 rounded-md">Services</Link>
        </div>
        <div>
          <button className="text-white hover:bg-gray-700 px-5 py-2 rounded-[20px] border border-white" onClick={handleContactClick}>
            Contact Us
          </button>
        </div>
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <div className="md:hidden">
          <button className="text-white hover:text-gray-300 focus:outline-none" onClick={toggleMenu}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center mt-2">
            <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
            <Link to="/aboutus" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">About</Link>
            <Link to="/services" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Services</Link>
            <button className="text-white hover:bg-gray-700 px-3 py-2 rounded-md" onClick={handleContactClick}>Contact Us</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
