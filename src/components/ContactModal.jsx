import React from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-bg')) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center modal-bg z-50 ${
        isOpen ? 'modal-bg' : 'hidden'
      }` }
      onClick={handleOutsideClick}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl text-gray-700  font-bold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="query" className="text-gray-700">
              
            </label>
            <textarea
              id="query"
              name="query"
              className="border border-gray-300 rounded-md p-2 w-full" placeholder='Your Query: '
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-700" >
              
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md p-2 w-full" placeholder='Name: ' 
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700"  >
              
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded-md p-2 w-full pl-10" placeholder='E-Mail: '
                required
              />
              <span className="absolute left-2 top-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="text-gray-700" >
              
            </label>
            <div className="relative">
              <input
                type="tel"
                id="contact"
                name="contact"
                className="border border-gray-300 rounded-md p-2 w-full pl-10" placeholder='Contact Number(Optional): '
              />
              <span className="absolute left-2 top-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
            </div>
          </div>
          <button
            type="submit"
            // className="bg-[#F9F07A] w-full text-black px-4 py-2 rounded-md hover:bg-[#fffaaf]"
            className="bg-[#F9F07A] hover:bg-[#3a3a3a] hover:text-[#F9F07A] transition-transform duration-300 transform hover:scale-90 text-black w-full px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
