import ResourcesSectionCard from "@/components/ui/about/ResourcesSectionCard";

import img1 from "../../assets/resources/overview.jpeg";
import img2 from "../../assets/resources/reading-list.jfif";
import img3 from "../../assets/resources/reports.jpeg";
import img4 from "../../assets/resources/articles.jfif";
import img5 from "../../assets/resources/policies.jfif";
import img6 from "../../assets/resources/books.jfif";
import img7 from "../../assets/resources/interviews.jfif";
import img8 from "../../assets/resources/blogs.jfif";
import img9 from "../../assets/resources/tools.jfif";

const resourcesSubLinks = [
  {
    title: "Overview",
    href: "/resources/overview",
    img: img1,
  },
  {
    title: "Essential reading list",
    href: "/resources/reading-list",
    img: img2,
  },
  {
    title: "Reports",
    href: "/resources/reports",
    img: img3,
    nestedLinks: [
      { title: "1. Topic Wise Reports", href: "/resources/reports/topic-wise" },
      { title: "2. Major Reports", href: "/resources/reports/major" },
    ],
  },
  {
    title: "Articles",
    href: "/resources/articles",
    img: img4,
  },
  {
    title: "Policy primer and Presentations",
    href: "/resources/policy-primer",
    img: img5,
  },
  {
    title: "Books",
    href: "/resources/books",
    img: img6,
  },
  {
    title: "Interviews and insights",
    href: "/resources/interviews",
    img: img7,
  },
  {
    title: "Commentaries and blogs",
    href: "/resources/commentaries",
    img: img8,
  },
  {
    title: "Tools and Resources",
    href: "/resources/tools",
    img: img9,
  },
];

const ResourcesSection = () => {
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
              imageUrl={link.img}
              href={link.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
