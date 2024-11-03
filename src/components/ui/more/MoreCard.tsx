// ContactCard.tsx
import React from "react";
import { motion } from "framer-motion";

interface ContactCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode; // Icon can be an image or a component
}

const MoreCard: React.FC<ContactCardProps> = ({
  title,
  description,
  href,
  icon,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="overflow-hidden transition-all transform bg-[#003161] rounded-lg shadow-lg hover:shadow-xl"
    >
      <a href={href} className="flex h-full">
        {/* Icon Section */}
        <div className="flex-shrink-0 p-4 text-white bg-[#000B58] rounded-lg">
          {icon}
        </div>

        {/* Text Section */}
        <div className="flex-1 p-6">
          <h3 className="text-xl font-semibold text-gray-100 transition-all duration-300 hover:underline decoration-[#FFF4B7]">
            {title}
          </h3>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </a>
    </motion.div>
  );
};

export default MoreCard;
