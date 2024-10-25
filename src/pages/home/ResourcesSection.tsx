import ResourcesSectionCard from "@/components/ui/about/ResourcesSectionCard";

const ResourcesSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center">Resources</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <ResourcesSectionCard key={index} customStyle={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
