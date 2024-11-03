import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconType } from "react-icons"; // Import the type for icons

interface BookMarksSectionCardProps {
  title: string;
  description: string;
  href: string;
  Icon: IconType; // Expecting an icon component from react-icons
}

const BookMarksSectionCard: React.FC<BookMarksSectionCardProps> = ({
  title,
  description,
  href,
  Icon,
}) => {
  return (
    <Card className="p-6 transition-transform transform border-none rounded-none shadow-lg bg-gray-50 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="flex flex-col items-center">
        {/* Icon at the top */}
        <Icon className="text-7xl text-[#003161] mb-4" />

        <CardTitle>
          <a
            href={href}
            className="text-2xl font-semibold text-gray-700 hover:underline"
          >
            {title}
          </a>
        </CardTitle>
        <CardDescription className="mt-2 text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="mt-6">
        <a
          href={href}
          className="px-4 py-2 text-sm flex justify-center items-center gap-2 font-medium text-gray-700 transition-colors border border-[#003161] hover:text-white hover:bg-[#003161] hover:border-[#003161]"
        >
          Read More <span className="text-xl">→</span>
        </a>
      </CardFooter>
    </Card>
  );
};

export default BookMarksSectionCard;
