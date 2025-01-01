import PageTitle from "@/components/shared/PageTitle";

const BookmarksNewsletter = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Testimonials Section */}
        <div className="p-8 bg-white">
          <PageTitle children="Newsletters" />
          <p className="w-3/4 mx-auto text-lg leading-relaxed text-gray-700">
            A series of blogs and newsletters maintained by organizations and
            dedicated professionals is available. This section provides a list
            of these valuable resources. By subscribing to your preferred sites,
            you can stay up to date with the latest updates and new resources.
            The list is extensive but not exhaustive and is updated
            periodically.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookmarksNewsletter;
