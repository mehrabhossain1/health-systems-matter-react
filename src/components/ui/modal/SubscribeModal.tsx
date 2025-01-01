import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const SubscribeModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the modal
    const hasSeenModal = localStorage.getItem("hasSeenModal");

    if (!hasSeenModal) {
      // If the user hasn't seen the modal, set a timer to show the modal after 3 seconds
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 3000); // 3 seconds for demo (can be adjusted to 30 seconds)

      // Clean up the timer if the component is unmounted
      return () => clearTimeout(timer);
    }
  }, []);

  // Function to close the modal
  const closeModal = () => {
    // Store in localStorage that the user has seen the modal
    localStorage.setItem("hasSeenModal", "true");
    setIsModalOpen(false);
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    closeModal(); // Close the modal after submitting the form
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed bottom-0 right-0 z-50 flex items-center justify-center w-1/3 p-4 bg-gray-800 rounded-md shadow-lg">
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
            <div className="w-full">
              {/* Modal Title */}
              <p className="text-lg text-white">
                Subscribe to{" "}
                <span className="mb-4 text-xl font-bold text-slate-100">
                  <span className="text-[#EE8922]">HSM</span> Monthly Newsletter
                </span>
              </p>

              {/* Subscription Form */}
              <form
                onSubmit={handleSubmit}
                className="flex items-center justify-center pt-2 mb-4 space-x-2"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-3 py-2 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-[#01748D]"
                />
                <button
                  type="submit"
                  className="px-3 py-2 text-sm font-medium text-[#01748D] bg-white rounded-md hover:bg-gray-200"
                >
                  Subscribe
                </button>
              </form>

              {/* Follow HSM Links */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubscribeModal;
