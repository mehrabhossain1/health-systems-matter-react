import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BookMarksSectionCardProps {
  title: string;
  description: string;
  href: string;
}

const BookMarksSectionCard: React.FC<BookMarksSectionCardProps> = ({
  title,
  description,
  href,
}) => {
  return (
    <Card className="p-6 transition-transform rounded-none border-none transform bg-white shadow-lg hover:shadow-xl hover:bg-[#f4e1d2] hover:-translate-y-1">
      <CardHeader>
        <CardTitle>
          <a
            href={href}
            className="text-2xl font-semibold text-gray-800 hover:underline"
          >
            {title}
          </a>
        </CardTitle>
        <CardDescription className="mt-2 text-sm text-gray-700">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="mt-6">
        <a
          href={href}
          className="px-4 py-2 text-sm flex justify-center items-center gap-2 font-medium text-gray-700 transition-colors border border-[#01748D] hover:text-white hover:bg-[#01748D] hover:border-[#01748D]"
        >
          Read More <span className="text-xl">→</span>
        </a>
      </CardFooter>
    </Card>
  );
};

export default BookMarksSectionCard;
