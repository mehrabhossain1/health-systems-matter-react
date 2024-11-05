import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTimes } from "react-icons/fa";

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
        <div className="fixed bottom-0 right-0 z-50 flex items-center justify-center w-1/3 p-6 bg-gray-800 rounded-md shadow-lg bg-opacity-90">
          <div className="relative w-full max-w-xs">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 p-2 text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none"
              aria-label="Close"
            >
              <FaTimes size={24} />
            </button>

            {/* Modal Content */}
            <div className="w-full ">
              {/* Modal Title */}
              <p className="text-xl text-white">
                Subscribe to{" "}
                <span className="mb-4 text-3xl font-bold text-slate-100">
                  <span className="text-[#EE8922]">HSM</span> Monthly Newsletter
                </span>
              </p>

              {/* Subscription Form */}
              <form
                onSubmit={handleSubmit}
                className="flex items-center justify-center mb-4 space-x-2"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-[#01748D]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-lg font-semibold text-[#01748D] bg-white rounded-md hover:bg-gray-200"
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
                  className="text-white transition transform hover:scale-110 hover:text-[#3B5997]"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition transform hover:scale-110 hover:text-red-500"
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
