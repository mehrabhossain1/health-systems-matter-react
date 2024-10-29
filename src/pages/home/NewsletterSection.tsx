import NewsletterCard from "@/components/ui/about/NewsletterCard";

const newsletterSubLinks = [
  {
    title: "Overview",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Subscribe for newsletter",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "All previous issues",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];

const NewsletterSection = () => {
  return (
    <section className="py-12 bg-[#1975BA]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-row-reverse items-center gap-10 py-10 ">
          <h2
            className="text-6xl font-semibold text-white pe-10"
            style={{ fontFamily: "DynaPuff" }}
          >
            Newsletter
          </h2>
          <div className="flex-1 ml-4 border-t border-white"></div>
        </div>
        <p className="w-3/4 pb-20 mx-auto text-2xl italic text-center text-gray-200">
          Welcome to <span className="font-bold">Health Systems Matter!</span>{" "}
          We’re excited to have you here. Look out for our monthly newsletter,
          which will arrive in your inbox by the first week of each month. We
          look forward to keeping you informed and engaged!
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsletterSubLinks.map((item, index) => (
            <NewsletterCard
              key={index}
              title={item.title}
              description={item.description}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
