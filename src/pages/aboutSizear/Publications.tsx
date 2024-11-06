import PageTitle from "@/components/shared/PageTitle";

const Publications = () => {
  return (
    <div className="text-gray-800 ">
      <div className="max-w-screen-xl mx-auto ">
        {/* Activities Section */}
        <div className="p-8 mb-12 bg-white ">
          <PageTitle children="Publications" />
          <p className="w-3/4 mx-auto text-base leading-relaxed text-gray-700">
            I contribute to the field through a variety of written formats,
            including publishing articles in scientific journals, writing
            columns and opinion pieces for newspapers, and maintaining a blog.
            Additionally, as an avid traveler, I have compiled and published
            travel pieces in a book. You can explore my work in the following
            categories:
          </p>
          <ul className="w-3/4 mx-auto mt-4 space-y-2 text-xl text-blue-500 underline list-disc list-inside cursor-pointer">
            <li>Scientific Publications</li>
            <li>Opinion and Blog Writing</li>
            <li>Newspaper Columns</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Publications;
