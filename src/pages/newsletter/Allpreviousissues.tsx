import PageTitle from "@/components/shared/PageTitle";

const Allpreviousissues = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Testimonials Section */}
        <div className="p-8 bg-white">
          <PageTitle children="All previous issues" />

          <p className="w-3/4 mx-auto text-2xl leading-relaxed text-gray-700">
            Explore our archive below to find all previous newsletters, neatly
            organized by month.
            {/* TODO: */}
            <p className="text-red-500">
              Show the months to identify the newspaper and attach PDF file for
              download.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Allpreviousissues;
