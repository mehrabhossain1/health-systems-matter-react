import AboutSectionCard from "@/components/ui/about/AboutSectionCard";
import aboutbg from "../../assets/about/dots-block-aqua.png";

const AboutUsSection = () => {
  return (
    <section
      className="relative py-8 bg-center bg-cover h-[700px] bg-[#071E2D]"
      style={{
        backgroundImage: `url(${aboutbg})`,
      }}
    >
      {/* Optional: Overlay for better text readability */}
      <div className="absolute inset-0 opacity-50"></div>

      <div className="container relative mx-auto">
        <h2 className="mb-6 font-sans text-3xl font-semibold text-center text-white">
          About
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <AboutSectionCard />
          <AboutSectionCard />
          <AboutSectionCard />
          <AboutSectionCard />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
