import ownerImg from "../../../assets/ownerImg.jpeg";

const FirstNav = () => {
  return (
    <div className=" p-2 text-sm header-top bg-[#01748D] ">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img src={ownerImg} alt="owner image" className="w-8 rounded-full" />
          <a href="#" className="text-white">
            About the site owner |
          </a>
        </div>
        <div className="flex space-x-2 gift">
          <a
            href="#"
            className="px-3 py-1 text-white transition bg-orange-500 rounded-md gift-button hover:bg-orange-600"
          >
            GIFT
          </a>
          <a
            href="#"
            className="px-3 py-1 text-white transition bg-red-500 rounded-md get-involved hover:bg-red-600"
          >
            Get involved
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstNav;
