import PageTitle from "@/components/shared/PageTitle";

const Journals = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Testimonials Section */}
        <div className="p-8 bg-white">
          <PageTitle children="Journals" />
          <p className="w-3/4 mx-auto text-2xl leading-relaxed text-gray-700">
            This list offers an overview of major reputable journals focused on
            public health and health systems. While it includes many prominent
            journals, additional ones will be added over time as identified by
            the site owner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Journals;
