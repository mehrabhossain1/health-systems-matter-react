import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    image: "",
    name: "Dr. John Doe",
    title: "Global Health Specialist",
    quote:
      "Health Systems Matter has been an invaluable resource. Their commitment to promoting impactful health system resources is commendable.",
  },
  {
    image:
      "data:image/png;base64,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",
    name: "Dr. Jane Smith",
    title: "Public Health Consultant",
    quote:
      "Thanks to Health Systems Matter, I was able to stay up-to-date with the latest global health events and milestones. I can't recommend them enough.",
  },
  {
    image: "",
    name: "Dr. Emily Davis",
    title: "Health Policy Analyst",
    quote:
      "I appreciate how Health Systems Matter showcases organizations working on public health agendas. It's my go-to platform for staying informed.",
  },
];

const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  // Handle next slide with transition effect
  const handleNext = () => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setFadeClass("fade-in");
    }, 500); // duration of the fade-out effect
  };

  // Handle previous slide with transition effect
  const handlePrev = () => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setFadeClass("fade-in");
    }, 500); // duration of the fade-out effect
  };

  // Automatically change the testimonial every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Move to the next slide
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex]); // Only re-run effect when currentIndex changes

  return (
    <section
      data-aos="fade-right"
      data-aos-duration="1000"
      className="py-12 pb-20"
    >
      <div className="max-w-screen-xl px-6 mx-auto">
        <div className="flex flex-row-reverse items-center justify-center gap-10 py-10 pt-20">
          <h2 className="text-6xl font-serif font-semibold text-[#01748D] pe-10 mb-10">
            Testimonials
          </h2>
          <div className="flex-1 ml-4 border-t border-[#01748D]"></div>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Carousel Content */}
          <div
            className={`flex flex-col items-center justify-center w-full px-8 py-12 space-y-6 text-center transition-opacity duration-500 transform bg-white shadow-lg dark:bg-gray-800 rounded-2xl ${fadeClass}`}
            key={currentIndex}
          >
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="object-cover w-32 h-32 border-4 border-[#01748D] rounded-full shadow-lg"
            />
            <blockquote className="px-10 text-lg italic font-medium text-gray-600 dark:text-gray-200">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-[#01748D] dark:text-indigo-400">
              {testimonials[currentIndex].title}
            </p>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-0 p-3 m-3 text-gray-700 transition transform -translate-y-1/2 bg-gray-200 rounded-full shadow-md dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 top-1/2"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 p-3 m-3 text-gray-700 transition transform -translate-y-1/2 bg-gray-200 rounded-full shadow-md dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 top-1/2"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Dots for navigation (optional) */}
        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`block w-3 h-3 rounded-full cursor-pointer ${
                currentIndex === index
                  ? "bg-[#01748D] dark:bg-indigo-400"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
