import PageTitle from "@/components/shared/PageTitle";
import img from "../../assets/newsroom/doyouknow.jfif";

const Doyouknow = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Do you know Section */}
        <div className="flex flex-row-reverse items-center gap-4 p-8 mb-12 space-x-8 ">
          {/* Image Section */}
          <div className="flex-shrink-0 w-1/3 md:w-1/4">
            <img
              src={img}
              alt="Do You Know"
              className="object-cover w-full h-full rounded-md shadow-md"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <PageTitle children="Do You Know?" />
            <ul className="mt-4 space-y-2 text-lg text-gray-700 list-disc list-inside">
              <li>Some global health milestones will be covered</li>
              <li>Interesting facts will be covered</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doyouknow;
