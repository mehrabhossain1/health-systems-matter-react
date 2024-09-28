import hero1 from "../../assets/hero1.webp";
import hero2 from "../../assets/hero2.webp";
import hero3 from "../../assets/hero3.webp";
import hero4 from "../../assets/hero4.webp";
import hero5 from "../../assets/hero5.webp";
import "../../App.css";

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-between h-[500px] p-10 banner">
      <h1 className="w-1/3 font-light">
        <span className="font-bold"> World Bank Group Guarantees</span> deliver
        efficiency and boost impact
      </h1>

      {/* Right Side with 5 Images in Creative Design */}
      <div className="relative w-1/2 h-full">
        <img
          src={hero1}
          alt="Hero 1"
          className="absolute object-cover w-40 h-40 animate-move-return"
          style={{
            top: "10%",
            right: "10%",
            transform: "rotate(-10deg) scale(1.1)",
          }}
        />
        <img
          src={hero2}
          alt="Hero 2"
          className="absolute object-cover w-56 h-56 animate-move-return"
          style={{
            top: "40%",
            right: "20%",
            transform: "rotate(5deg) scale(0.9)",
          }}
        />
        <img
          src={hero3}
          alt="Hero 3"
          className="absolute object-cover w-32 h-32 animate-move-return"
          style={{
            top: "70%",
            right: "5%",
            transform: "rotate(-15deg) scale(1.2)",
          }}
        />
        <img
          src={hero4}
          alt="Hero 4"
          className="absolute object-cover w-48 h-48 animate-move-return"
          style={{
            top: "20%",
            right: "30%",
            transform: "rotate(10deg) scale(1)",
          }}
        />
        <img
          src={hero5}
          alt="Hero 5"
          className="absolute object-cover w-36 h-36 animate-move-return"
          style={{
            top: "60%",
            right: "0%",
            transform: "rotate(-5deg) scale(1.3)",
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
