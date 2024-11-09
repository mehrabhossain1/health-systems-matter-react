import AboutSectionCard from "@/components/ui/about/AboutSectionCard";

import "../../App.css";
import img4 from "../../assets/about/actv.jfif";
const AboutUsSection = () => {
  return (
    <section className="mt-20">
      {/* Optional: Overlay for better text readability */}
      <div className="inset-0 opacity-50"></div>

      <div className="max-w-screen-xl mx-auto">
        {/* Title with horizontal line */}
        <div className="flex items-center gap-10 mb-10">
          <h2 className="pl-10 text-5xl font-semibold text-[#01748D]">About</h2>
          <div className="flex-1 ml-4 border-t border-[#01748D]"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AboutSectionCard
            title="About HSM"
            description="Information is power” and “Evidence lies at the heart of public health policy.” Inspired by t"
            href="/about/about-hsm"
            imageUrl="/src/assets/about/activites.jfif"
          />

          <AboutSectionCard
            title="Vision and Mission"
            description="The vision of Health Systems Matter is to create an evidence-based platform that empowers emerging"
            href="/about/vision-mission"
            imageUrl="/src/assets/about/vision.jfif"
          />

          <AboutSectionCard
            title="Activities and Approach"
            description="In order to be aligned with the vision and mission of Health Systems Matter, "
            href="/about/activities-approach"
            imageUrl={img4}
          />

          <AboutSectionCard
            title="Testimonials"
            description="Since the site is new, there are no testimonials yet. We will add them as they come in. If you'd like, yo"
            href="/about/testimonials"
            imageUrl="/src/assets/about/testimonials.jfif"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
