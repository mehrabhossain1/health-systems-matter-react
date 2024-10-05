import React, { useEffect } from "react";
import hero1 from "../../assets/hero1.webp";
import hero2 from "../../assets/hero2.webp";
import hero3 from "../../assets/hero3.webp";
import hero4 from "../../assets/hero4.webp";
import hero5 from "../../assets/hero5.webp";
import "../../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/HeroSection.css";

interface StaggeredTextProps {
  text: string;
}

const StaggeredText: React.FC<StaggeredTextProps> = ({ text }) => {
  return (
    <span>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className="letter"
          style={{
            animationDelay: `${index * 0.1}s`, // Stagger the animation delay
            display: letter === " " ? "inline-block" : "inline",
            marginRight: letter === " " ? "0.2em" : "0", // Add spacing for spaces
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
};

const HeroSection: React.FC = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="zoom-in-down"
      data-aos-duration="1000"
      className="relative flex flex-col lg:flex-row items-center justify-between h-auto lg:h-[calc(100vh-300px)] p-6 md:p-10 banner overflow-hidden"
    >
      {/* Left Side Text (1/3 width on large screens) */}
      <h2 className="w-full lg:w-[40%] text-center text-gray-600 lg:text-left font-light mb-6 lg:mb-0 ">
        <span>Unlock your potential and elevate your expertise with </span>
        <br />
        <span className="font-semibold text-[#01748D]">
          <StaggeredText text="Health Systems Matter (HSM)" />
        </span>
      </h2>

      {/* Right Side with 5 Images (2/3 width on large screens) */}
      <div className="relative w-full lg:w-[60%] h-[300px] md:h-[400px] lg:h-full flex justify-center items-center overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={hero1}
            alt="Hero 1"
            className="absolute object-cover w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 animate-image-1"
            style={{
              top: "10%",
              right: "15%",
              animationDuration: "9s",
              transform: "rotate(-10deg) scale(1.1)",
            }}
          />
          <img
            src={hero2}
            alt="Hero 2"
            className="absolute object-cover w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 animate-image-2"
            style={{
              top: "40%",
              right: "20%",
              animationDuration: "9s",
              transform: "rotate(5deg) scale(0.9)",
            }}
          />
          <img
            src={hero3}
            alt="Hero 3"
            className="absolute object-cover w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 animate-image-3"
            style={{
              top: "70%",
              right: "0%",
              animationDuration: "9s",
              transform: "rotate(-15deg) scale(1.2)",
            }}
          />
          <img
            src={hero4}
            alt="Hero 4"
            className="absolute object-cover w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 animate-image-4"
            style={{
              top: "20%",
              right: "30%",
              animationDuration: "9s",
              transform: "rotate(10deg) scale(1)",
            }}
          />
          <img
            src={hero5}
            alt="Hero 5"
            className="absolute object-cover w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 animate-image-5"
            style={{
              top: "60%",
              right: "10%",
              animationDuration: "9s",
              transform: "rotate(-5deg) scale(1.3)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
