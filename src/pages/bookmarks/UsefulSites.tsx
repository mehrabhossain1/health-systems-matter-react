import PageTitle from "@/components/shared/PageTitle";

const UsefulSites = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Testimonials Section */}
        <div className="p-8 bg-white">
          <PageTitle children="Useful Sites" />
          <p className="w-3/4 mx-auto text-lg leading-relaxed text-gray-700">
            In addition to the resources mentioned above, there are several
            other valuable sites that may not fit neatly into specific
            categories. These platforms offer diverse content that can be useful
            in various contexts:
          </p>
        </div>
      </div>
    </div>
  );
};

export default UsefulSites;
