import PageTitle from "@/components/shared/PageTitle";

const Testimonials = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Testimonials Section */}
        <div className="p-8 bg-white">
          <PageTitle children="Testimonials" />
          <p className="w-3/4 mx-auto text-2xl leading-relaxed text-gray-700">
            Since the site is new, there are no testimonials yet. We will add
            them as they come in. If you'd like, you’re welcome to share your
            feedback, and we can feature your valuable reflections. The idea is
            to feature brief endorsements from global health experts,
            high-profile professionals, and regular visitors of the site, who
            will share their perspectives on the site and its initiative.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
