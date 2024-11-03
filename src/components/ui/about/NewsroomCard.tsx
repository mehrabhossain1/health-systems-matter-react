import React from "react";
import { Link } from "react-router-dom";

interface NewsroomCardProps {
  title: string;
  description: string;
  href: string;
  image: string; // New prop for the image
}

const NewsroomCard: React.FC<NewsroomCardProps> = ({
  title,
  description,
  href,
  image,
}) => {
  return (
    <div className="overflow-hidden transition-transform transform bg-gray-300 shadow-lg hover:scale-105">
      <img src={image} alt={title} className="object-cover w-full h-40" />
      <div className="p-4">
        <Link
          to={href}
          className="block mb-2 text-lg font-semibold text-gray-800 hover:text-[#000B58] hover:underline transition-colors"
        >
          {title}
        </Link>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default NewsroomCard;
