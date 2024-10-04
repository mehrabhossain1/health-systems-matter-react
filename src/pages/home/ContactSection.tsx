/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa"; // You can use an icon for the send button
import "../../App.css"; // Ensure to include your CSS file
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle the form submission logic here
    setSubmitted(true);
    // Reset the form fields
    setName("");
    setEmail("");
    setContactNo("");
    setMessage("");
    // Hide the feedback message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="py-32 bg-gray-100 dark:bg-gray-900"
    >
      <div className="flex flex-col max-w-screen-xl px-6 mx-auto md:flex-row">
        {/* Left Section */}
        <div className="mb-10 md:w-1/2 md:mb-0 md:pr-8">
          <h2 className="mb-6 text-5xl font-light text-gray-800 dark:text-gray-300">
            Stay Connected
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Hi there! Thank you for your interest in this work. Please leave a
            message, and I will get back to you as soon as possible.
          </p>
          {submitted && (
            <p className="mt-6 text-6xl text-green-600 animate-blink">
              Your feedback makes us better!
            </p>
          )}
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
              className="flex items-center justify-center w-full p-2 text-white rounded-lg bg-gradient-to-r from-[#01748D] to-[#00A6D1] hover:from-[#015f68] hover:to-[#008ab6] transition"
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

export default ContactSection;
