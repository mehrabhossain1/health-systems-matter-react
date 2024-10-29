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
}

const NewsletterCard: React.FC<NewsletterCardProps> = ({
  title,
  description,
  href,
  icon,
}) => {
  return (
    <Card className="flex flex-col justify-between h-full p-4 transition-all transform bg-white border-none rounded-none shadow-lg hover:shadow-2xl hover:-translate-y-1">
      <div className="relative flex justify-center">
        <div className="absolute top-4 right-4 flex items-center justify-center w-12 h-12 text-[#1975BA]">
          {icon}
        </div>
        <CardHeader>
          <Link
            to={href}
            className="text-xl font-bold text-gray-800 hover:text-[#1975BA] hover:underline transition-colors"
          >
            <CardTitle>{title}</CardTitle>
          </Link>
          <CardDescription className="mt-2 text-gray-600">
            {description}
          </CardDescription>
        </CardHeader>
      </div>
      <CardFooter className="mt-6">
        <Link
          to={href}
          className="inline-block w-full px-4 py-2 text-sm font-medium text-center text-white bg-[#1975BA] transition-colors hover:bg-[#185e94]"
          style={{ borderRadius: 0 }}
        >
          Learn More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsletterCard;
