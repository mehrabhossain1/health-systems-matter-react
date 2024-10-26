import { Link } from "react-router-dom";
import ownerImg from "../../../assets/ownerImg.png";
import { Button } from "../button";

const FirstNav = () => {
  return (
    <div className="p-2 text-sm header-top bg-[#01748D]">
      <div className="flex justify-between h-full">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src={ownerImg}
              alt="owner image"
              className="w-10 rounded-full"
            />
          </Link>
          <Link
            to="/"
            className="text-2xl font-semibold italic text-orange-400 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#01748D] hover:text-white p-2 rounded-md shadow-lg pulse-animation"
          >
            | Sizear
          </Link>
        </div>

        <div className="flex space-x-2 gift">
          <Button
            className="bg-[#F18A00] border-none text-white"
            variant="outline"
          >
            GIFT
          </Button>
          <Button variant="outline">Get Involved</Button>
        </div>
      </div>
    </div>
  );
};

export default FirstNav;
