import PageTitle from "@/components/shared/PageTitle";

const UpcomingEvent = () => {
  return (
    <div className="text-gray-800 ">
      <div className="max-w-screen-xl mx-auto">
        {/* Activities Section */}
        <div className="p-8 mb-12 bg-white">
          <PageTitle children="Upcoming Events" />

          <ul className="mt-4 space-y-2 text-xl text-gray-700 list-disc list-inside">
            <li>Global Health Conference and Seminars </li>
            <li>Webinar </li>
            <li>Global health days and campaign </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
