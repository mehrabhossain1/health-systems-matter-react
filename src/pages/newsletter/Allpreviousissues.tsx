import PageTitle from "@/components/shared/PageTitle";

const Allpreviousissues = () => {
  // Placeholder for months and PDFs (replace with data from backend later)
  const newsletterIssues = [
    {
      month: "January 2024",
      description:
        "The first newsletter of the year, featuring global health trends and updates.",
      pdfLink: "#", // Link to the PDF file
      imageUrl: "https://via.placeholder.com/300", // Image placeholder
    },
    {
      month: "February 2024",
      description:
        "February's edition highlights public health reports and upcoming events.",
      pdfLink: "#",
      imageUrl: "https://via.placeholder.com/300", // Image placeholder
    },
    {
      month: "March 2024",
      description:
        "March issue focuses on key policy changes and health system innovations.",
      pdfLink: "#",
      imageUrl: "https://via.placeholder.com/300", // Image placeholder
    },
  ];

  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Title Section */}
        <div className="py-8">
          <PageTitle children="All Previous Issues" />
          <p className="w-3/4 mx-auto text-lg leading-relaxed text-gray-700">
            Explore our archive below to find all previous newsletters, neatly
            organized by month. Each issue contains insightful articles,
            reports, and updates on public health topics.
          </p>
        </div>

        {/* Newsletter Archive Section */}
        <div className="space-y-8">
          {newsletterIssues.map((issue, index) => (
            <div
              key={index}
              className="flex items-center p-6 space-x-6 overflow-hidden bg-white rounded-lg shadow-lg"
            >
              {/* Image Section */}
              <div className="flex-shrink-0 w-40 h-40">
                <img
                  src={issue.imageUrl}
                  alt={`Issue of ${issue.month}`}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#01748D]">
                  {issue.month}
                </h3>
                <hr className="my-4 border-t border-[#01748D]" />
                <p className="text-lg text-gray-700">{issue.description}</p>
                <a
                  href={issue.pdfLink}
                  className="mt-4 inline-block text-white bg-[#01748D] hover:bg-[#015f6b] py-2 px-4 rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allpreviousissues;
