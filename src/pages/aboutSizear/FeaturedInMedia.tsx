import PageTitle from "@/components/shared/PageTitle";

const FeaturedInMedia = () => {
  return (
    <div className="text-gray-800 ">
      <div className="max-w-screen-xl mx-auto ">
        {/* Activities Section */}
        <div className="p-8 mb-12 bg-white ">
          <PageTitle children="Featured in Media" />
          <p className="w-3/4 mx-auto text-base leading-relaxed text-gray-700">
            Here are some highlights featuring my appearances in various media
            outlets and platforms, primarily focusing on my academic and
            professional achievements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInMedia;
