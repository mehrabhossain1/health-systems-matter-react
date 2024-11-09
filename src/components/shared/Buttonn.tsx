const Buttonn = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="relative px-4 py-2 overflow-hidden font-medium text-orange-400 duration-300 border border-b-4 border-orange-400 rounded-md outline-none bg-green-950 hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 group">
      <span className="bg-orange-400 shadow-orange-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
      {children}
    </button>
  );
};

export default Buttonn;
