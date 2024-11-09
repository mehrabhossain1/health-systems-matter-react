import Buttonn from "@/components/shared/Buttonn";
import PageTitle from "@/components/shared/PageTitle";
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div className="text-gray-800 ">
      <div className="max-w-screen-xl mx-auto">
        {/* Activities Section */}
        <div className="p-8 mb-12 bg-white">
          <PageTitle children="Subscribe" />
          <p className="w-3/4 mx-auto text-xl leading-relaxed text-gray-700">
            Stay informed with the latest health system news by following us on
            social media:
          </p>
          <ul className="w-3/4 mx-auto mt-4 space-y-2 text-lg text-blue-500 underline list-disc list-inside cursor-pointer ps-10">
            <li>Facebook</li>
            <li>Linkedin</li>
            <li>Instagram</li>
          </ul>
          <p className="flex flex-col items-center justify-center w-3/4 mx-auto mt-8 text-xl leading-relaxed text-gray-700">
            For a thorough monthly update, subscribe to our newsletter to
            receive the most recent information directly in your inbox.{" "}
            <Link to="/contact/stay-connected" className="mt-5 animate-pulse">
              <Buttonn>Sign up</Buttonn>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
