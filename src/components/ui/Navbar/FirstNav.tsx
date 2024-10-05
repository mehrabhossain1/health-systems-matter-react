import ownerImg from "../../../assets/ownerImg.png";

const FirstNav = () => {
  return (
    <div
      className="p-2 text-sm header-top bg-[#01748D]"
      style={{ height: "60px" }}
    >
      <div className="flex justify-between h-full">
        <div className="flex items-center gap-2">
          <img src={ownerImg} alt="owner image" className="w-12 rounded-full" />
          <a href="#" className="text-xl text-white">
            | Sizear
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
