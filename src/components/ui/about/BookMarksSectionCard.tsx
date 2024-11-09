import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconType } from "react-icons"; // Import the type for icons
import { Link } from "react-router-dom";

interface BookMarksSectionCardProps {
  title: string;
  description: string;
  href: string;
  Icon: IconType;
}

const BookMarksSectionCard: React.FC<BookMarksSectionCardProps> = ({
  title,
  description,
  href,
  Icon,
}) => {
  return (
    <Card className="border border-[#01748D] p-4 transition-transform transform rounded-md shadow-sm bg-[#F4F3F0] hover:shadow-md hover:-translate-y-1">
      <CardHeader className="flex flex-col items-center justify-center space-y-2">
        {/* Icon at the top, smaller size */}
        <Icon className="text-4xl text-[#01748D]" />

        {/* Title */}
        <CardTitle className="text-sm font-semibold text-center text-gray-700">
          <Link to={href} className="hover:underline line-clamp-1">
            {title}
          </Link>
        </CardTitle>

        {/* Description */}
        <CardDescription className="mt-1 text-xs text-center text-gray-600 line-clamp-1">
          {description}
        </CardDescription>
      </CardHeader>

      {/* Smaller "Read More" Button inside the card */}
      <CardFooter className="flex items-center justify-center mt-4">
        <Link
          to={href}
          className="px-4 py-1 text-xs font-medium text-white bg-[#01748D] rounded-full flex justify-center items-center gap-1 transition-all duration-300 transform hover:bg-[#015f7f] hover:scale-105 hover:shadow-sm"
        >
          <span>Read More</span>
          <span className="text-sm">→</span> {/* Smaller arrow */}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BookMarksSectionCard;
