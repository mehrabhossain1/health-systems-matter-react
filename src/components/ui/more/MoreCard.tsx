// ContactCard.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      className="overflow-hidden hover:border-[#F18A00] rounded-md border border-[#23728D] transition-all transform bg-[#] shadow-lg hover:shadow-xl"
    >
      <Link to={href} className="flex h-full">
        {/* Icon Section */}
        <div className="flex-shrink-0 p-4 text-white bg-[#23728D] ">{icon}</div>

        {/* Text Section */}
        <div className="flex-1 p-4">
          <h3 className="text-lg underline-offset-4 font-medium text-gray-700 transition-all duration-300 hover:underline decoration-[#F18A00]">
            {title}
          </h3>
          <p className="mt-2 text-xs text-gray-500 line-clamp-2">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default MoreCard;
