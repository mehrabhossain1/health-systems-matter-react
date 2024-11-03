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
      className={`flex bg-[#003161] flex-col justify-between h-full p-4 transition-all transform border-none rounded-none shadow-lg hover:shadow-2xl hover:-translate-y-1 ${cardClassName}`}
    >
      <div className="relative flex justify-center">
        <div className="absolute flex items-center justify-center w-12 h-12 text-[#FFF4B7] top-4 right-4">
          {icon}
        </div>
        <CardHeader>
          <Link
            to={href}
            className="text-xl font-bold text-white decoration-[#FFF4B7] underline-offset-2 hover:underline transition-colors"
          >
            <CardTitle>{title}</CardTitle>
          </Link>
          <CardDescription className="mt-2 text-gray-300">
            {description}
          </CardDescription>
        </CardHeader>
      </div>
      <CardFooter className="mt-6">
        <Link
          to={href}
          className="inline-block w-full px-4 py-2 text-sm font-medium text-center text-white bg-[#185e94] transition-colors hover:bg-[#1e73b4]"
          style={{ borderRadius: 0 }}
        >
          Learn More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsletterCard;
