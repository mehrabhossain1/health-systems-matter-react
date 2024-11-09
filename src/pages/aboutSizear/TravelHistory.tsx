import PageTitle from "@/components/shared/PageTitle";

const TravelHistory = () => {
  return (
    <div className="text-gray-800 ">
      <div className="max-w-screen-xl mx-auto ">
        {/* Activities Section */}
        <div className="p-8 mb-12 bg-white ">
          <PageTitle children="Travel History" />
          <p className="w-3/4 mx-auto text-base leading-relaxed text-gray-700">
            Exploring new places and cultures is a central aspect of my life. I
            have had the privilege of visiting over 100 cities across 11
            countries. My wife and I prioritize creating extraordinary moments
            and enriching experiences through our travels, often valuing these
            experiences over saving money. Below are some highlights from our
            journeys around the world:
          </p>
          <ul className="w-3/4 mx-auto mt-4 space-y-2 text-lg list-disc list-inside cursor-pointer">
            <li>
              Europe: Netherlands, Sweden, Germany, Denmark, France, Belgium,
              and Luxembourg{" "}
            </li>
            <li>Asia: India, Cambodia, Malaysia, and Bangladesh </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TravelHistory;
