import PageTitle from "@/components/shared/PageTitle";

const Family = () => {
  return (
    <div className="text-gray-800 ">
      <div className="max-w-screen-xl mx-auto ">
        {/* Activities Section */}
        <div className="p-8 mb-12 bg-white ">
          <PageTitle children="Family" />
          <p className="w-3/4 mx-auto text-base leading-relaxed text-gray-700">
            My family is my greatest source of energy and joy, and they always
            come first in my life. Our family includes my wonderful wife, our
            two lively daughters, and my father. My mother passed away in 2016,
            and her memory continues to inspire us.
          </p>

          <img src="" alt="img1" />
          <img src="" alt="img2" />
        </div>
      </div>
    </div>
  );
};

export default Family;
