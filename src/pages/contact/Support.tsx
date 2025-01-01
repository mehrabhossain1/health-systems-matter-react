import Buttonn from "@/components/shared/Buttonn";
import PageTitle from "@/components/shared/PageTitle";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="text-gray-800 ">
      <div className="max-w-screen-xl mx-auto">
        {/* Activities Section */}
        <div className="p-8 mb-12 bg-white">
          <PageTitle children="Support" />

          <div className="flex flex-col items-center justify-center w-3/4 mx-auto mt-8 text-lg leading-relaxed text-gray-700">
            This is a volunteer-driven initiative, and we greatly appreciate any
            sponsorships or contributions to support the site and promote our
            page. If you find the site valuable, please share it with
            like-minded individuals.
            <Link to="/contact/stay-connected" className="mt-5 animate-pulse">
              <Buttonn>Sign up</Buttonn>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
