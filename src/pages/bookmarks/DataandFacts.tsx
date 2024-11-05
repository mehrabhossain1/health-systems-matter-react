import PageTitle from "@/components/shared/PageTitle";

const DataandFacts = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Testimonials Section */}
        <div className="p-8 bg-white">
          <PageTitle children="Data and Facts" />
          <p className="w-3/4 mx-auto text-2xl leading-relaxed text-blue-500 underline cursor-pointer">
            <a
              href="https://www.who.int/campaigns/75-years-of-improving-public-health/milestones#year-1981"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.who.int/campaigns/75-years-of-improving-public-health/milestones#year-1981
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataandFacts;
