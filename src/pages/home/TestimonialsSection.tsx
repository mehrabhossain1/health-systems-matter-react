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
    image: "",
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
