import PageTitle from "@/components/shared/PageTitle";

const TopicWiseReports = () => {
  return (
    <div className="text-gray-800 ">
      <div className="max-w-screen-xl mx-auto">
        {/* Activities Section */}
        <div className="p-8 mb-12 bg-white rounded-lg shadow-lg">
          <PageTitle children="Topic Wise Reports" />

          <ul className="w-3/4 mx-auto mt-4 space-y-2 text-xl text-gray-700 list-disc list-inside">
            <li>Health policy and regulations</li>
            <li>Health system and governance / Health system strengthening</li>
            <li>Global health</li>
            <li>Health financing</li>
            <li>
              Health service delivery and essential health service package
            </li>
            <li>Universal health coverage</li>
            <li>Health budget and national account</li>
            <li>Health workforce</li>
            <li>Primary health care and community health system</li>
            <li>Pharmaceuticals and supply chain systems</li>
            <li>Drug</li>
            <li>Private sector engagement and Public-private mix</li>
            <li>Data and digital health</li>
            <li>Maternal and child health</li>
            <li>Mental health</li>
            <li>Health seeking behavior</li>
            <li>Health and climate change</li>
            <li>Immunization and vaccine</li>
            <li>Non-communicable disease</li>
            <li>Public financial management</li>
            <li>Strategic purchasing and contracting</li>
            <li>Urban Health</li>
            <li>Healthy cities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopicWiseReports;
