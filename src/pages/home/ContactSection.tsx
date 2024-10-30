import ContactCard from "@/components/ui/about/ContactCard";
import { FaEnvelope, FaBell, FaQuestionCircle } from "react-icons/fa";

const contactSubLinks: {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Stay Connected",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    icon: <FaEnvelope className="w-16 h-16" />,
  },
  {
    title: "Subscribe",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
    icon: <FaBell className="w-16 h-16" />,
  },
  {
    title: "Support",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    icon: <FaQuestionCircle className="w-16 h-16" />,
  },
];

const ContactSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="flex flex-row-reverse items-center gap-10 py-10 ">
          <h2
            className="text-6xl font-semibold text-gray-800 pe-10"
            style={{ fontFamily: "DynaPuff" }}
          >
            Newsletter
          </h2>
          <div className="flex-1 ml-4 border-t border-black"></div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactSubLinks.map((link, index) => (
            <ContactCard
              key={index}
              title={link.title}
              description={link.description}
              href={link.href}
              icon={link.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
