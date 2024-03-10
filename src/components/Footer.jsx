// Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
   

<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Venus Computers</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">About</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Careers</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Brand Center</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Our Products</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                    <a href="#" className="hover:underline">Wristbands</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Silicone Wristbands</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Fabric Wirstbands</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Event Wristbands</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Plastic Cards</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">PVC Cards</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"></h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                    <a href="#" className="hover:underline">Business Cards</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">RFID Cards</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Luggage Tags</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Custom Printed Lanyards</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Corporate Lanyards</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Cotton Lanyards</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Event Lanyards</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"></h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-2">
                    <a href="#" className="hover:underline">Button Badges</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Fridge Magnets</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Hotel Menus</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Tent Cards</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Corporate Lanyards</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Cotton Lanyards</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Event Lanyards</a>
                </li>
            </ul>
        </div>
    </div>
    </div>
    <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm ml-10 text-gray-500 dark:text-gray-300 sm:text-center">© 2024 <a href="https://flowbite.com/">Venus Cards</a>. All Rights Reserved.
        </span>
        <div className="flex items-center justify-center sm:mr-44 mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <FontAwesomeIcon icon={faPhoneAlt} className="mb-1 w-4 h-4" />
                <span className="sr-only">Phone</span>
                </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <FontAwesomeIcon icon={faInstagram} className="mb-1 w-4 h-4" />
                  <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <FontAwesomeIcon icon={faWhatsapp} className="mb-1 w-4 h-4" />
                    <span className="sr-only">WhatsApp</span>
              </a>
             <a href="mailto:deepak_venus@yahoo.com " className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
               <FontAwesomeIcon icon={faEnvelope} className=" mb-1 w-4 h-4" />
               <span className="sr-only">Mail</span>
             </a>
        </div>
      </div>
    {/* </div> */}
</footer>

  );
};

export default Footer;
