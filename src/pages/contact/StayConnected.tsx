import PageTitle from "@/components/shared/PageTitle";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const StayConnected = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setContactNo("");
    setMessage("");
  };

  return (
    <section className="p-8">
      <div className="flex flex-col max-w-screen-xl px-6 mx-auto md:flex-row">
        {/* Left Section */}
        <div className="mb-10 md:w-1/2 md:mb-0 md:pr-8">
          <PageTitle children="Stay Connected" />
          <p className="text-gray-600 dark:text-gray-400">
            Hi there! Thank you for your interest in this work. Please leave a
            message, and I will get back to you as soon as possible.
          </p>

          <p className="mt-20 text-2xl text-[#F18A00] animate-pulse">
            Your feedback makes us better!
          </p>
        </div>
        {/* Right Section - Form */}
        <div className="md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-200">
                Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-200">
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-200">
                Contact No:
              </label>
              <input
                type="text"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-200">
                Your Message:
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-full p-2 bg-[#01748D] text-white rounded-lg hover:bg-[#015f68] transition"
            >
              <FaPaperPlane className="mr-2" />
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default StayConnected;
