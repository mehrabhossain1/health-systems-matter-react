import AboutSectionCard from "@/components/ui/about/AboutSectionCard";

import "../../App.css";

const AboutUsSection = () => {
  return (
    <section className="mt-20">
      {/* Optional: Overlay for better text readability */}
      <div className="absolute inset-0 opacity-50"></div>

      <div className="max-w-screen-xl mx-auto">
        {/* Title with horizontal line */}
        <div className="flex items-center gap-10 mb-10">
          <h2 className="pl-10 text-5xl font-semibold text-[#01748D]">About</h2>
          <div className="flex-1 ml-4 border-t border-[#01748D]"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AboutSectionCard
            title="About HSM"
            description="52 percent of maternal deaths occur in the postpartum period..."
          />

          <AboutSectionCard
            title="Vision and Mission"
            description="28 states saw drug overdose deaths increase than 30.."
          />

          <AboutSectionCard
            title="Activities and Approach"
            description="At least 3.8 million people have lost their Medicaid coverage..."
          />

          <AboutSectionCard
            title="Testimonials"
            description="At least 3.8 million people have lost their Medicaid coverage..."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
