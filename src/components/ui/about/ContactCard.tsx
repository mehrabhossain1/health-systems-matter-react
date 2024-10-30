import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

interface ContactCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  description,
  href,
  icon,
}) => {
  return (
    <Card className="p-6 transition-transform duration-300 transform bg-gray-100 border-none hover:scale-105 hover:shadow-xl">
      <CardHeader className="flex flex-col items-center space-y-3">
        <div className="text-gray-600 transition-colors duration-300 hover:text-red-500">
          {icon}
        </div>
        <CardTitle className="text-lg font-semibold text-gray-800 transition-colors duration-200 cursor-pointer hover:underline hover:text-red-500">
          {title}
        </CardTitle>
      </CardHeader>
      <CardDescription className="mt-2 text-sm text-center text-gray-600">
        {description}
      </CardDescription>
      <CardFooter className="text-center">
        <a
          href={href}
          className="text-sm text-blue-500 underline hover:text-blue-700"
        >
          Learn More
        </a>
      </CardFooter>
    </Card>
  );
};

export default ContactCard;
