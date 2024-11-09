import ResourcesSectionCard from "@/components/ui/about/ResourcesSectionCard";

const resourcesSubLinks = [
  {
    title: "Overview",
    href: "/resources/overview",
  },
  {
    title: "Essential reading list",
    href: "/resources/reading-list",
  },
  {
    title: "Reports",
    href: "/resources/reports",
    nestedLinks: [
      { title: "1. Topic Wise Reports", href: "/resources/reports/topic-wise" },
      { title: "2. Major Reports", href: "/resources/reports/major" },
    ],
  },
  {
    title: "Articles",
    href: "/resources/articles",
  },
  {
    title: "Policy primer and Presentations",
    href: "/resources/policy-primer",
  },
  {
    title: "Books",
    href: "/resources/books",
  },
  {
    title: "Interviews and insights",
    href: "/resources/interviews",
  },
  {
    title: "Commentaries and blogs",
    href: "/resources/commentaries",
  },
  {
    title: "Tools and Resources",
    href: "/resources/tools",
  },
];

const ResourcesSection = () => {
  // Mock image URLs for demonstration
  const images = [
    "/src/assets/resources/overview.jpeg",
    "/src/assets/resources/reading-list.jfif",
    "/src/assets/resources/reports.jpeg",
    "/src/assets/resources/articles.jfif",
    "/src/assets/resources/policies.jfif",
    "/src/assets/resources/books.jfif",
    "/src/assets/resources/interviews.jfif",
    "/src/assets/resources/blogs.jfif",
    "/src/assets/resources/tools.jfif",
  ];

  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto mt-20">
        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="flex-1 h-px bg-[#01748D]"></div>
          <h2 className="text-5xl text-[#01748D]">Resources</h2>
          <div className="flex-1 h-px bg-[#01748D]"></div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resourcesSubLinks.map((link, index) => (
            <ResourcesSectionCard
              key={index}
              title={link.title}
              description={`Description for ${link.title}`}
              imageUrl={images[index]}
              href={link.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
