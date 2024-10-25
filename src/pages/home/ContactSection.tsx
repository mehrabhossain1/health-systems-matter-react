import ContactCard from "@/components/ui/about/ContactCard";

const contactSubLinks: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Stay Connected",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Subscribe",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Support",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];

const ContactSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-4xl font-bold text-gray-800">Contact Us</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactSubLinks.map((link, index) => (
            <ContactCard
              key={index}
              title={link.title}
              description={link.description}
              href={link.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
