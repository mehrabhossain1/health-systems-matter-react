import PageTitle from "@/components/shared/PageTitle";

const PublicHealthOrganizations = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Testimonials Section */}
        <div className="p-8 bg-white">
          <PageTitle children="Key/Dedicated Public Health Organizations" />
          <p className="w-3/4 mx-auto text-2xl leading-relaxed text-gray-700">
            Many organizations, both large and small, have long been dedicated
            to public health and health system strengthening. Understanding
            their work and plans to promote public health is both enlightening
            and valuable. This section offers a comprehensive list of
            organizations operating at global, regional, and local levels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PublicHealthOrganizations;
