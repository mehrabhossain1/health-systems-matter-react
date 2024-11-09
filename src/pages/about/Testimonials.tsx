import PageTitle from "@/components/shared/PageTitle";
import img from "../../assets/resources/articles.jfif"; // Image for the page

const Testimonials = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Testimonials Section */}
        <div className="flex flex-col items-center p-8 mb-12 space-y-8 bg-white">
          {/* Text Section */}
          <div className="w-full px-4 space-y-6 md:w-2/3">
            <PageTitle children="Testimonials" />
            <p className="text-lg leading-relaxed text-gray-700">
              Since the site is new, there are no testimonials yet. We will add
              them as they come in. If you'd like, you’re welcome to share your
              feedback, and we can feature your valuable reflections. The idea
              is to feature brief endorsements from global health experts,
              high-profile professionals, and regular visitors of the site, who
              will share their perspectives on the site and its initiative.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/3">
            <img
              src={img}
              alt="Testimonials"
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
