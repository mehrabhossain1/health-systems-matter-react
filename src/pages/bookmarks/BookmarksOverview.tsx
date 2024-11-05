import PageTitle from "@/components/shared/PageTitle";

const BookmarksOverview = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Testimonials Section */}
        <div className="p-8 bg-white">
          <PageTitle children="Bookmarks Overview" />
          <p className="w-3/4 mx-auto text-2xl leading-relaxed text-gray-700">
            The Global Health Bookmarks section indicates the resources either
            document, entities, courses, career, podcast and so on pertained
            with the global health and system are covered. The section offers a
            comprehensive list of resources that enrich one global health
            professionals’ career. If these given resources are well utilized,
            anyone can attained the knowledge of the current trend of the global
            health and health system challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookmarksOverview;
