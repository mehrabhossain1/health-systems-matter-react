import PageTitle from "@/components/shared/PageTitle";

const MajorReports = () => {
  return (
    <div className="text-gray-800 ">
      <div className="max-w-screen-xl mx-auto">
        {/* Activities Section */}
        <div className="p-8 mb-12">
          <PageTitle children="Major Reports" />

          <ul className="w-3/4 mx-auto mt-4 space-y-2 text-lg text-gray-700 list-disc list-inside">
            <li>WHO’s report</li>
            <li>UNICEF’s report</li>
            <li>World Bank’s report</li>
            <li>USAID’s report</li>
            <li>BMGF report</li>
            <li>UN report</li>
            <li>Save the Children report</li>
            <li>UHFPA report</li>
            <li>FHI 360 report</li>
            <li>Others</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MajorReports;
