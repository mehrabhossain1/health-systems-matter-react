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
    <Card className="p-6 transition-transform transform border-none rounded-none shadow-lg bg-[#F4F3F0] hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="flex flex-col items-center">
        {/* Icon at the top */}
        <Icon className="text-7xl text-[#01748D] mb-4" />

        <CardTitle>
          <Link
            to={href}
            className="text-xl font-semibold text-gray-700 hover:underline line-clamp-1"
          >
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="mt-2 text-sm text-gray-600 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="mt-6">
        <Link
          to={href}
          className="px-4 py-2 text-sm flex justify-center items-center gap-2 font-medium text-gray-700 transition-colors border border-[#01748D] hover:text-white hover:bg-[#01748D] hover:border-[#01748D]"
        >
          Read More <span className="text-xl">→</span>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BookMarksSectionCard;
