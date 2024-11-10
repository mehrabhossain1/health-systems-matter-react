import PageTitle from "@/components/shared/PageTitle";
import img from "../../assets/newsroom/overviwe.jfif"; // Image for the section

const Journals = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Main Content Section */}
        <div className="flex items-center p-8 space-x-8 g">
          {/* Text Section */}
          <div className="w-2/3 pr-8">
            <PageTitle children="Journals" />
            <p className="text-lg leading-relaxed text-gray-700">
              This list offers an overview of major reputable journals focused
              on public health and health systems. While it includes many
              prominent journals, additional ones will be added over time as
              identified by the site owner.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-1/3">
            <img
              src={img}
              alt="Journals Overview"
              className="object-cover w-full h-auto rounded-md shadow-lg" // Image styling
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journals;
