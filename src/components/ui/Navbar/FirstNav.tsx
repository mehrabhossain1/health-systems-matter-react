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
          <Link to="/" className="text-2xl font-semibold text-white">
            | Sizear
          </Link>
        </div>
        <div className="flex space-x-2 gift">
          <Button variant="outline">GIFT</Button>
          <Button variant="outline">Get Involved</Button>
        </div>
      </div>
    </div>
  );
};

export default FirstNav;
