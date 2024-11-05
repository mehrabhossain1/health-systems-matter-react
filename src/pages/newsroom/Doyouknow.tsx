import PageTitle from "@/components/shared/PageTitle";

const Doyouknow = () => {
  return (
    <div className="text-gray-800 ">
      <div className="max-w-screen-xl mx-auto">
        {/* Activities Section */}
        <div className="p-8 mb-12 bg-white">
          <PageTitle children="Do you know?" />

          <ul className="mt-4 space-y-2 text-xl text-gray-700 list-disc list-inside">
            <li>Some global health milestones will be covered</li>
            <li>Interesting facts will be covered </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Doyouknow;
