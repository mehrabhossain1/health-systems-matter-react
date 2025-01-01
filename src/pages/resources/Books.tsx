import PageTitle from "@/components/shared/PageTitle";
import img from "../../assets/resources/books.jfif"; // The image for the books

const Books = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Books Section */}
        <div className="p-8 mb-12">
          <PageTitle children="Books" />

          {/* Description Section */}
          <p className="w-3/4 mx-auto mt-6 text-lg leading-relaxed text-gray-700">
            The PDF books provided are significant works by renowned public
            health professionals, offering valuable insights into global health
            and health systems. Although many of these essential books are not
            freely available, their titles are listed here for your convenience,
            allowing you to purchase them online or offline.
          </p>

          {/* List of Books with Image */}
          <ul className="w-3/4 mx-auto mt-6 space-y-6 text-xl text-blue-500 underline list-disc list-inside cursor-pointer">
            <li className="flex items-center gap-4">
              <img
                src={img}
                alt="Book 1"
                className="object-cover rounded-md shadow-md"
              />
              <span>Book 1</span>
            </li>
            <li className="flex items-center justify-end gap-4">
              <img
                src={img}
                alt="Book 2"
                className="object-cover rounded-md shadow-md"
              />
              <span>Book 2</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Books;
