import React from "react";
import { Link } from "react-router-dom";

interface NewsroomCardProps {
  title: string;
  description: string;
  href: string;
}

const NewsroomCard: React.FC<NewsroomCardProps> = ({
  title,
  description,
  href,
}) => {
  return (
    <div className="p-3 hover:border-[#01748D] overflow-hidden transition-transform transform bg-gray-100 border border-[#F18A00] rounded-md shadow-lg hover:scale-105">
      <div className="p-4">
        <Link
          to={href}
          className="block underline-offset-4 hover:text-[#F18A00] mb-2 text-lg font-medium text-gray-700 hover:underline transition-colors"
        >
          {title}
        </Link>
        <p className="text-xs text-gray-600 line-clamp-1">{description}</p>
      </div>
    </div>
  );
};

export default NewsroomCard;
