import React, { useState, useEffect } from "react";

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
        <div className="fixed z-50 flex items-center justify-center w-full max-w-sm p-6 bg-red-600 shadow-lg bottom-5 right-5 bg-opacity-90">
          <div className="relative w-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute text-xl text-gray-100 top-2 right-2 hover:text-white"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Modal Title */}
            <h2 className="mb-4 text-3xl font-bold text-white">
              Subscribe to HSM
            </h2>

            {/* Subscription Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 text-gray-800 border-0 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 text-lg font-semibold text-red-600 bg-white rounded-md hover:bg-gray-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SubscribeModal;
