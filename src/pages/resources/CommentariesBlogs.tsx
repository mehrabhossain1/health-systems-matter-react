import PageTitle from "@/components/shared/PageTitle";

const CommentariesBlogs = () => {
  return (
    <div className="text-gray-800 ">
      <div className="max-w-screen-xl mx-auto">
        {/* Activities Section */}
        <div className="p-8 mb-12 bg-white rounded-lg shadow-lg">
          <PageTitle children="Commentaries and Blogs" />

          <p className="text-base text-xl leading-relaxed text-gray-700">
            A series of blogs and newsletters maintained by organizations and
            dedicated professionals is available. This section provides a list
            of these valuable resources. By subscribing to your preferred sites,
            you can stay up to date with the latest updates and new resources.
            The list is extensive but not exhaustive and is updated
            periodically.
          </p>
          <ul className="w-3/4 mx-auto mt-4 space-y-2 text-xl text-blue-500 underline list-disc list-inside cursor-pointer">
            <li>
              Commentaries and blogs of WB, Lancet, CGD, Think Global Health
              etc.
            </li>
            <li>Book 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommentariesBlogs;
