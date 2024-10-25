import AboutSectionCard from "@/components/ui/about/AboutSectionCard";

const AboutUsSection = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="mb-6 text-3xl font-semibold text-center">About</h2>
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
