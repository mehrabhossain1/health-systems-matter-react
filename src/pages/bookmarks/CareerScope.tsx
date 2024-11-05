import PageTitle from "@/components/shared/PageTitle";

const CareerScope = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Testimonials Section */}
        <div className="p-8 bg-white">
          <PageTitle children="Career Scope" />
          <p className="w-3/4 mx-auto text-2xl leading-relaxed text-gray-700">
            This platform offers information on job openings and fellowship
            opportunities from various organizations. Regularly checking these
            sites can help you advance your career and discover rewarding
            opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerScope;
