import PageTitle from "@/components/shared/PageTitle";

const MeinNumbers = () => {
  return (
    <div className="text-gray-800 ">
      <div className="max-w-screen-xl mx-auto ">
        {/* Activities Section */}
        <div className="p-8 mb-12 bg-white ">
          <PageTitle children="Me In Numbers" />

          <ul className="w-3/4 mx-auto mt-4 space-y-2 text-lg list-disc list-inside cursor-pointer">
            1 book published 1 cup of black coffee each morning 2 adorable and
            workaholic daughters 3 times champion in debate 3 blog writings 07
            peer-reviewed articles 24 articles/column writings 11 countries
            visited 06 public health awards 10 times donated blood 1000 books in
            my bookshelf now
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MeinNumbers;
