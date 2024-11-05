import PageTitle from "@/components/shared/PageTitle";

const Overview = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Testimonials Section */}
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <PageTitle children="Resources Overview" />
          <p className="w-3/4 mx-auto text-2xl leading-relaxed text-gray-700">
            The Health System Library aspires to be a comprehensive repository
            of essential resources on health systems and global health. By
            compiling major reports, books, groundbreaking publications,
            significant policy briefs and presentations, thought-provoking
            interviews, and insightful analyses, it supports public health
            professionals in their pursuit of knowledge and professional
            development. Resources are organized by topic to facilitate
            systematic access. Each resource is sourced from esteemed
            organizations, with due credit given to acknowledge their invaluable
            contributions. This section supports those working in health systems
            by providing knowledge that boosts confidence and aids career
            growth. Ultimately, it aims to systematically present all major
            global health resources and major actors’ initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
