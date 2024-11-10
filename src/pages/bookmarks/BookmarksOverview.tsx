import PageTitle from "@/components/shared/PageTitle";
import img from "../../assets/about/actv.jfif"; // Image for the section

const BookmarksOverview = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Main Content Section */}
        <div className="flex items-center p-8">
          {/* Text Section */}
          <div className="w-2/3 pr-8">
            <PageTitle children="Bookmarks Overview" />
            <p className="text-lg leading-relaxed text-gray-700">
              The Global Health Bookmarks section indicates the resources either
              document, entities, courses, career, podcast, and so on pertained
              with global health and health systems. The section offers a
              comprehensive list of resources that enrich a global health
              professional's career. If these given resources are well utilized,
              anyone can attain the knowledge of the current trends in global
              health and health system challenges.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-1/3">
            <img
              src={img}
              alt="Global Health Resources"
              className="object-cover w-full h-auto rounded-md shadow-lg" // Adjusting image style
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarksOverview;
