// ContactCard.tsx
import React from "react";
import { motion } from "framer-motion";

interface ContactCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  description,
  href,
  image,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="overflow-hidden transition-all transform bg-gray-100 rounded-lg shadow-lg hover:shadow-xl"
    >
      <a href={href} className="block h-full">
        {/* Image Section */}
        <img src={image} alt={title} className="object-cover w-full h-40" />

        {/* Text Section */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 transition-all duration-300 hover:underline hover:text-red-500">
            {title}
          </h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </a>
    </motion.div>
  );
};

export default ContactCard;
