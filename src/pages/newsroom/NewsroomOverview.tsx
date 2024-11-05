import PageTitle from "@/components/shared/PageTitle";

const NewsroomOverview = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Testimonials Section */}
        <div className="p-8 bg-white">
          <PageTitle children="Newsroom Overview" />
          <p className="w-3/4 mx-auto text-2xl leading-relaxed text-gray-700">
            This section highlights key global health conferences, symposiums,
            webinars, campaigns, and global health days in the Upcoming Events
            segment. Meanwhile, the Did You Know section presents significant
            public health milestones and fascinating facts for the audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsroomOverview;
