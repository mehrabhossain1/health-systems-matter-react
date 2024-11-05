import PageTitle from "@/components/shared/PageTitle";

const NewsletterOverview = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Testimonials Section */}
        <div className="p-8 bg-white">
          <PageTitle children="Newsletter Overview" />

          <p className="w-3/4 mx-auto text-2xl leading-relaxed text-gray-700">
            Subscribers to the Health Systems Matter newsletter will receive a
            monthly email update featuring highlights from the platform's recent
            posts in the social media platform. The newsletter also includes key
            updates on global health events and significant news from around the
            world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterOverview;
