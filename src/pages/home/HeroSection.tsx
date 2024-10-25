import Lottie from "lottie-react";
import animationData from "../../lotties/banner.json";

const HeroSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex items-center justify-between max-w-screen-xl mx-auto">
      <div>
        <h2 className="pt-6 mb-2 underline">Knowledge for Solutions!</h2>
        <h2 className="mb-4">Don't Settle.</h2>
        <h1>
          Explore to be <br /> Enriched <br /> with{" "}
          <span className="text-[#01748D]">HSM</span>
        </h1>
      </div>

      {/* Right lottie animation */}
      <div>
        <div>
          <Lottie
            animationData={defaultOptions.animationData}
            loop={defaultOptions.loop}
            autoplay={defaultOptions.autoplay}
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
