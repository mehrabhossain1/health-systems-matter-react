import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
interface NewsroomCardProps {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
}

const NewsroomCard: React.FC<NewsroomCardProps> = ({
  title,
  description,
  href,
  imageUrl,
}) => {
  return (
    <Card className="flex justify-center items-center hover:border-[#01748D] overflow-hidden border-[#F18A00] rounded-md shadow-lg ">
      {/* Left Side: Image */}
      <div className="w-1/2 h-48">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover h-full p-3 rounded-md"
        />
      </div>

      {/* Right Side: Content */}
      <div className="flex flex-col justify-between w-1/2">
        {/* Title and Description */}
        <div className="flex flex-col justify-center h-full">
          <CardHeader>
            <Link to={href}>
              <CardTitle className="relative text-lg group">
                {/* Smaller title */}
                <span className="line-clamp-1 underline-offset-4 font-medium cursor-pointer transition-colors duration-200 group-hover:underline group-hover:text-[#F18A00]">
                  {title}
                </span>
              </CardTitle>
            </Link>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-slate-600 line-clamp-1">{description}</p>
            {/* Smaller description */}
          </CardContent>
        </div>

        {/* Right Arrow Icon */}
        <CardFooter className="flex items-center justify-end">
          <Link to={href}>
            <button className="px-3 py-1 text-xs font-medium flex transition-all duration-300 transform rounded-md items-center gap-2 text-white bg-[#F18A00] hover:scale-105 hover:bg-[#01748D]">
              {/* "Read More" text with arrow */}
              Read More <span className="text-xl">→</span>
            </button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export default NewsroomCard;
