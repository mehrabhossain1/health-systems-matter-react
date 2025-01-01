const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2
      className="mb-12 font-medium text-center text-[#01748D] font-sans"
      style={{
        backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" width="100%" height="20"%3E%3Cpath d="M0,10 C25,15 75,5 100,10" fill="none" stroke="%23F18A00" stroke-width="2" /%3E%3C/svg%3E')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {children}
    </h2>
  );
};

export default PageTitle;
