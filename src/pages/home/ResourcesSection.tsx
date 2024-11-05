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
    "https://via.placeholder.com/300x200?text=Overview",
    "https://via.placeholder.com/300x200?text=Reading+List",
    "https://via.placeholder.com/300x200?text=Reports",
    "https://via.placeholder.com/300x200?text=Articles",
    "https://via.placeholder.com/300x200?text=Policy+Primer",
    "https://via.placeholder.com/300x200?text=Books",
    "https://via.placeholder.com/300x200?text=Interviews",
    "https://via.placeholder.com/300x200?text=Commentaries",
    "https://via.placeholder.com/300x200?text=Tools+and+Resources",
  ];

  return (
    <section className="py-12 bg-[#DBF4F5]">
      <div className="max-w-screen-xl pb-10 mx-auto">
        <div className="flex items-center justify-center gap-6 py-10 pb-20">
          <div className="flex-1 h-px bg-[#01748D]"></div>
          <h2 className="font-serif text-6xl text-[#01748D]">Resources</h2>
          <div className="flex-1 h-px bg-[#01748D]"></div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resourcesSubLinks.map((link, index) => (
            <ResourcesSectionCard
              key={index}
              title={link.title}
              description={`Description for ${link.title}`}
              imageUrl={images[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
