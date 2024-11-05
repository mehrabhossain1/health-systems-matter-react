const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="mb-12 font-medium text-center text-[#01748D] font-serif">
      {children}
    </h2>
  );
};

export default PageTitle;
