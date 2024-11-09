import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface NewsletterCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode; // New prop for the icon
  cardClassName?: string; // New prop for the card class
}

const NewsletterCard: React.FC<NewsletterCardProps> = ({
  title,
  description,
  href,
  icon,
  cardClassName = "", // Default to empty string if not provided
}) => {
  return (
    <Card
      className={`flex flex-col justify-between h-full p-4 transition-all transform border-[#F18A00] hover:border-[#01748D] rounded-md shadow-lg hover:shadow-2xl hover:-translate-y-1 ${cardClassName}`}
    >
      <div className="relative flex justify-center">
        <div className="absolute flex items-center justify-center w-12 h-12 text-[#F18A00] top-4 right-4 pb-4">
          {icon}
        </div>
        <CardHeader>
          <Link
            to={href}
            className="text-gray-700 transition-colors underline-offset-4"
          >
            <CardTitle className="text-lg font-medium  hover:decoration-[#F18A00] hover:text-[#F18A00] hover:underline">
              {title}
            </CardTitle>
          </Link>
          <CardDescription className="mt-2 text-xs text-gray-500 line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
      </div>
      <CardFooter className="mt-4">
        <Link
          to={href}
          className="inline-block rounded-sm w-full px-4 py-2 text-sm font-medium text-center text-white bg-[#F18A00] transition-colors hover:bg-[#01748D]"
        >
          Learn More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsletterCard;
