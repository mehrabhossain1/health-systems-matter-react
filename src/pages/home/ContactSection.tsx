import MoreCard from "@/components/ui/more/MoreCard";
import { FaEnvelope, FaBell, FaQuestionCircle } from "react-icons/fa";

const contactSubLinks: {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Stay Connected",
    href: "/contact/stay-connected",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    icon: <FaEnvelope className="w-16 h-16" />,
  },
  {
    title: "Subscribe",
    href: "/contact/subscribe",
    description:
      "For sighted users to preview content available behind a link.",
    icon: <FaBell className="w-16 h-16" />,
  },
  {
    title: "Support",
    href: "/contact/support",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    icon: <FaQuestionCircle className="w-16 h-16" />,
  },
];

const ContactSection: React.FC = () => {
  return (
    <section className="pt-20 pb-10 bg-gray-100" id="contact">
      <div className="max-w-screen-xl pb-10 mx-auto text-center">
        <div className="flex flex-row-reverse items-center gap-10 mb-10">
          <h2 className="text-5xl font-semibold text-[#01748D] pe-10">
            Contact
          </h2>
          <div className="flex-1 ml-4 border-t border-[#01748D]"></div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactSubLinks.map((link, index) => (
            <MoreCard
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
