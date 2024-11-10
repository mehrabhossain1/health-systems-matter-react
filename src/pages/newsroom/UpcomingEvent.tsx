import PageTitle from "@/components/shared/PageTitle";
import img from "../../assets/newsroom/upcoming-events.jfif";

const UpcomingEvent = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Upcoming Events Section */}
        <div className="flex items-center p-8 mb-12 space-x-8 bg-white">
          {/* Image Section */}
          <div className="flex-shrink-0 w-1/3 md:w-1/4">
            <img
              src={img}
              alt="Upcoming Events"
              className="object-cover w-full h-full rounded-md shadow-md"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <PageTitle children="Upcoming Events" />
            <ul className="mt-4 space-y-2 text-lg text-gray-700 list-disc list-inside">
              <li>Global Health Conference and Seminars</li>
              <li>Webinar</li>
              <li>Global health days and campaign</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
