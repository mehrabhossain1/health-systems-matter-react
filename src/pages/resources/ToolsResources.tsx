import PageTitle from "@/components/shared/PageTitle";
import img from "../../assets/resources/tools.jfif"; // Image for the section

const ToolsResources = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Main Content Section */}
        <div className="p-8 mb-12 bg-white">
          {/* Image Section */}
          <div className="flex justify-center w-full mb-12">
            <img
              src={img}
              alt="Tools and Resources"
              className="object-cover w-1/2 h-auto rounded-md shadow-lg" // Make the image smaller
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <PageTitle children="Tools and Resources" />

            <p className="w-3/4 mx-auto text-lg leading-relaxed text-gray-700">
              Several valuable tools and resources are available for
              professional work, particularly in areas such as data
              visualization, infographics, and analysis. These tools can enhance
              productivity and improve the presentation of information. By
              exploring and utilizing these resources, you can significantly
              complement your professional work and become more adept at using
              these tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsResources;
