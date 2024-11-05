import PageTitle from "@/components/shared/PageTitle";

const Books = () => {
  return (
    <div className="text-gray-800 ">
      <div className="max-w-screen-xl mx-auto">
        {/* Activities Section */}
        <div className="p-8 mb-12 bg-white rounded-lg shadow-lg">
          <PageTitle children="Books" />

          <p className="text-base leading-relaxed text-gray-700">
            The PDF books provided are significant works by renowned public
            health professionals, offering valuable insights into global health
            and health systems. Although many of these essential books are not
            freely available, their titles are listed here for your convenience,
            allowing you to purchase them online or offline.
          </p>
          <ul className="w-3/4 mx-auto mt-4 space-y-2 text-xl text-blue-500 underline list-disc list-inside cursor-pointer">
            <li>Book 1</li>
            <li>Book 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Books;
