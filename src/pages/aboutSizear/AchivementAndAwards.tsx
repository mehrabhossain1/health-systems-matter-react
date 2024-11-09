import PageTitle from "@/components/shared/PageTitle";

const AchivementAndAwards = () => {
  return (
    <div className="text-gray-800 ">
      <div className="max-w-screen-xl mx-auto ">
        {/* Activities Section */}
        <div className="p-8 mb-12 bg-white ">
          <PageTitle children="Achievement and Awards" />
          <p className="w-3/4 mx-auto text-base leading-relaxed text-gray-700">
            Throughout my extensive academic and professional journey, I have
            been honored with various recognitions for my work. While these
            achievements may appear modest, each one represents a significant
            milestone earned through dedication and effort. Below, you can view
            highlights of these accomplishments and awards.
          </p>
          <p className="w-3/4 mx-auto mt-4 text-xl font-bold">
            Academic Awards:
          </p>
          <ul className="w-3/4 mx-auto mt-4 space-y-2 text-sm list-disc list-inside cursor-pointer ps-8">
            <li>
              <span className="font-bold">
                Joint Japan/World Bank Scholarship
              </span>{" "}
              (2020-21) for Masters in Erasmus University Rotterdam, The
              Netherlands
            </li>
            <li>
              <span className="font-bold">
                Next Generation of Public Health Experts Scholarship funded by
                USAID
              </span>{" "}
              for MPH program (2014-15) in James P Grant School of Public
              Health, BRAC University, Bangladesh
            </li>
          </ul>

          <p className="w-3/4 mx-auto mt-4 text-xl font-bold">
            Conference Presentation and Awards:
          </p>
          <ul className="w-3/4 mx-auto mt-4 space-y-2 text-sm list-disc list-inside cursor-pointer ps-8">
            <li>
              <span className="font-bold">Best oral presenter award</span> in
              the International Public Health Conference, 2024 organized by
              Public Health Association of Bangladesh
            </li>
            <li>
              <span className="font-bold">Best oral presenter award</span> in
              the 9th International Public Health Conference, 2023 organized by
              Public Health Foundation Bangladesh
            </li>
            <li>
              <span className="font-bold">Best oral presenter award</span> in
              the 9th Regional Public Health Conference, 2022 organized by
              Bangladesh University of Health Professionals
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AchivementAndAwards;
