import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const SubscribeModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Set a timer to open the modal after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000); // 30 seconds

    // Clean up the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    closeModal();
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed bottom-0 z-50 flex items-center justify-center w-full p-6 bg-gray-800 shadow-lg bg-opacity-90">
          <div className="relative w-full max-w-screen-md">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute text-xl text-gray-100 top-2 right-2 hover:text-white"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="w-full text-center">
              {/* Modal Title */}
              <h2 className="mb-4 text-3xl font-bold text-red-500">
                Subscribe to HSM Monthly Newsletter
              </h2>

              {/* Subscription Form */}
              <form
                onSubmit={handleSubmit}
                className="flex items-center justify-center mb-4 space-x-2"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-lg font-semibold text-red-600 bg-white rounded-md hover:bg-gray-200"
                >
                  Subscribe
                </button>
              </form>

              {/* Follow HSM Links */}
              <div className="flex items-center justify-center space-x-4">
                <p className="text-lg font-semibold text-white">Follow HSM:</p>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition transform hover:scale-110"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition transform hover:scale-110"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubscribeModal;
