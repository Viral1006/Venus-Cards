import React, { useState, useEffect  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://images.unsplash.com/photo-1709625862404-c363220c3823?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://images.unsplash.com/photo-1586377403109-cbd5fcd12c4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://images.unsplash.com/photo-1709927988308-b7a2da93012f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://images.unsplash.com/photo-1709946033744-37312666bb71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://images.unsplash.com/photo-1687778055088-8cebf164f012?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D',
  },
  // Add more products as needed
];

const Carousel = () => {
//   const [currentProductIndex, setCurrentProductIndex] = useState(0);

//   const nextProduct = () => {
//     setCurrentProductIndex((prevIndex) =>
//       prevIndex === products.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevProduct = () => {
//     setCurrentProductIndex((prevIndex) =>
//       prevIndex === 0 ? products.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextProduct();
//     }, 5000); // Change product every 5 seconds

//     return () => clearInterval(interval);
//   }, []); // Run this effect only once on component mount
const [currentProductIndex, setCurrentProductIndex] = useState(0);
const [isNext, setIsNext] = useState(true);
const [isSliding, setIsSliding] = useState(false);

const nextProduct = () => {
  setIsNext(true);
  setIsSliding(true);
  setTimeout(() => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
    setIsSliding(false);
  }, 500); // Wait for the slide-out transition to complete (500ms)
};

const prevProduct = () => {
  setIsNext(false);
  setIsSliding(true);
  setTimeout(() => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
    setIsSliding(false);
  }, 500); // Wait for the slide-out transition to complete (500ms)
};

useEffect(() => {
  const interval = setInterval(() => {
    nextProduct();
  }, 5000); // Change product every 5 seconds

  return () => clearInterval(interval);
}, []); // Run this effect only once on component mount



  return (
    <div className="flex items-center justify-center z-0 ">
      <div className="bg-[#F9F07A] p-4 w-screen h-[60vh] flex items-center justify-between relative">
        {/* <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={prevProduct}
        >
          Previous
        </button> */}
         <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-none hover:bg-none text-gray-800 font-bold py-2 px-4"
          onClick={prevProduct}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="w-1/2">
          <div className="mb-4 ml-48 ">
            <h2 className="text-5xl font-bold text-gray-800 font-barlow-condensed mb-2">
              {products[currentProductIndex].name}
            </h2>
            <p className='font-montserrat text-gray-800 mt-4'
            >{products[currentProductIndex].description}</p>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={products[currentProductIndex].imageUrl}
            alt={products[currentProductIndex].name}
            className="w-full h-auto rounded ml-28 "
            style={{ maxWidth: '350px', maxHeight: '320px' }} // Set max width for the image
          />
        </div>
        {/* <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={nextProduct}
        >
          Next
        </button> */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-none hover:bg-none text-gray-800 font-bold py-2 px-4 rounded"
          onClick={nextProduct}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

