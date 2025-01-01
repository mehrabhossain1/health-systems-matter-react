import PageTitle from "@/components/shared/PageTitle";

const Education = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Career Summary Section */}
        <div className="p-8 bg-white">
          <PageTitle children="Education" />
          <p className="w-3/4 mx-auto text-lg leading-relaxed text-gray-700">
            My expertise in knowledge generation spans several disciplines,
            starting with a foundation in Anthropology. I furthered my education
            with two master's degrees: one in Public Health from the James P.
            Grant School of Public Health as a USAID Scholar, and another in
            Urban Policy & Development from Erasmus University Rotterdam in the
            Netherlands as a World Bank Scholar. As a dedicated knowledge seeker
            and passionate public health professional, I stay current with the
            latest developments in my field. Recently, I completed a three-week,
            4-credit on-site course in Health Policy and Financing at the KIT
            Royal Tropical Institute in the Netherlands. Additionally, I
            continuously enhance my expertise through various online courses.
          </p>
        </div>
        <div className="p-8 bg-white">
          <PageTitle children="Education Journey" />
          <p className="w-3/4 mx-auto text-lg leading-relaxed text-gray-700">
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
              <table className="min-w-full table-auto">
                <thead className="text-gray-800 bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-left">
                      Duration
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-left">
                      Qualification
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-left">
                      Institution
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-sm">May 2024</td>
                    <td className="px-6 py-4 text-sm">
                      Health Policy and Financing (A Three-Week On-Site Short
                      Course)
                    </td>
                    <td className="px-6 py-4 text-sm">
                      KIT Royal Tropical Institute, Vrije Universiteit
                      Amsterdam, Netherlands
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-sm">
                      October 2020 – September 2021
                    </td>
                    <td className="px-6 py-4 text-sm">
                      MSC in Urban Management and Development
                    </td>
                    <td className="px-6 py-4 text-sm">
                      Erasmus University Rotterdam, Netherlands
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-sm">
                      January 2014 – January 2015
                    </td>
                    <td className="px-6 py-4 text-sm">
                      Master of Public Health
                    </td>
                    <td className="px-6 py-4 text-sm">
                      James P. Grant School of Public Health, BRAC University,
                      Bangladesh
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-sm">
                      March 2010 – April 2011
                    </td>
                    <td className="px-6 py-4 text-sm">MSS in Anthropology</td>
                    <td className="px-6 py-4 text-sm">
                      University of Rajshahi, Bangladesh
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-sm">
                      February 2006 – February 2010
                    </td>
                    <td className="px-6 py-4 text-sm">
                      Bachelor of Social Science in Anthropology
                    </td>
                    <td className="px-6 py-4 text-sm">
                      University of Rajshahi, Bangladesh
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
