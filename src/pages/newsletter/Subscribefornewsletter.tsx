import PageTitle from "@/components/shared/PageTitle";

const Subscribefornewsletter = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Testimonials Section */}
        <div className="p-8 bg-white">
          <PageTitle children="Subscribe for newsletter" />

          <p className="w-3/4 mx-auto text-2xl leading-relaxed text-gray-700">
            If you’re interested in updates on public health issues, a single
            subscription should suffice. If you don’t see the newsletter in your
            inbox, please check your spam folder.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribefornewsletter;
